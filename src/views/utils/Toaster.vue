<template>
<div>
<div v-if="this.$store.getters.showToaster" :fade="fade">
 <CToaster :show="showToaster" :class="varientMethod" :position="position"  :fade="fade">
      <CToast :show="showToaster" :header="headerMethod">
       {{messageMethod}}
    </CToast>
 </CToaster>

 </div>
</div>
</template>


<script>   
  export default {
  	props:{
		showToaster:{
		  default:true
		},
		varient:{
		   default:'success'
		},
		header:{
		   default:''
		},
		message:{
			defalt:''
		}
  	},
  	mounted(){
  		this.hide(); 
  	},
    computed:{
    	messageMethod(){
          return this.$store.getters.toasterMsg
       },
       varientMethod(){
          let varient = this.$store.getters.toasterVarient
          let varientClass = "success-toaster";
          if(varient == 'error'){
             varientClass = "failed-toaster";
          }else if(varient == 'warn'){
             varientClass = "warning-toaster";
          }
          return varientClass
       },
       headerMethod(){
          let varient = this.$store.getters.toasterVarient
          let header = "Success";
          if(varient == 'error'){
             header = "Error";
          }else if(varient == 'warn'){
             header = "Warning";
          }
          return header
       }
       
    },
    data: () => {
      return {
      	 show:true,
	     fade:true,
	     timeout:5000,
	     position:"bottom-right"
      }
    },
    methods: {  
    	 hide(){
	       	 setTimeout(()=>{
				this.$store.commit("hideToaster")
			 },this.timeout)	
	      } 
    } 
  }
</script>