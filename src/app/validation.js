
//define regexp with keypair
let regExp = {
	emptySpace : new RegExp(/\s/), //space is not allowed
	emptySpaceStartandEnd : new RegExp(/^\s+|\s+$/),
	validateEmail : new RegExp(/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/),
	validatePassword:new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})")
}
//define message with keypair
let msgObj = {
	"noInput":"Please provide ",
	"emptySpace":"Contains empty space",
	"emptySpaceStartandEnd": "Space is not allowed",
	"validateEmail":"Email is not valid",
	"validatePassword":"Password is not valid"
} 

let validate = function(formparams){
	var prop,errorMsg = "",errorList = {};
	for(prop in formparams){
		var value = formparams[prop]		 
		switch(prop){
			case "name":
				errorMsg = nameValidation(prop,value);
				break;
			case "username":
				errorMsg = nameValidation(prop,value);
				break;
			case "password":
				errorMsg = passwordValidation(prop,value);
				break;
			case "email":
				errorMsg = emailvalidation(prop,value);
				break;
		}
		if(errorMsg != "" && errorMsg!=undefined){
			errorList[prop] = errorMsg;
			//errorList.push({"attr":prop,"msg":errorMsg,"message":errorMsg});
			//errorList.push(msg)
		}		 
	}
	
	return errorList
}

let nameValidation = function(prop,value){
	var msg = ""
	if(value){
		if(regExp["emptySpaceStartandEnd"].test(value)){
			msg = msgObj["emptySpaceStartandEnd"];
		}
	}else
	{
		msg = msgObj["noInput"]+" "+prop;
	}
	return msg;

}
let passwordValidation = function(prop,value){
	var msg = ""
	if(value){
		if(regExp["emptySpaceStartandEnd"].test(value)){
			msg = msgObj["emptySpaceStartandEnd"];
		}else if(!regExp["validatePassword"].test(value)){
			msg = msgObj["validatePassword"];
		}
	}else
	{
		msg = msgObj["noInput"]+" "+prop;
	}
	return msg;

}
let emailvalidation = function(prop,value){
	var msg = ""
	if(value){
		if(regExp["emptySpaceStartandEnd"].test(value)){
			msg = msgObj["emptySpaceStartandEnd"];
		}else if(!regExp["validateEmail"].test(value)){
			msg = msgObj["validateEmail"];
		}
	}else
	{
		msg = msgObj["noInput"]+" "+prop;
	}
	return msg;

}
//console.log(regExp,msgObj,validate,nameValidation)
export default validate;