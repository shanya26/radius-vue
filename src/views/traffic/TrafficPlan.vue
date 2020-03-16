<template>
  <div> 
   
  </div>
</template>

<script>   
  export default {
    components: {
             
    },
    computed:{
        message(){
          return this.$store.getters.message
       },
       status(){
          return this.$store.getters.apiStatus  
       },
    },
    mounted(){ 
    },
    data: () => {
      return { 
      }
    },
    methods: { 
    }
  }
</script>
