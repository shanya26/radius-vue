<template>  
  <div class="app-container app-theme-white">
  <spinner :showprogress="this.$store.state.progress" :showmessage="this.$store.state.progress" :message="this.$store.state.progressmsg?this.$store.state.progressmsg:''"/>
    <spinner :loading="this.$store.state.loading"/>
   <spinner :loading="this.$store.state.loading"/>
   <toaster v-if="this.$store.getters.showToaster"/> 
    <slot></slot>
  </div>
</template>

<script>
import Spinner from "@/views/utils/Spinner";
import Toaster from "@/views/utils/Toaster";
  export default {
    components: { 
    	Spinner,
      Toaster
    },
    computed:{
    },
    methods:{

    }
  }
</script>
