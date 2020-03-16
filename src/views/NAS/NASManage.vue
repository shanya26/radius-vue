<template>
 
  <div v-if="showRadiusform==true">
   <transition :name="sideBar.fade" :appear="true"> 
     <CSidebar 
    :fixed="sideBar.fixed" 
    :minimize="sideBar.minimize"
    :show="sideBar.show"
    :aside="sideBar.aside" 
    :overlaid="sideBar.overlaid"
    :colorScheme="sideBar.colorScheme"
    :dropdownMode="sideBar.dropdownMode"
    :open="sideBar.open" 
  > 
<transition name="slide"> 
<div>  
      <CSidebarHeader>
        RADIUS Server Configuration 
      </CSidebarHeader>
     <span @click.prevent="hideSidebar(false)">
     <CSidebarClose/>
     </span>
      <CSidebarForm>
          <CCard> 
          <CCardBody>  
           <div v-if="status=='error'" class="alert alert-danger">
              {{message}}
           </div>
             <CRow>
               <CCol md-12>           
                  <CSelect :value="sideBar.sideBarData.username" v-if="action=='add'"   :options="sideBar.dealers" label="User Name" horizontal placeholder="Please select" @update:value="val=>{sideBar.sideBarData.username=val}"/>
                  <CSelect :value="sideBar.sideBarData.username" v-if="action=='edit'" disabled   :options="sideBar.dealers" label="User Name" horizontal placeholder="Please select" @update:value="val=>{sideBar.sideBarData.username=val}"/>
              </CCol> 
              
            </CRow> 
            <CRow>
              <CCol md-12>           
                
              <CInput   label="Server Name" v-model="sideBar.sideBarData.server" v-if="action=='add'"  horizontal placeholder="Enter server name"/>
                <CInput   label="Server Name" v-model="sideBar.sideBarData.server" disabled  v-if="action=='edit'" horizontal placeholder="Enter server name"/>
              </CCol> 
            </CRow> 
            <CRow>
              <CCol md-12>           
                <CInput  label="IP Address" v-model="sideBar.sideBarData.nasname" horizontal v-if="action=='add'" placeholder="Enter ipAddress"/>
                <CInput  label="IP Address" v-model="sideBar.sideBarData.nasname" horizontal disabled v-if="action=='edit'" placeholder="Enter ipAddress"/>
              </CCol> 
            </CRow> 
            <CRow>
               
                <CCol md-12>      
                <CInput label="Shared Secret" v-model="sideBar.sideBarData.secret" horizontal type="password" placeholder="Enter shared Secret" :description="sideBar.secretdesc" refs="sharedsecret" @update:value="onkeyupsecret" maxlength="31"/>
                </CCol>  
              
            </CRow>  
            <CRow>
               <CCol md-12>           
                  <CSelect :value="sideBar.sideBarData.community" v-if="action=='add'" :options="sideBar.commuties" label="Community" horizontal placeholder="Please select" @update:value="val=>{sideBar.sideBarData.community=val}"/>
                  <CSelect :value="sideBar.sideBarData.community" v-if="action=='edit'" disabled :options="sideBar.commuties" label="Community" horizontal placeholder="Please select" @update:value="val=>{sideBar.sideBarData.community=val}"/>
              </CCol> 
              
            </CRow>  
            <CRow>
                <CCol md-12>           
                   <CTextarea placeholder="" rows="3" cols="12" v-if="action=='add'" v-model="sideBar.sideBarData.description" label="Description" horizontal/>
                   <CTextarea placeholder="" rows="3" cols="12" v-if="action=='edit'" disabled v-model="sideBar.sideBarData.description" label="Description" horizontal/>
              </CCol> 
              
            </CRow>  
            
             
          </CCardBody>
        </CCard>
        <div>
            <CButton color="success" class="mx-2 float-right" @click.prevent="createRadius" v-if="action=='add'">Submit</CButton>
            <CButton color="success" class="mx-3 float-right"  @click.prevent="updateRadius" v-if="action=='edit'">Update</CButton>
            <CButton color="secondary" class="mx-2 float-right" @click.prevent="hideSidebar(false)">Close</CButton>
                  
        </div>
      </CSidebarForm>
      </div>
   </transition>
  </CSidebar> 
  </transition>
  </div> 
</template>


<script>  
  export default {
    props:['showRadiusform','action','item'],
    mounted(){
      if(this.action!='edit'){
        this.getUserList()
      }else{
        this.sideBar.dealers.push({
            "label":this.item.shortname,
            "value":this.item.shortname
        });
      }      
      this.onkeyupsecret()
    },
    data() {
      return {
       sideBar:{
          minimize: false,
          fade:"fade",
          open:'responsive',
          show: 'responsive',
          aside:true,
          fixed:true,
          overlaid:false,
          colorScheme:"light",
          dropdownMode:"closeInactive",
          hideOnMobileClick:true,
          commuties:['mikrotik_pre_6.43'],
          sideBarData:{             
            "username":this.item.shortname?this.item.shortname:localStorage.getItem("username"),
            ...this.item
          },
          dealers:[],
          secretdesc:"0 to 31 characters remaining"
        }
      }    
    },
    computed:{
      message(){
            return this.$store.getters.message
      },
      status(){
          return this.$store.getters.apiStatus  
      },
      updateItem(){
          this.item.username = this.item.shortname;
          this.sideBar.sideBarData = this.item
      }
    },
    methods: {
      getUserList(){
        this.sideBar.dealers.push({
            "label":this.cognitouser,
            "value":this.cognitouser
        });
        if(this.cognitogroup =='admin'){
           let group = "dealer";
           this.$store.dispatch("getListbyGroup", {group}).then((resp) =>{
              resp.data.items.forEach((item)=>{
                 this.sideBar.dealers.push({
                    "label":item.username,
                    "value":item.username
                 })
              }); 
          }).catch(err =>{ 

          });
        }
      },
      createRadius(){
        let data = this.sideBar.sideBarData
        data.action = "saveRadius"
        this.$store.dispatch("saveRadius", {data}).then((resp) =>{
             this.hideSidebar(false,true);
        }).catch(err =>{ 
        });
      },
      updateRadius(){
        let data = this.sideBar.sideBarData
        data.action = "updateRadius"
        this.$store.dispatch("updateRadius", {data}).then((resp) =>{
            this.hideSidebar(false,true);
          }).catch(err =>{ 
        });
      },
      hideSidebar(hide,refresh){
          this.$emit("update-showRadiusform", hide,refresh); 
      },
      onkeyupsecret(val){
        if(!val){
          val = this.sideBar.sideBarData.secret
        }
        if(val){
          var len = val.length;
          this.sideBar.secretdesc = 31-len +" to 31 characters remaining"
        }
         
      }
    }
  }
</script>