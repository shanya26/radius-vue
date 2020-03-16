import apiRequest from "./apiRequest"
import CognitoAuth from "../cognito/cognito";
import axios from 'axios';
const cognitoAuth = new CognitoAuth();
const loginStore  = {
  state: {    
    cognitoInfo: {},
    loggedIn: false,
    username:"",
    session:"",    
    cognitoUser:{},
  },
  mutations: {     
    auth_request(state) {
      apiRequest.mutations.api_request(state)
    },
    auth_success(state,session,msg) {
       state.session = session
       state.loggedIn = true       
       apiRequest.mutations.api_success(state,msg)
    },
    auth_error(state,msg) {
      apiRequest.mutations.api_error(state,msg)
      state.loggedIn = false
    },
    logout(state) {
      state.session = ''
      state.loggedIn = false
    },
    setCognitoInfo(state,value){
      state.cognitoInfo = value
    },
    getCognitoInfo(state){
      return state.cognitoInfo
    }

  },
  actions: {
    login({ commit },{data}) { 
      return new Promise((resolve, reject) => {
         commit("auth_request")
         cognitoAuth.authenticate(
            data.username,
            data.password,
            (err,success) => {
              if (!success) {
                commit("auth_error",err.message);
                reject(err)              
              } else {
                localStorage.setItem("username",success.getAccessToken().payload["username"]);
                localStorage.setItem("accesstoken",JSON.stringify(success.accessToken))
                localStorage.setItem("idToken",JSON.stringify(success.idToken))
                localStorage.setItem("sub",success.accessToken.payload.sub)
                localStorage.setItem("clockDrift",success.clockDrift)
                delete axios.defaults.headers.common['X-COG-AUTH']
                axios.defaults.headers.common['X-COG-AUTH'] = success.idToken.jwtToken 
                var grp = success.getAccessToken().payload["cognito:groups"];
                if(grp && grp.length){
                  localStorage.setItem("usergroup",JSON.stringify(grp));  
                }else{
                  localStorage.setItem("usergroup",JSON.stringify([data.group]));
                }                
                commit("auth_success",success,"success")              
              }
                resolve(success)
            }
          ); 
               
      });
    },
    updateUserAttributes({ commit },{datas}){
        return new Promise((resolve, reject) => {
         commit("auth_request")
         cognitoAuth.updateUserAttributes(
            datas,
            (err,resp) => {
              //console.log(resp,err);
              if (!resp) {
                commit("api_error",err.message);
                reject(err)              
              } else {
                commit("api_success",resp,"success");
                resolve(resp)              
              }                
            }
          ); 
               
      });
    },
    getUserData({ commit }){
      return new Promise((resolve, reject) => {
         commit("auth_request")
         cognitoAuth.getUserAttributes(
            (err,resp) => {
              //console.log(resp,err);
              if (!resp) {
                commit("auth_error",err.message);
                reject(err)              
              } else {
                commit("auth_success",resp,"success");
                if(resp){
                  for(var i in resp){
                    if(resp[i] && resp[i].getName()=="custom:mt4Id"){
                      localStorage.setItem("mt4Id",resp[i].getValue());
                      break;
                    }
                  }
                }
                resolve(resp)            
              }
              
            }
          ); 
               
      })
    },
    cognitoSignup({ commit },{data}) { 
      return new Promise((resolve, reject) => {
         commit("auth_request","Creating cognito users...")
         cognitoAuth.signup(
            data,
            (err,success) => {
              if (!success) {
                commit("auth_error",err.message);
                reject(err)              
              } else {
                commit("auth_success",success,"success");
                resolve(success)            
              }
              
            }
          ); 
               
      })
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout')
        delete axios.defaults.headers.common['X-COG-AUTH']
        localStorage.removeItem("username");
        localStorage.removeItem("mt4Id");
        localStorage.removeItem("usergroup");           
        localStorage.removeItem("accesstoken");
        localStorage.removeItem("idToken");
        localStorage.removeItem("sub");
        localStorage.removeItem("managersub");
        resolve()
      })
    },
    saveNewPassword({ commit },{ data }){
      return new Promise((resolve, reject) => {
         commit("api_request")
         cognitoAuth.confirmPassword(
          data.confirmcode,
          data.password,
          {              
              onFailure:function(err){
                commit("api_error",err.message);
                reject(err);
              },
              onSuccess:function(success){
                commit("api_success","success")  
                resolve(success);
              }
            } 
          ); 
               
      })      
    },
    confirmCode({ commit },{ data }){
      return new Promise((resolve, reject) => {
         commit("api_request")
         cognitoAuth.confirmRegistration(
           data.username, 
           data.confirmcode,
            (err, result) => {
              if (!result) {
                commit("api_error",err.message);
                reject(err);
              } else {
                commit("api_success","success") 
                resolve(result);
              }
            }
          ); 
               
      })   
    },
    recoverPassword({ commit }){
      return new Promise((resolve, reject) => {
         commit("api_request")
         cognitoAuth.recoverPassword(
            {
              inputVerificationCode:function(data){
                commit("api_success","success")  
                resolve(data);
              },
              onFailure:function(err){
                commit("api_error",err.message);
                reject(err);                
                localStorage.setItem("username","")
              },
              onSuccess:function(success){
                commit("api_success","success")  
                resolve(success);
              }
            } 
          ); 
               
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.loggedIn
  }
}

export default loginStore;