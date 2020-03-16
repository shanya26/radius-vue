<template>
  <div>  
  <CRow v-if="!isUserDetails && !showUserDialog && !showSubscribers">
    <CCol col="12">          
      <transition name="slide">    
        <CCard> 
          <CCardBody>    
            <CTabs v-if="!showUserDialog">
              <CTab active v-if="cognitogroup == 'admin'">
                <template slot="title">
                  <CIcon name="cil-calculator"/>  Dealers
                </template>
                <div class="float-right py-1">
                  <CButton color="dark" @click.prevent="showUserForm">Add Dealer</CButton>
                </div>
                 <CDataTable
                    hover
                    striped
                    table-filter
                    ref="dealer_table"
                    :items="dealers"
                    :fields="fields"
                    :items-per-page="perPage"
                    @row-clicked="rowClicked"
                    :pagination="$options.paginationProps"
                    index-column
                    clickable-rows
                  > 
                    <template #username="{item,index}"> 
                      <td>
                        <span><CIcon name="cil-user"/></span> 
                        <a @click.prevent="showdetails(item)">{{item.username}}</a>
                      </td>
                    </template> 
                     <template #action="{item}">
                      <td>
                        <CBadge @click.prevent="editUser(item,item.group)" :id="item.sub" :group='item.group' :color="getBadge('Banned')">
                          <div :id="item.sub" :group='item.group'>Edit</div>
                        </CBadge>
                         <CBadge @click.prevent="removeUser" :id="item.sub" :group='item.group' class="mx-2" :color="getBadge('Banned')">
                          <div :id="item.sub" :group='item.group'>Remove</div>
                        </CBadge>
                      </td>
                    </template>
                    <template #noofsubscriber="{item,index}"> 
                      <td>
                        <div @click.prevent="showSubscriber(item.sub)"><CIcon name="cil-list"/></div> 
                      </td>
                    </template> 
                  </CDataTable>
              </CTab>
              <CTab active>
                <template slot="title">
                  <CIcon name="cil-basket"/> Subscribers
                </template> 
                <div class="float-right py-1">
                  <CButton color="dark" @click.prevent="showUserForm">Add Subscriber</CButton>
                </div>
                <CDataTable
                    hover
                    striped
                    table-filter
                    ref="subscribers_table"
                    :items="subscribers"
                    :fields="subscriberfields"
                    :items-per-page="perPage"
                    @row-clicked="rowClicked"
                    :pagination="$options.paginationProps"
                    index-column
                    clickable-rows
                  >   
                    <template #action="{item}">
                      <td>
                        <CBadge @click.prevent="editUser(item,item.group)" :id="item.sub" :group='item.group' :color="getBadge('Banned')">
                          <div :id="item.sub" :group='item.group'>Edit</div>
                        </CBadge>
                         <CBadge @click.prevent="removeUser" class="mx-2" :color="getBadge('Banned')">
                          <div :id="item.sub" :group='item.group'>Remove</div>
                        </CBadge>
                      </td>
                    </template>
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
      </transition>
    </CCol>
  </CRow>
  <div v-if="showSubscribers" class="py-1" style='background:white'>
    <CRow>
          <CCol md-12>           
            <div>
              <div class="m-2">
                <h4 class="d-inline-block">Subscribers List</h4>
                <span class="float-right"> 
                  <CButton color="light" @click.prevent="hideSubscriber">Back</CButton>
                </span>
              </div>
              
            </div>
          </CCol>
        </CRow>  
    <subscribers :managersub='managersub'/>
  </div>
  <div id="userdata" v-if="isUserDetails">
         <div class="isp-card mb-base">
       <div class="float-right m-2 d-inline-block">
              <CButton color="light" @click.prevent="hideDetails">Back</CButton>
              <CDropdown 
                    placement="bottom-end"
                    toggler-text="Action"  
                    class="m-2 d-inline-block"
                    color="secondary"
                    v-if="cognitogroup =='admin'"
                  >
                  <CDropdownItem v-if="detail.group=='dealer'">Show Subscriber</CDropdownItem>
                  <CDropdownItem v-if="detail.group=='dealer'">Assign Subscriber</CDropdownItem>
                  <CDropdownItem v-if="detail.group=='dealer'">Remove Subscriber</CDropdownItem>
                  <CDropdownItem v-if="detail.group=='subscriber'">Change Dealer</CDropdownItem>
                  <CDropdownItem>Deactive</CDropdownItem>
                  </CDropdown> 
                <CDropdown 
                    placement="bottom-end"
                    toggler-text="Action"  
                    class="m-2 d-inline-block"
                    color="secondary"
                    v-if="cognitogroup =='dealer'"
                  >
                  <CDropdownItem>Deactive</CDropdownItem>
                  </CDropdown> 
              </div>
      <div class="isp-card__header">
         <div class="isp-card__title">            
            <h4 class="">Account</h4>              
         </div> 
      </div>
      <div class="isp-card__collapsible-content vs-con-loading__container">
         <div class="isp-card__body">
            <div class="isp-row">
               <div id="avatar-col" class="isp-col">
                  <div class="img-container mb-4">
                    <img
                      src="img/avatars/1.png"
                      class="c-avatar-img "
                    />
                  </div>
               </div>
               <div id="account-info-col-1" class="isp-col flex-1">
                  <table>
                     <tr>
                        <td class="font-semibold">Username</td>
                        <td>{{detail.username}}</td>
                     </tr>
                     <tr>
                        <td class="font-semibold">Name</td>
                        <td>{{detail.name}}</td>
                     </tr>
                     <tr>
                        <td class="font-semibold">Email</td>
                        <td>{{detail.email}}</td>
                     </tr>
                  </table>
               </div>
               <div id="account-info-col-2" class="isp-col flex-1">
                  <table>
                     <tr>
                        <td class="font-semibold">Status</td>
                        <td>active</td>
                     </tr>
                     <tr>
                        <td class="font-semibold">Group</td>
                        <td>{{detail.group}}</td>
                     </tr>
                     <tr>
                        <td class="font-semibold" v-if="detail.group=='subscriber'">Dealer</td>
                        <td class="font-semibold" v-if="detail.group=='dealer'">Manager</td>
                        <td>{{detail.manager}}</td>
                     </tr>
                  </table>
               </div>
               <div id="account-manage-buttons" class="isp-col w-full flex">
                  <CButton color="light" @click.prevent="editUser(detail,detail.group)" :id="detail.sub" :group='detail.group'>Edit</CButton>
                  <CButton color="danger mx-2"  @click.prevent="removeUser" :id="detail.sub" :group='detail.group'>Delete</CButton>
               </div>
            </div>
         </div> 
      </div> 
   </div>
   <div class="isp-row">
      <div class="isp-col lg w-full">
         <div class="isp-card mb-base">
            <div class="isp-card__header">
               <div class="isp-card__title">
                  <h4 class="">Information</h4>
                  <!---->
               </div>
               <!---->
            </div>
            <div class="isp-card__collapsible-content vs-con-loading__container">
               <div class="isp-card__body">
                  <table>
                     <tr>
                        <td class="font-semibold">First Name</td>
                        <td>{{detail.firstname}}</td>
                     </tr>
                     <tr>
                        <td class="font-semibold">Last Name</td>
                        <td>{{detail.lastname}}</td>
                     </tr>
                     <tr>
                        <td class="font-semibold">Nick name</td>
                        <td>{{detail.nickname}}</td>
                     </tr>
                     <tr>
                        <td class="font-semibold">Birth Date</td>
                        <td>{{detail.birthdate}}</td>
                     </tr>
                     <tr>
                        <td class="font-semibold">Mobile</td>
                        <td>{{detail.phone_number}}</td>
                     </tr> 
                     <tr>
                        <td class="font-semibold">Gender</td>
                        <td>{{detail.gender}}</td>
                     </tr> 
                  </table>
               </div>
               <!---->
            </div>
            <div class="isp-card__code-container collapsed" style="max-height: 0px; display: none;">
               <div class="code-content">
                  <pre class="language-markup"><code class="language-markup"></code></pre>
               </div>
            </div>
         </div>
      </div>
      <div class="isp-col lg w-full">
         <div class="isp-card mb-base">
            <div class="isp-card__header">
               <div class="isp-card__title">
                  <h4 class="">More Details</h4>
                  <!---->
               </div>
               <!---->
            </div>
            <div class="isp-card__collapsible-content vs-con-loading__container">
               <div class="isp-card__body">
                  <table>
                     <tr>
                        <td class="font-semibold">Locale</td>
                        <td>{{detail.locale}}</td>
                     </tr>
                     <tr>
                        <td class="font-semibold">Country</td>
                        <td>{{detail.country}}</td>
                     </tr>
                     <tr>
                        <td class="font-semibold">Address</td>
                        <td>{{detail.address}}</td>
                     </tr>
                     <tr>
                        <td class="font-semibold">State</td>
                        <td>{{detail.state}}</td>
                     </tr>
                     <tr>
                        <td class="font-semibold">City</td>
                        <td>{{detail.city}}</td>
                     </tr> 
                  </table>
               </div>
               <!---->
            </div>
            <div class="isp-card__code-container collapsed" style="max-height: 0px; display: none;">
               <div class="code-content">
                  <pre class="language-markup"><code class="language-markup"></code></pre>
               </div>
            </div>
         </div>
      </div>
   </div>
  </div>
</div>
</template>

<script> 
import usersData from './UsersData'
import country from "../../app/country.js" 
import Subscribers from './Subscribers';
  export default {
    components: { 
      Subscribers
    },
    mounted(){

      this.getUserList()
    },
    data: () => {
      return {
        items: [],
        dealers:[],
        subscribers:[],
        fields: [ 
          { key: 'username', label: 'User Name' },
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'manager', label: 'Manager/Dealer' },
          { key: 'gender', label: 'Gender' },
          { key: 'noofsubscriber','label':"No of subscriber" },
          {key:'action'}
        ],
        subscriberfields: [ 
          { key: 'username', label: 'User Name' },
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'manager', label: 'Manager/Dealer' },
          { key: 'gender', label: 'Gender' },
          {key:'action'}
        ],
        perPage: 5,
        countryoptions:country,
        showUserDialog:false,
        selectedRow:{},
        isRowSelected:false,
        detail:{},
        action:"",
        showSubscribers:false,
        managersub:''
      }
    },
    computed:{
        isUserDetails(){
          return Object.keys(this.detail).length!=0
        },
        message(){
            return this.$store.getters.message
       },
       status(){
          return this.$store.getters.apiStatus  
       },
       manager(){
            return this.managersub
       },
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
      editUser(item,group){
        this.$router.push({ name: 'Manage User', params: {"action":'editUser',"group":group,"item":item} })
      },
      removeUser(e){
        let item = {};
        if(e.target){
           var group = e.target.getAttribute("group");
           if(group == "dealer"){
              this.dealers.forEach((data)=>{
                  if(data.sub == e.target.getAttribute("id")){
                     item = data;
                  }
              })
           }else{
              this.subscribers.forEach((data)=>{
                  if(data.sub == e.target.getAttribute("id")){
                     item = data;
                  }
              })
           }
        }
        var data = {
          "sub":item.sub,
          "username":item.username,
          "action":"removeProfile"
        }
        this.$store.dispatch("removeUser", { data }).then((resp) => {
             this.getUserList();
        }).catch(err => {});
      },
      getUserList(){
        this.isRowSelected = false;
        this.selectedRow = {};
        let action = "getMyChildren";
        let data = {
          "action":"getMyChildren"
        } 
        this.$store.dispatch("getCustomers", { data }).then((resp) => {
            this.items = resp.data.items; 
            this.subscribers = [];
            this.dealers = [];
            this.items.forEach((item)=>{
                if(item.group == "subscriber"){
                    this.subscribers.push(item)
                }else if(item.group == "dealer"){
                    this.dealers.push(item)
                }
            });
        }).catch(err => {});
      },
      showUserForm(e){
         let group = ""
         if(e && e.target){
          if(e.target.innerText == "Add Dealer"){
            group = "dealer" 
          }else{
            group = "subscriber"
          }
          this.$router.push({ name: 'Manage User', params: {"action":'addUser',"group":group} })
        }
      },
      showSubscriber(sub){
         this.showSubscribers = true;
         this.managersub = sub;
      },
      hideSubscriber(sub){
         this.showSubscribers = false;
         this.managersub = null;
      },
      hideUserForm(){
        this.showUserDialog = false;
      },
      showdetails(item){
          this.detail = item;
      },
      hideDetails(){
        this.detail = {};
      }
    }
  }
</script>
