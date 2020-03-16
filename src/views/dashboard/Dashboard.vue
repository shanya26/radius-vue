<template>
  <div>
    <div>
    <CRow>
     <CCol sm="6" md="2" 
          v-if="cognitogroup=='admin'">
        <CWidgetProgressIcon
          :header="dealercount" 
          text="Dealers"
          color="success"
          inverse
        >
          <CIcon name="cil-people" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2" 
          v-if="cognitogroup!='subscriber'">
        <CWidgetProgressIcon
          :header="subscribercount"
          text="Subscribers"
          color="info"
          inverse
        >
          <CIcon name="cil-people" height="36"/>
        </CWidgetProgressIcon>
      </CCol> 
      <CCol sm="6" md="2" 
          v-if="cognitogroup=='subscriber'">
        <CWidgetProgressIcon
          :header="750"
          text="Current Plan"
          color="info"
          inverse
        >
          <CIcon name="cil-basket" height="36"/>
        </CWidgetProgressIcon>
      </CCol> 
     </CRow>
  </div>      
  </div>
</template>

<script> 

export default {
  name: 'Dashboard',
  components: { 
  },
  mounted(){ 
    this.getMyProfile()
  },
  data () {
    return { 
      dealercount:"0",
      subscribercount:"0"
    }
  },
  methods: {
    getMyProfile(){         
      this.$store.dispatch("getMyProfile").then((resp) =>{
           this.subscribercount = resp.data.items[0].subscribercount?String(resp.data.items[0].subscribercount):"0"
           this.dealercount = resp.data.items[0].dealercount?String(resp.data.items[0].dealercount):"0"
        }).catch(err =>{ 
      });
    }
  }
}
</script>
