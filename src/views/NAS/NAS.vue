<template>
  <div>  
  <CRow>
    <CCol col="12">          
      <transition name="slide">    
        <CCard> 
          <CCardBody>    
             <div class="my-1 mx-2 text-right plus-button">
             <CButton color="light" v-if="isShowAddbutton" class="plus-icon" @click.prevent="addRadius"><plusicon/></CButton>
              
            </div>
             <CDataTable
                    hover
                    striped
                    table-filter
                    ref="dealer_table"
                    :items="items"
                    :fields="fields"
                    :items-per-page="perPage"
                    @row-clicked="rowClicked"
                    :pagination="$options.paginationProps"
                    index-column                    
                    clickable-rows
                    :sorter="sorter"
                    :itemsPerPageSelect=itemsPerPageSelect
                  > 
                    <template #username="{item,index}"> 
                      <td>
                        <span><CIcon name="cil-user"/></span> 
                        <a @click.prevent="showdetails(item)">{{item.username}}</a>
                      </td>
                    </template> 
                     <template #action="{item}">
                      <td>
                        <CBadge @click.prevent="editNAS(item)" :id="item.sub" :group='item.group' :color="getBadge('Banned')">
                          <div :id="item.sub" :group='item.group'>Edit</div>
                        </CBadge>
                         <CBadge @click.prevent="removeUser" :id="item.sub" :group='item.group' class="mx-2" :color="getBadge('Banned')">
                          <div :id="item.sub" :group='item.group'>Remove</div>
                        </CBadge>
                      </td>
                    </template>
                  </CDataTable>
          </CCardBody>
        </CCard>
      </transition>
    </CCol>
  </CRow>
  <NASManage v-if="showRadiusform" :showRadiusform="showRadiusform" :action="action" @update-showRadiusform="update" :item="item"/>
  </div>
</template>

<script>  
import NASManage from "./NASManage"
import plusicon from "../../assets/icons/plusicon"
  export default {
    components: {  
      NASManage,
      plusicon 
    },
    mounted(){
      this.getNASlist()
    },
    data: () => {
      return {
        items: [],
        itemsPerPageSelect:true,
        sorter:true,
        fields: [ 
          { key: 'nasname', label: 'Radius Name' },
          { key: 'shortname', label: 'User Name' }, 
          { key: 'server', label: 'Server Name' },          
          { key: 'community', label: 'Community' },
          { key: 'description', label: 'Description' },          
          {key:'action'}
        ],
        perPage: 5,
        showUserDialog:false,
        selectedRow:{},
        isRowSelected:false,
        showRadiusform:false,
        action:"add",
        item:{}
      }
    },
    computed:{
        message(){
            return this.$store.getters.message
         },
         status(){
            return this.$store.getters.apiStatus  
         },
         isShowAddbutton(){
            if(!this.$store.getters.getUserData[0].nasValue){
                return true;
            }else{
                return this.$store.getters.getUserData[0].nasValue > this.items.length    
            }
            
         }
    },
    paginationProps: {
      doubleArrows: false,
      previousButtonHtml: 'prev',
      nextButtonHtml: 'next'
    },
    methods: {
      getBadge (status) {
        return status === 'Active' ? 'success'
          : status === 'Inactive' ? 'secondary'
            : status === 'Pending' ? 'warning'
              : status === 'Banned' ? 'danger' : 'primary'
      },
      userLink (id) {
        return `users/${id.toString()}`
      },
      rowClicked (item, index) {
        this.selectedRow = item;
        this.isRowSelected= true;
      },
      editNAS(item){
         this.showRadiusform = true;
         this.action = "edit"
         this.item = item;
      },
      removeNAS(e){
          
      },
      addRadius(){
        this.showRadiusform=true;
        this.action='add'
        this.item = {}
      },
      getNASlist(){
        let username = this.cognitouser;
         this.$store.dispatch("getRadiusList", { username }).then((resp) => {
            this.items =  JSON.parse(resp.data.items)[0].data; 
        }).catch(err => {});
      },
      update(hide,refresh){
        this.showRadiusform = hide;
        if(refresh){
          this.getNASlist();
        }
        
      }
    }
  }
</script>
