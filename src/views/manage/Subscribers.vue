<template>
  <div>  
  <CRow>
    <CCol col="12">          
      <transition name="slide"> 
        <CCard>           
          <CCardBody>    
             <CDataTable
                    hover
                    striped
                    table-filter
                    :items="items"
                    :fields="fields"
                    :items-per-page="perPage"
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
                        <CBadge @click.prevent="editUser(item)" :color="getBadge('Banned')">
                          <div :id="item.sub" :group='item.group'>Edit</div>
                        </CBadge>
                         <CBadge @click.prevent="removeUser(item)" class="mx-2" :color="getBadge('Banned')">
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
  </div>
</template>

<script>  
import country from "../../app/country.js" 
  export default {
    props:{
      managersub:{
        default:""
      }
    },
    components: {    
    },
    mounted(){
      this.showSubscribers()
    },
    data: () => {
      return {
        items: [],
        itemsPerPageSelect:true,
        sorter:true,
        fields: [ 
          { key: 'username', label: 'User Name' },
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'manager', label: 'Manager/Dealer' },
          { key: 'gender', label: 'Gender' },
          {key:'action'}
        ],
        perPage: 5,
        countryoptions:country
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
      showSubscribers(){
        let data = {
          "action":"getmydealerschildren",
          "sub":this.managersub
        }
        this.$store.dispatch("getCustomers", { data }).then((resp) => { 
            this.items = resp.data.items;
        }).catch(err => {});
      },
      editUser(item){
        this.$router.push({ name: 'Manage User', params: {"action":'editUser',"group":item.group,"item":item} })
      },
      removeUser(item){
        var data = {
          "sub":item.sub,
          "username":item.username,
          "action":"removeProfile",
          "method":"DELETE"
        }
        this.$store.dispatch("removeUser", { data }).then((resp) => {
             this.showSubscribers();
        }).catch(err => {});
      }
    }
  }
</script>
