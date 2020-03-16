<template>
  <div> 
    <CRow>
      <CCol xs="12" lg="12">
        <CCard>
          <CCardHeader>
            <CRow>
             <CCol xs="6" lg="6">
                <CButton  color="light" @click.prevent="showUserForm">Add Group</CButton>
             </CCol>
             <CCol xs="6" lg="6">
                <CInput horizontal class="float-right" placeholder="Search Groups" @input="searchGroups"/>
             </CCol>
             </CRow>  
          </CCardHeader>
          <CCardBody>
            <CTabs add-nav-wrapper-classes="group-tab" add-tabs-wrapper-classes="col-sm-10" variant="tabs" fade="fade"  vertical @click.native="tabClick">              
              <CTab active v-for="(group,index) in groups" :key="index" >
                <template slot="title">
                 <div class="col-sm-12 p-0 m-0">
                    <span class="col-sm-8 p-0 m-0 d-inline-block text-truncate" style="max-width:125px" :title="group.title"> {{group.title}}</span>
                    <span class="col-sm-2"> <CDropdown class="float-right"  placement="bottom-end">
                                          <template #toggler>
                                             <CIcon name="cil-settings" /> 
                                          </template> 
                                          <CDropdownItem @click.prevent="profile">
                                            <CIcon name="cil-trash" /> Edit
                                          </CDropdownItem>    
                                          <CDropdownItem @click.prevent="signout">
                                            <CIcon name="cil-trash" /> Delete
                                          </CDropdownItem>
                                        </CDropdown>
                                        </span>
                  </div>
                </template>
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
                  </CDataTable>
              </CTab>               
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
   
   
</div>
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
       }
    },
    mounted(){ 
      this.showGroupsList()
    },
    data: () => {
      return { 
        fade:true,
        groups:[],
        items: [],
        itemsPerPageSelect:true,
        sorter:true,
        fields: [ 
          { key: 'username', label: 'User Name' },
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'manager', label: 'Manager/Dealer' },
          { key: 'gender', label: 'Gender' }
        ],
        perPage: 5
      }
    },
    paginationProps: {
      doubleArrows: false,
      previousButtonHtml: 'prev',
      nextButtonHtml: 'next'
    },
    methods: { 
      showGroups(e){
        console.log(e)
      },
     getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
      tabClick(e){        
          if(e.target){
              console.log(e.target.innerText);
          }
      },
      showGroupsList(){
        this.groups = [{
            "id":1,
            "title":"Group1",
            "items":'ddd'            
        },{
            "id":2,
            "title":"Group2",
            "items":'dddddd'
        }]
      },
      searchGroups(value){
        if(!value) return;
        this.groups = this.groups.filter((item)=>{
            return item.title.toLowerCase().indexOf(value.toLowerCase())!=-1
        })
      }
    } 
  }
</script>
