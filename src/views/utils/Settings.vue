<template>
  <div>  
  <CRow>
    <CCol col="12">          
      <transition name="slide">    
        <div class="isp-card">
      <!---->
      <div class="isp-card__collapsible-content vs-con-loading__container">
         <div class="isp-card__body">            
            <div class="block overflow-x-auto">
               <table class="w-full permissions-table">                   
                    <tr>
                     <td class="px-3 py-2">Allowed NAS</td>
                     <td class="px-3 py-2">
                          <CSelect v-model="settings.nasValue" :options="nasOptions" @update:value="val=>{settings.nasValue=val}" placeholder="Please select"/>
                     </td>
                    </tr>
                    <tr>
                    <td class="px-3 py-2">Add Subscriber</td>
                    <td class="px-3 py-2">
                          <CSelect v-model="settings.subscriberValue" @update:value="val=>{settings.subscriberValue=val}" :options="subscriberOptions" placeholder="Please select"/>
                    </td>
                    </tr>
                    <tr v-if="cognitogroup=='admin'">
                    <td class="px-3 py-2">Month based Billing</td>
                    <td class="px-3 py-2">
                          <CSwitch class="mx-1" color="dark" checked variant="opposite" :checked="settings.monthbilling" shape="pill" v-bind="labelTxt" @update:checked="val=>{settings.monthbilling=val}"/>
                    </td>
                    </tr>
                    <tr v-if="cognitogroup=='admin'">
                    <td class="px-3 py-2">User Graphs</td>
                    <td class="px-3 py-2">
                          <CSwitch class="mx-1" color="dark" checked variant="opposite" :checked="settings.usergraphs" shape="pill" v-bind="labelTxt"  @update:checked="val=>{settings.usergraphs=val}"/>
                    </td>
                    </tr>
                    <tr v-if="cognitogroup=='admin'">
                    <td class="px-3 py-2">Volume Topup</td>
                    <td class="px-3 py-2">
                          <CSwitch class="mx-1" color="dark" variant="opposite" :checked="settings.topup" shape="pill" v-bind="labelTxt" @update:checked="val=>{settings.topup=val}" />
                    </td>
                    </tr>
                    <tr v-if="cognitogroup=='admin'">
                    <td class="px-3 py-2">Multi Range Extra Speed</td>
                    <td class="px-3 py-2">
                          <CSwitch class="mx-1" color="dark"  @update:checked="val=>{settings.extraSpeed=val}" :checked="settings.extraSpeed" variant="opposite" shape="pill" v-bind="labelTxt" />
                    </td>
                    </tr>
                    <tr v-if="cognitogroup=='admin'">
                    <td class="px-3 py-2">Throttling</td>
                    <td class="px-3 py-2">
                          <CSwitch class="mx-1" color="dark" @update:checked="val=>{settings.throttling=val}" :checked="settings.throttling" variant="opposite" shape="pill" v-bind="labelTxt" />
                    </td>
                  </tr>
               </table>  
               <div class="isp-row">
                 <div class="isp-col w-100">
                   <CButton color="success" v-if="cognitogroup=='admin'" class="my-3 float-right" @click.prevent="savesettings">Save</CButton>    
                   </div>
              </div>                          
            </div>
         </div>
         <!---->
         
      </div> 
   </div>
      </transition>
    </CCol>
  </CRow> 
  </div>
</template>

<script>  
  export default {
    components: {    
    },
    mounted(){ 
      this.getMySettings()
    },
    data: () => {
      return {
         nasOptions:[1,2,3,4,5,6,7,9,10],         
         subscriberOptions:[1,10,100,1000],
         cognitogroup:JSON.parse(localStorage.getItem("usergroup")).toString(),          
         settings:{
          nasValue:2,
          subscriberValue:10,
          throttling:false,
          extraSpeed:false,
          topup:false,
          usergraphs:true,
          monthbilling:true
         },
         labelTxt: {
          labelOn: 'yes',
          labelOff: 'no'
        }
      }
    },
    computed:{
        message(){
            return this.$store.getters.message
         },
         status(){
            return this.$store.getters.apiStatus  
         }
    }, 
    methods: {
      savesettings(){
        let data = this.settings;
        data["action"] = "savesettings";
        this.$store.dispatch("saveSettings", {data}).then((resp) =>{
             
          }).catch(err =>{ 
        });
      },
      getMySettings(){
        var data = this.$store.getters.getUserData[0];
        if(data.settings){
         this.settings = data.settings; 
        }else{
          this.settings.nasValue = data.nasValue;
          this.settings.subscriberValue = data.subscriberValue
        }
      }
    }
  }
</script>
