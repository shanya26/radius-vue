import Vue from 'vue'
import Vuex from 'vuex'
import loginStore from "./loginStore"
import apiRequest from "./apiRequest"
import VuexI18n from 'vuex-i18n'
import axios from 'axios';
Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
     ...loginStore.state,
     ...apiRequest.state,
     referralCode:"",
     userdata:localStorage.getItem("userdata")?JSON.parse(localStorage.getItem("userdata")):{}
  },
  mutations: {
     ...loginStore.mutations,
     ...apiRequest.mutations,
     reset(state){
        state.message = ""
        state.loader = false,
        state.status= "",
        state.validateMsgs = ""
     },
     setRefCode(state,val){
        state.referralCode = val
     },
     setUserdata(state,value){
        state.userdata = value
     }

  },
  actions: {
     ...loginStore.actions,
     ...apiRequest.actions,
     createdynamoProfile({commit},{data}){
        return new Promise((resolve, reject) => {
         commit("api_request")           
         axios.post("https://1hu37pw9ll.execute-api.us-east-1.amazonaws.com/ispdev/v1/manage?action="+data.action,data).then(response => {             
              commit("api_success",response,"success")
              resolve(response);
          }).catch((err)=>{
              commit("api_error",err.message);
              reject(err);
          });      
      });
     },
     getCustomers({ commit },{data}){
      return new Promise((resolve, reject) => {
         commit('api_request',"")
          axios.get("https://1hu37pw9ll.execute-api.us-east-1.amazonaws.com/ispdev/v1/manage?action="+data.action+"&sub="+data.sub).then(response => {             
              commit("api_success",response,"success")
              resolve(response);
          }).catch((err)=>{
              commit("api_error",err.message);
              reject(err);
          }); 
               
      })
    },
    getMyProfile({ commit }){
      return new Promise((resolve, reject) => {
         commit('api_request')
          axios.get("https://1hu37pw9ll.execute-api.us-east-1.amazonaws.com/ispdev/v1/manage?action=getMyprofile").then(response => {             
              commit("api_success",response,"success")
              commit("setUserdata",response.data.items)
              localStorage.setItem("userdata",JSON.stringify(response.data.items));
              resolve(response);
          }).catch((err)=>{
              commit("api_error",err.message);
              reject(err);
          }); 
               
      })
    },
    removeUser({ commit },{data}){
      return new Promise((resolve, reject) => {
         commit('api_request')
          axios.delete("https://1hu37pw9ll.execute-api.us-east-1.amazonaws.com/ispdev/v1/manage?action=removeProfile",{
              data:data
          }).then(response => {             
              commit("api_success",response,"success")
              resolve(response);
          }).catch((err)=>{
              commit("api_error",err.message);
              reject(err);
          }); 
               
      })
    },
    getListbyGroup({ commit },{group}){
      return new Promise((resolve, reject) => {
         commit('api_request',"")
          axios.get("https://1hu37pw9ll.execute-api.us-east-1.amazonaws.com/ispdev/v1/manage?group="+group+"&action=getListbyGroup").then(response => {             
              commit("api_success",response,"success")
              resolve(response);
          }).catch((err)=>{
              commit("api_error",err.message);
              reject(err);
          }); 
               
      })
    },
    saveSettings({commit},{data}){
        return new Promise((resolve, reject) => {
         commit("api_request")           
         axios.post("https://1hu37pw9ll.execute-api.us-east-1.amazonaws.com/ispdev/v1/manage?action="+data.action,data).then(response => {             
              commit("api_success",response,"success")
              commit("loadToaster",{'varient':'success','message':'Settings saved successfully'});
              resolve(response);
          }).catch((err)=>{
              commit("api_error",err.message);
              commit("loadToaster",{'varient':'error','message':'Failed in save settings'});
              reject(err);
          });      
      });
     },
     saveRadius({commit},{data}){
        return new Promise((resolve, reject) => {
         commit("api_request")           
         axios.post("https://1hu37pw9ll.execute-api.us-east-1.amazonaws.com/ispdev/v1/manage?action="+data.action,data).then(response => {             
              commit("api_success",response,"success");
              commit("loadToaster",{'varient':'success','message':'Radius saved successfully'});
              resolve(response);
          }).catch((err)=>{
              commit("api_error",err.message);
              reject(err);
          });      
      });
     },
     updateRadius({commit},{data}){
        return new Promise((resolve, reject) => {
         commit("api_request")           
         axios.post("https://1hu37pw9ll.execute-api.us-east-1.amazonaws.com/ispdev/v1/manage?action="+data.action,data).then(response => {             
              commit("api_success",response,"success")
              commit("loadToaster",{'varient':'success','message':'Radius updated successfully'});
              resolve(response);
          }).catch((err)=>{
              commit("api_error",err.message);
              reject(err);
          });      
      });
     },
     removeRadius({commit},{data}){
        return new Promise((resolve, reject) => {
         commit("api_request")           
         axios.delete("https://1hu37pw9ll.execute-api.us-east-1.amazonaws.com/ispdev/v1/manage?action="+data.action,data).then(response => {             
              commit("api_success",response,"success")
              commit("loadToaster",{'varient':'success','message':'Radius updated successfully'});
              resolve(response);
          }).catch((err)=>{
              commit("api_error",err.message);
              reject(err);
          });      
      });
     },
     getRadiusList({ commit },{username}){
        return new Promise((resolve, reject) => {
           commit('api_request',"")
            axios.get("https://1hu37pw9ll.execute-api.us-east-1.amazonaws.com/ispdev/v1/manage?username="+username+"&action=getRadiusList").then(response => {             
                commit("api_success",response,"success")
                resolve(response);
            }).catch((err)=>{
                commit("api_error",err.message);
                reject(err);
            }); 
                 
        })
      }
  },
  getters: {
    ...loginStore.getters,
    ...apiRequest.getters,
    getReferCode:state=>state.referralCode,
    getUserData:state=>state.userdata
  }
})

Vue.use(VuexI18n.plugin, store)

export default store