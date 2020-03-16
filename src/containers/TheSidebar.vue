<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon 
        class="d-block" 
        name="logo" 
        src="icons/cloud-icon.png"
        size="custom-size" 
        :width="width" 
        :viewBox="`0 0 ${minimize ? 110 : 556} 134`"
      />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="nav"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="minimize = !minimize"
    />
  </CSidebar>
</template>

<script>
import navigation from './_nav'

export default {
  name: 'TheSidebar',  
  data () {
    return {
      nav:[],
      minimize: false,
      show: 'responsive',
      "width":100
    }
  },
  mounted () {
    this.getNavigation();
    let self = this;
    this.$root.$on('toggle-sidebar', () => {
      const sidebarOpened = this.show === true || this.show === 'responsive'
      //this.show = sidebarOpened ? false : 'responsive'
      this.minimize = !this.minimize
      if(this.minimize){
        this.width = 50;
      }else{
        this.width = 150;
      }
      
    })
    this.$root.$on('toggle-sidebar-mobile', () => {
      const sidebarClosed = this.show === 'responsive' || this.show === false
      this.show = sidebarClosed ? true : 'responsive'
    })
  },
  methods:{
    getNavigation(){
      this.nav = navigation()
    }
  }
}
</script>
