import apiRequest from "./apiRequest"
import axios from 'axios';
const mt4Store  = {
  state: {    
    mt4Id:"0",
    name: ""
  },
  mutations: {     
    setMT4Id(state,value){
      state.mt4Id = value
    },
    getMT4Id(state){
      return state.mt4Id
    }

  },
  actions: {
    mt4signup({ commit },{data}) { 
       return new Promise((resolve,reject) => {
          commit('api_request',"Creating MT4 Account..")
          axios.post("https://br53k7twv8.execute-api.us-east-1.amazonaws.com/dev/v1/createuser", data).then(response => {             
              commit("api_success",response,"success")
              localStorage.setItem("mt4Id",String(response.data.user.login))
              commit("setMT4Id",String(response.data.user.login));
              resolve(response);
          }).catch((err)=>{
              commit("api_error",err.message);
              commit("setMT4Id","0");
              reject(err);
          });           
        })
    },
    getUserlist({ commit }){
      return new Promise((resolve, reject) => {
         commit('api_request')
          axios.get("https://0kebyma404.execute-api.us-east-1.amazonaws.com/prod/v1/userlist").then(response => {             
              commit("api_success",response,"success")
              resolve(response);
          }).catch((err)=>{
              commit("api_error",err.message);
              reject(err);
          }); 
               
      })
    },
    getUserdata({ commit },params){
      return new Promise((resolve, reject) => {
         commit('api_request')
          let url = "https://jq3662n6nd.execute-api.us-east-1.amazonaws.com/dev/v1/getmyuserdata"
          if(params){
            url = url+"?"+params
          }
          axios.get(url,{
            headers:{
              "X-COG-AUTH":JSON.parse(localStorage.getItem("idToken")).jwtToken
            }
          }).then(response => {             
              commit("api_success",response,"success")
              if(response.data && response.data.body && response.data.body.login){
                  localStorage.setItem("mt4Id",String(response.data.body.login))
                  this.mt4Id = response.data.body.login;
              }              
              resolve(response);
          }).catch((err)=>{
              commit("api_error",err.message);
              reject(err);
          }); 
               
      })
    }
  },
  getters: {    
    mt4Id: state => state.mt4Id
  }
}

export default mt4Store;