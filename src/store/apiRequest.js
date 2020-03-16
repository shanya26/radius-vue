const apiRequest = {
  state: {
    status:"",    
    loader:false,
    loading:false,
    progress:false,
    message:"",
    progressmsg:"",
    validateMsgs:"",
    showToaster:false,
    toasterVarient:"success",
    toasterMsg:""
  },
  mutations: {
    api_request(state,msg){
      if(msg){
        state.progressmsg = msg
      }else{
        state.progressmsg = "Loading data.."
      }
      state.status = 'Loading data..'
      state.loader = true
      state.progress = true
      state.validateMsgs = ''  
    },
    api_success(state,msg){
      state.status = 'success'
      state.message = msg
      state.progressmsg = msg
      state.loader = false
      state.progress = false
      state.validateMsgs = '' 
    },
    api_error(state,msg){
      state.status = 'error'
      state.message = msg
      state.progress = false
      state.progressmsg = msg
      state.validateMsgs = ''
      state.loader = false
    },
    validate_error(state,msg){
      state.status = ''
      state.validateMsgs = msg
      state.loader = false
      state.message = ''
    },
    setLoading(state,loading){
      if(!loading){
        setTimeout(()=>{
          state.loading = loading
        },300)
      }
      else{
        state.loading = loading
      }      
    },
    loadToaster(state,toast){ 
      state.showToaster = true;
      state.toasterVarient = toast.varient;
      state.toasterMsg = toast.message;
    },
    hideToaster(state){
      state.showToaster = false;
      state.toasterVarient = '';
      state.toasterMsg = '';
    }
  },
  actions: {     

  },
  getters: {    
    apiStatus: state => state.status,
    loaderStatus:state => state.loader,
    message:state => state.message,
    validateMsgs:state=>state.validateMsgs,
    showToaster:state=>state.showToaster,
    toasterVarient:state=>state.toasterVarient,
    toasterMsg:state=>state.toasterMsg
  }
}

export default apiRequest