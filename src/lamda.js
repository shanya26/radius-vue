const https = require('https');
var AWS = require('aws-sdk');
const region = "us-east-1"
const idPool = "us-east-1_FwxO2Yrgr"
AWS.config.update({region: region});
const dynamo = new AWS.DynamoDB.DocumentClient();
const TableName = "PATECH_USERS";
const params = {"UserPoolId": idPool};
const cognitoIdentityService = new AWS.CognitoIdentityServiceProvider({region: region});
const cognitoISP = new AWS.CognitoIdentityServiceProvider();
let profileCreated = false;
let datas  = {},callbackfn = null,contextobj = null,queryString={},action="",group="",body={};
let topGroup = "admin"
let isAutorizedGroup = ["admin","dealer"]
const exteranlAPIOptions = {
    host: 'danumhz0xi.execute-api.us-east-1.amazonaws.com',
    port: 443,
    headers: {
        'Content-Type': 'application/json',
}
}
const getResponse = function(code,items){
    var response = {
        statusCode: code,
        items: code=="500"?null:items,
        result:code==500?"error":"success"
    };
    return response
}
const createGrp = ()=>{
    var groupParams = {
        GroupName: body["group"],
        UserPoolId: params["UserPoolId"],
        Username: body["username"]
    };
    cognitoISP.adminAddUserToGroup(groupParams).promise().then(() =>{
        console.log("Created group")
    }).catch(err => {
        console.log("failed in group",err)
    });
}
const removeUser = ()=>{
    var ispParams = {
        UserPoolId: params["UserPoolId"],
        Username: body["username"]
    };
    cognitoISP.adminDeleteUser(ispParams).promise().then(() =>{
         callbackfn(null,getResponse(200,'Removed User'))
    }).catch((e) => {
        callbackfn(getResponse(500),null)
    });
}
const removeGrp = (group)=>{
    var groupParams = {
        GroupName: group?group:body["group"],
        UserPoolId: params["UserPoolId"],
        Username: body["sub"]
    };
    cognitoISP.adminRemoveUserFromGroup(groupParams).promise().then(() =>{
        console.log("removed user from group")
    }).catch(err => {
        console.log("failed in group",err)
    });
}
const createDynamoUserProfile = function(){
    let timenow = new Date();    
    body["createdDate"] = timenow.toLocaleDateString()+" " +timenow.toLocaleTimeString()     
    const putParams = {
        TableName:TableName,
        Item:body
    }
    dynamo.put(putParams, function(err, data) {
      if (err) {
          profileCreated = false;
      } else {
          profileCreated = true;
        
      }
    });
    
}
const removeDynamoProfile = ()=>{
    var params = {
        TableName:TableName,
        Key:{
            "sub": body["sub"]
        },
        ConditionExpression:"#sub <= :val",
        ExpressionAttributeNames: {
            "#sub": "sub"
        },
        ExpressionAttributeValues:{":val":body["sub"]}
    }; 
    return new Promise((resolve,reject)=>{
        dynamo.delete(params, function(err, data) {
            if (err) { 
                reject(err,[]);
            } 
            resolve(data)
        });
    });
}


const updateDynamoGroup = (updateKey,value)=>{
     var params = {
        TableName:TableName,
        Key:{
            "sub": body["sub"]
        },
        UpdateExpression: "set #updateKey=:key",
        ExpressionAttributeNames: {
            "#updateKey": updateKey
        },
        ExpressionAttributeValues:{":key":value},
        ReturnValues:"UPDATED_NEW"
    }; 
    return new Promise((resolve,reject)=>{
        dynamo.update(params, function(err, data) {
            if (err) { 
                reject(err,[]);
            } 
            resolve(data)
        });
    });
}


const updateCount = (managersub,updateKey)=>{
     var params = {
        TableName:TableName,
        Key:{
            "sub": managersub
        },
        UpdateExpression: "ADD #updateKey :value",
        ExpressionAttributeNames: {
            "#updateKey": updateKey
        },
        ExpressionAttributeValues:{":value":1},
        ReturnValues:"ALL_NEW"
    }; 
    return new Promise((resolve,reject)=>{
        dynamo.update(params, function(err, data) {
            if (err) { 
                console.log(err)
                reject(err,[]);
            } 
            resolve(data)
        });
    });
}

const updateDynamoProfile = ()=>{
     var exp = "set #address = :address,#birthdate = :birthdate,#city = :city,#createdDate = :createdDate,#firstname = :firstname,#gender = :gender,#group = :group,#lastname = :lastname,#locale = :locale,#name = :name,#nickname = :nickname,#phone_number = :phone_number,#state = :state,#picture = :picture,#country = :country"
     var params = {
        TableName:TableName,
        Key:{
            "sub": body["sub"]
        },
         UpdateExpression: exp,
         ExpressionAttributeNames: {
            "#address": "address",
            "#birthdate": "birthdate",
            "#city": "city",
            "#createdDate": "createdDate",
            "#firstname": "firstname",
            "#gender": "gender",
            "#group": "group",
            "#lastname": "lastname",
            "#locale": "locale",
            "#name": "name",
            "#nickname": "nickname",
            "#phone_number": "phone_number",
            "#state": "state",
            "#picture": "picture",
            "#country": "country"
        },
        ExpressionAttributeValues:{
            ":address":body["address"],
            ":birthdate":body["birthdate"],
            ":city":body["city"],
            ":createdDate":body["createdDate"],
            ":firstname":body["firstname"],
            ":gender":body["gender"],
            ":group":body["group"],
            ":lastname":body["lastname"],
            ":locale":body["locale"],
            ":name":body["name"],
            ":nickname":body["nickname"],
            ":phone_number":body["phone_number"],
            ":state":body["state"],
            ":picture":body["picture"],
            ":country":body["country"]
        },
        ReturnValues:"UPDATED_NEW"
    }; 
    return new Promise((resolve,reject)=>{
        dynamo.update(params, function(err, data) {
            if (err) { 
                console.log(err)
                reject(err,[]);
            } 
            resolve(data)
        });
    });
}

const updateDynamoProfiles = async ()=>{
    updateDynamoProfile().then((res)=>{
        callbackfn(null,getResponse(200,null))
    }).catch((e)=>{
        callbackfn(getResponse(500,e))
    })
}

const listbyGroups = (group)=>{
    let filterExpression = {
        FilterExpression: '#group = :group',
        ExpressionAttributeNames: {
            '#group': "group"
        },
        ExpressionAttributeValues: {
            ':group': group
        }
    }
    let listParams = {
        TableName:TableName,
        ...filterExpression
    }
    return new Promise((resolve,reject)=>{
        dynamo.scan(listParams, function(err, data) {
            if (err) { 
                reject([],err);
            }
            console.log(data)
            resolve(data.Items);
        });
    });
};


const listbyGroupsAvoidManager = (group,managersub)=>{
    let filterExpression = {
        FilterExpression: '#group = :group AND #managersub <>:managersub',
        ExpressionAttributeNames: {
            '#group': "group",
            "#managersub": "managersub"
        },
        ExpressionAttributeValues: {
            ':group': group,
            ":managersub": managersub
        }
    }
    let listParams = {
        TableName:TableName,
        ...filterExpression
    }
    return new Promise((resolve,reject)=>{
        dynamo.scan(listParams, function(err, data) {
            if (err) { 
                reject([],err);
            }
            console.log(data)
            resolve(data.Items);
        });
    });
};

const listBysub = (sub)=>{
    let items = [];
    let filterExpression = {
        FilterExpression: '#sub = :sub',
        ExpressionAttributeNames: {
            '#sub': "sub",
        },
        ExpressionAttributeValues: {
            ':sub': sub,
        }
    }
    let listParams = {
        TableName:TableName,
        ...filterExpression
    }
    return new Promise((resolve,reject)=>{
      dynamo.scan(listParams, function(err, data) {
            if (err) { 
                reject(err)
            }
            resolve(data.Items)
        });  
    });
    
}

const listByManager = (sub)=>{
    let filterExpression = {
        FilterExpression: '#managersub = :managersub',
        ExpressionAttributeNames: {
            '#managersub': "managersub",
        },
        ExpressionAttributeValues: {
            ':managersub': sub
        }
    }
    let listParams = {
        TableName:TableName,
        ...filterExpression
    }
    return new Promise((resolve,reject)=>{
        dynamo.scan(listParams, function(err, data) {
            if (err) { 
                reject([],err);
            }
            resolve(data.Items)
        });
    });
}


const createdynamoProfile = async ()=>{
    /*
        required params : sub,group,profile details
    */
    const createProfile = async ()=>{
        try{
            await createDynamoUserProfile();
            await createGrp();
            if(body["group"]=='subscriber'){
                await updateCount(body["managersub"],'subscribercount')
            }else if(body["group"]=='dealer'){
                await updateCount(body["managersub"],'dealercount')
            }
            if(body["group"]=='subscriber'){
                storePlainPassword();
            }else{
                callbackfn(null,getResponse(200,null))
            }
        }catch(err){
            callbackfn(getResponse(500),null)
        }
    }

    if(body["group"]=='dealer'){
        listbyGroups("admin").then((resp)=>{
            let settings = resp[0].settings; 
            body["nasValue"] = settings["nasValue"];
            body["subscriberValue"] = settings["subscriberValue"]; 
            createProfile();
        }).catch((err)=>{ 
            callbackfn(getResponse(500,err),null)
        })
    }else{
        createProfile()
    }
    
    
} 

const removeDynamoRow = async ()=>{
    await removeDynamoProfile().then(()=>{
        removeUser()
    }).catch((e)=>{
        //contextobj.fail()
        callbackfn(e,null)
    })

}

const changeCognitoGroup = async ()=>{
    /*
        required params : sub,group
    */
    try{
        let items = await listBysub(datas["sub"]);
        if(items && items.length){
            let group = items[0].group;
            await removeGrp(group);
            await createGrp();
        }
        updateDynamoGroup("group",datas["group"]).then(()=>{
            callbackfn(null,getResponse(200))
        }).catch((e)=>{ 
            callbackfn(getResponse(500))
        })
        callbackfn(null,getResponse(200,null))
    }catch(err){
        callbackfn(getResponse(500,null))
    }
}
const getMyChildrens = (sub)=>{
    let items = listByManager(sub).then((data)=>{
        callbackfn(null,getResponse(200,data))
    }).catch((err)=>{ 
        callbackfn(getResponse(500,err),null)
    })
}
const getMyprofile = (sub)=>{    
    let items = listBysub(sub).then((data)=>{
        callbackfn(null,getResponse(200,data))
    }).catch((err)=>{ 
        callbackfn(getResponse(500,err),null)
    })
}
const createManager = async ()=>{
    if(body["group"]  == topGroup){                    
        body["managersub"] = "None"
        body["manager"] = "None"
        createdynamoProfile()
    }
    if(body.managersub != "None"){
        let list = await listBysub(body.managersub);
        if(list && list.length){
            body["manager"] = list[0].username;
            createdynamoProfile()
        } 
    } 
    
}
const getListbyGroup = async(group)=>{
    listbyGroups(group).then((resp)=>{
        callbackfn(null,getResponse(200,resp))
    }).catch((err)=>{ 
        callbackfn(getResponse(500,err),null)
    })
}
const storePlainPassword = ()=>{
    var data =  {
      "event": "I_radcheck",
      "username": body["username"],
      "attribute": "Cleartext-Password",
      "op": ":=",
      "value": body["password"]
    }
    const post = (path, payload) => new Promise((resolve, reject) => {
        const options = { ...exteranlAPIOptions, path, method: 'POST' };
        const req = https.request(options, res => {
            let buffer = "";
            res.on('data', chunk => buffer += chunk)
            res.on('end', () =>resolve(buffer))
        });
        req.on('error', e => reject(e.message));
        req.write(JSON.stringify(payload));
        req.end();
    })
    post("/prod", data).then((res)=>{
        callbackfn(null,getResponse(200,res));
    }).catch((e)=>{
        callbackfn(getResponse(500));
    });
}
const saveSettings = async ()=>{
    const saveAction = ()=>{
        let sub = "";
        listbyGroups("admin").then((resp)=>{
            sub = resp[0].sub
            var params = {
                TableName:TableName,
                Key:{
                    "sub": sub
                },
                UpdateExpression: "set #settings=:settings",
                ExpressionAttributeNames: {
                    "#settings": "settings"
                },
                ExpressionAttributeValues:{":settings":body},
                ReturnValues:"UPDATED_NEW"
            }; 
            return new Promise((resolve,reject)=>{
                dynamo.update(params, function(err, data) {
                    if (err) { 
                        reject(err,[]);
                    } 
                    resolve(data)
                });
            });
        }).catch((err)=>{ 
            callbackfn(getResponse(500,err),null)
        })
        listbyGroups("dealer").then((resp)=>{
            for(let i=0;i<resp.length;i++){
               var params = {
                    TableName:TableName,
                    Key:{
                        "sub": resp[i].sub
                    },
                    UpdateExpression: "set #nasValue=:nasValue,#subscriberValue=:subscriberValue",
                    ExpressionAttributeNames: {
                        "#nasValue": "nasValue",
                        "#subscriberValue": "subscriberValue"
                    },
                    ExpressionAttributeValues:{
                        ":nasValue":body["nasValue"],
                        ":subscriberValue":body["subscriberValue"]
                    },
                    ReturnValues:"UPDATED_NEW"
                }; 
                return new Promise((resolve,reject)=>{
                    dynamo.update(params, function(err, data) {
                        if (err) { 
                            reject(err,[]);
                        } 
                        resolve(data)
                    });
                }); 
            }
            
        }).catch((err)=>{ 
            callbackfn(getResponse(500,err),null)
        })
        
    }
    saveAction()
}

const updateRadius = async ()=>{
    var data =  {
      "event": "U_nas",
      ...body
    }
    const post = (path, payload) => new Promise((resolve, reject) => {
        const options = { ...exteranlAPIOptions, path, method: 'POST' };
        const req = https.request(options, res => {
            let buffer = "";
            res.on('data', chunk => buffer += chunk)
            res.on('end', () =>resolve(buffer))
        });
        req.on('error', e => reject(e.message));
        req.write(JSON.stringify(payload));
        req.end();
    })
    post("/prod", data).then((res)=>{
        callbackfn(null,getResponse(200,res));
    }).catch((e)=>{
        callbackfn(getResponse(500));
    });
}
const saveRadius = async ()=>{
    var data =  {
      "event": "I_nas",
      ...body
    }
    const post = (path, payload) => new Promise((resolve, reject) => {
        const options = { ...exteranlAPIOptions, path, method: 'POST' };
        const req = https.request(options, res => {
            let buffer = "";
            res.on('data', chunk => buffer += chunk)
            res.on('end', () =>resolve(buffer))
        });
        req.on('error', e => reject(e.message));
        req.write(JSON.stringify(payload));
        req.end();
    })
    post("/prod", data).then((res)=>{
        callbackfn(null,getResponse(200,res));
    }).catch((e)=>{
        callbackfn(getResponse(500));
    });
}
const getRadiusList = async ()=>{
    console.log(queryString)
    const post = (path, payload) => new Promise((resolve, reject) => {
        const options = { ...exteranlAPIOptions, path, method: 'GET' };
        const req = https.request(options, res => {
            let buffer = "";
            res.on('data', chunk => buffer += chunk)
            res.on('end', () =>resolve(buffer))
        });
        req.on('error', e => reject(e.message));
        req.end();
    })
    post("/prod?event=G_nas&username="+queryString["username"]).then((res)=>{
        callbackfn(null,getResponse(200,res));
    }).catch((e)=>{
        callbackfn(getResponse(500));
        
    });
}
exports.handler = (event, context, callback) => {
    datas = event;
    callbackfn = callback;
    contextobj = datas["context"];
    queryString = datas["params"]["querystring"]
    action = queryString["action"]
    group = contextobj["ugroup"]
    body = datas["body-json"]
    if(contextobj && contextobj["http-method"]){
       switch(contextobj["http-method"]){
         case "GET":
             if(action && action.toLowerCase() == "getmyprofile"){
                getMyprofile(contextobj["uid"])
             }else if(action && action.toLowerCase() == "getmychildren"){
                getMyChildrens(contextobj["uid"])
             }else if(action && action.toLowerCase() == "getmydealerschildren"){
                getMyChildrens(queryString["sub"])
             }else if(action && action.toLowerCase() == "getlistbygroup"){
                getListbyGroup(queryString["group"])
             }else if(action && action.toLowerCase() == "getradiuslist"){
                getRadiusList()
             }  
         break;
         case "POST":
            if(action && action.toLowerCase() == "createprofile"){
                createManager()
            }else if(action && action.toLowerCase() == "updateprofile"){  
                updateDynamoProfiles()
            }else if(action && action.toLowerCase() == "savesettings"){  
                saveSettings()
            }else if(action && action.toLowerCase() == "saveradius"){  
                saveRadius()
            }else if(action && action.toLowerCase() == "updateradius"){  
                updateRadius()
            }
         break;
         case "PUT": 
            if(action && action.toLowerCase() == "changegroup"){  
                 changeCognitoGroup()
            }
         break;
         case "DELETE":
              if(action && action.toLowerCase() == "removeprofile"){  
                 removeDynamoRow()
              }
         break;
       }  
    }  
};


//action=createprofile
//action=changegroup
//action=updateprofile
//action=removeprofile
//action=getMyprofile
//action=getMyChildren