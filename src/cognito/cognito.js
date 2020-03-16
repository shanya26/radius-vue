import { Config, CognitoIdentityCredentials } from "aws-sdk";
import IndexRouter from '../router/index'
import {
  CognitoUser,
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";
import UserInfoStore from '../app/user-info-store'; 
import config from "@/config";

export default class CognitoAuth {
  constructor() {
    this.userSession = null;
    this.configure(config)
  }

  isAuthenticated (cb) {
    let cognitoUser = this.getCurrentUser()
    if (cognitoUser != null) {
        cognitoUser.getSession((err) => {
        if (err) {
            return cb(err, false)
        }
        return cb(null, true)
        })
    } else {
        cb(null, false)
    }
}

configure (config) {
    if (typeof config !== 'object' || Array.isArray(config)) {
        throw new Error('[CognitoAuth error] valid option object required')
    }
    this.userPool = new CognitoUserPool({
        UserPoolId: config.IdentityPoolId,
        ClientId: config.ClientId
    })
    Config.region = config.region
    Config.credentials = new CognitoIdentityCredentials({
        IdentityPoolId: config.IdentityPoolId
    })
    this.options = config
}

signup(data, cb) {
    let attributeList = [
        new CognitoUserAttribute({
            Name: 'email',
            Value: data.email
        }),
        new CognitoUserAttribute({
            "Name":"profile",
            Value:data.profile
        }),
        new CognitoUserAttribute({
            "Name":"picture",
            Value:data.picture
        }),
        new CognitoUserAttribute({
            "Name":"name",
            Value:data.name
        }),
        new CognitoUserAttribute({
            "Name":"gender",
            Value:data.gender
        }),
        new CognitoUserAttribute({
            "Name":"phone_number",
            Value:data.phone_number
        }),
        new CognitoUserAttribute({
            "Name":"locale",
            Value:data.locale
        }),
        new CognitoUserAttribute({
            "Name":"address",
            Value:data.address
        }),
        new CognitoUserAttribute({
            "Name":"birthdate",
            Value:data.birthdate
        }),
        new CognitoUserAttribute({
            "Name":"nickname",
            Value:data.nickname
        }),
        new CognitoUserAttribute({
            "Name":"custom:group",
            Value:data.group
        })
    ]

    this.userPool.signUp(data.username, data.password, attributeList, null, cb)
}
authenticate (username, pass, cb) {

    let authenticationData = { Username: username, Password: pass }
    this.authenticationDetails = new AuthenticationDetails(authenticationData)
    this.username = username;
    let userData = { Username: username, Pool: this.userPool }
    let cognitoUser = new CognitoUser(userData)
    cognitoUser.options = this.options    
    var self = this;
    //this.$store.mutations.setCognitoInfo(this.cognitoUser)
    cognitoUser.authenticateUser(this.authenticationDetails, {
        onSuccess: function (result) {
            var logins = {}            
            UserInfoStore.setCognitoUser(cognitoUser);
            self.cognitoUser = cognitoUser;
            logins['cognito-idp.' + cognitoUser.options.region + '.amazonaws.com/' + cognitoUser.options.UserPoolId] = result.getAccessToken().getJwtToken()
            localStorage.setItem("username",cognitoUser.username);
            Config.credentials = new CognitoIdentityCredentials({
                IdentityPoolId: cognitoUser.options.UserPoolId,
                Logins: logins
            })
            //console.log(Config.credentials)
            cb(null,result)
        },
        onFailure: function (err) {
            cb(err);
        },
        newPasswordRequired: function (userAttributes, requiredAttributes) {
			//console.log('New Password Is Required',userAttributes, requiredAttributes)
			delete userAttributes.email_verified; // it's returned but not valid to submit
            localStorage.setItem("username",username);
			localStorage.setItem("requiredAttributes",requiredAttributes);
			IndexRouter.push({ name: 'newPassword'})
        }
    })
}

getCurrentUser () {
	let username = localStorage.getItem("username")
	if(this.cognitoUser && this.cognitoUser.signInUserSession){
		if(this.cognitoUser.username){
			this.cognitoUser.username = username
		}
		return this.cognitoUser
	}else{
        var user = UserInfoStore.getCognitoUser();
        if(user && user.signInUserSession){
            this.cognitoUser = user
            return this.cognitoUser;
        }		
		let userData = { Username: username, Pool: this.userPool}
		this.cognitoUser = new CognitoUser(userData)
		if(this.cognitoUser){
			this.cognitoUser.username = username;
			return this.cognitoUser;
		}else{
			return this.userPool.getCurrentUser()	
		}
		
	}
} 
getSession(){
	let cognitouser = this.getCurrentUser();
	let session = cognitouser.getSession(function(err,session){
		if(session){
			UserInfoStore.setLoggedIn(true);			
			return true
		}else{
			UserInfoStore.setLoggedIn(false);
			localStorage.setItem("username","");
			return false
		}
	});
	return session
}

completeNewPasswordChallenge(newpass,callback){
	let cognitoUser = this.getCurrentUser()
	if (cognitoUser != null) {
		cognitoUser.completeNewPasswordChallenge(newpass,localStorage.getItem("requiredAttributes"),callback);
	}
}

confirmRegistration (username, code, cb) {
    let cognitoUser = new CognitoUser({
        Username: username,
        Pool: this.userPool
    })
    cognitoUser.confirmRegistration(code, true, cb)
}

recoverPassword(callback){
	let cognitoUser = this.getCurrentUser()
    cognitoUser.forgotPassword(callback)	
}

confirmPassword(confirmCode,newPass,callback){
	let cognitoUser = this.getCurrentUser()
	cognitoUser.confirmPassword(confirmCode,newPass,callback)
}

/**
  * Logout of your cognito session.
  */
globalSignOut (callback) {
    let cognitouser = this.getCurrentUser();
    this.getSession()
    cognitouser.globalSignOut(callback)
    cognitouser.signOut()
    //this.onChange(false)
}

/**
* Resolves the current token based on a user session. If there
* is no session it returns null.
* @param {*} cb callback
*/
getIdToken (cb) {
    if (this.getCurrentUser() == null) {
        return cb(null, null)
    }
    this.getCurrentUser().getSession((err, session) => {
        if (err) return cb(err)
        if (session.isValid()) {
        return cb(null, session.getAccessToken().getJwtToken())
        }
        cb(Error('Session is invalid'))
    })
}

getUserAttributes(callback){
    let cognitouser = this.getCurrentUser();
    cognitouser.getUserAttributes(callback);
}

getAttributeVerificationCode(attributeName,callback){
    let cognitouser = this.getCurrentUser();
    cognitouser.getUserAttributes(callback);
}

updateUserAttributes(attributes, callback){
    let attributeList = [];
    for(var i=0;i<attributes.length;i++){
        var attr = attributes[i];
        if(attr){
           attributeList.push(
                new CognitoUserAttribute({
                    Name: attr["name"],
                    Value: attr["value"]
                })
           ) 
        }
    }
    let cognitouser = this.getCurrentUser();
    cognitouser.updateAttributes(attributeList,callback);
}

}

