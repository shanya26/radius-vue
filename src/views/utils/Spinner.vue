<template>
    <div>
      <div class="spinner-wrapper" v-if="showprogress==true && loading==false">
      	<div class="spinner-msg" v-if="showmessage==true">
      			{{message}}
      	</div>
        <!--div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div-->
        <div class="atom-spinner">
        	<div class="spinner-inner">
        		<div class="spinner-line"/>
        		<div class="spinner-line"/>
        		<div class="spinner-line"/>
        		<div class="spinner-circle"/>
        	</div>
        </div>
    </div>
    <div class="spinner-wrapper" v-if="loading==true && showprogress==false">      	 
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    </div>
  </div>
</template>

<script> 
	export default {
		props:{
		   showprogress: {
		    default: false,
		  },
		  loading:{
		  	default:false
		  },
		  showmessage: {
		    default: false,
		  },
		  message: ""
		},  
		data(){
			return { 
			}
		},
		methods: { 
	    }
	}
</script>