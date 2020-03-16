var state = {
  cognitoInfo: {},
  loggedIn: false,
  username:"",
  loadingState: true,
  errorLoadingState: false,
  cognitoUser:{}
}

function setLoggedIn(newValue) {
  state.loggedIn = newValue;
}

function getLoggedIn() {
  return state.loggedIn;
}

function setLoggedOut() {
  state.loggedIn = false;
  state.cognitoInfo = {};
}

function setCognitoInfo(newValue){
  state.cognitoInfo = newValue;
}
function getCognitoInfo(){
  return state.cognitoInfo;
}
function getUsername(){
  return state.username;
}
function setUsername(username){
  state.username = username;
}
function setCognitoUser(cognitoUser){
  state.cognitoUser = cognitoUser;
}
function getCognitoUser(){
  return state.cognitoUser;
}
export default {
  state: state,
  setLoggedIn: setLoggedIn,
  setLoggedOut: setLoggedOut,
  setCognitoInfo: setCognitoInfo,
  getCognitoInfo:getCognitoInfo,
  getLoggedIn:getLoggedIn,
  setUsername:setUsername,
  getUsername:getUsername,
  getCognitoUser:getCognitoUser,
  setCognitoUser:setCognitoUser
}