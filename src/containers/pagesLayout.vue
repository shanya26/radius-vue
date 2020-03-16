<template>  
  <div class="app-container app-theme-blue">
    <spinner :showprogress="this.$store.state.progress" :showmessage="this.$store.state.progress" :message="this.$store.state.progressmsg?this.$store.state.progressmsg:''"/>
    <spinner :loading="this.$store.state.loading"/>
    <slot></slot>
  </div>
</template>

<script>
  import Spinner from "@/views/utils/Spinner";
  export default {
    name: 'app',
    components: {
      Spinner
    },
    methods:{

    }
  }
</script>
