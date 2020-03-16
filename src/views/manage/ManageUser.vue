<template>
<div>
<CForm v-if="action">
   <div v-if="status=='error'" class="alert alert-danger">
      {{message}}
   </div>
   <div class="float-right px-2 py-2">
      <CButton color="light" @click.prevent="showUserList">Back</CButton>
   </div>
   <div>
      <div class="isp-card mb-base">
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
                     <div id="account-manage-buttons" class="isp-col w-full flex">
                       <CButton color="danger">Upload</CButton>
                    </div>
                  </div>
                  <div id="account-info-col-1" class="isp-col flex-1">
                     <table>
                        <tr>
                           <td class="font-semibold">Username</td>
                           <td> 
                              <CInput v-model="userdata.username" v-if="action=='addUser'" placeholder="Enter User Name"/>
                              <CInput v-model="userdata.username" v-if="action=='editUser'"  disabled placeholder="Enter User Name"/>
                           </td>
                        </tr>
                        <tr>
                           <td class="font-semibold">Name</td>
                           <td>
                              <CInput v-model="userdata.name" v-if="action=='addUser'" placeholder="Enter Name"/>
                              <CInput v-model="userdata.name" disabled v-if="action=='editUser'" placeholder="Enter Name"/>
                           </td>
                        </tr>
                        <tr>
                           <td class="font-semibold">Email</td>
                           <td>
                              <CInput v-model="userdata.email" v-if="action=='addUser'" placeholder="Enter email"/>
                              <CInput v-model="userdata.email" disabled v-if="action=='editUser'" placeholder="Enter email"/>
                           </td>
                        </tr>
                     </table>
                  </div>
                  <div id="account-info-col-2" class="isp-col flex-1">
                     <table>
                        <tr>
                           <td class="font-semibold">Group</td>
                           <td>
                              <CInput v-model="userdata.group" disabled/>
                           </td> 
                        </tr>
                        <tr v-if="action=='editUser' && cognitogroup == 'admin'">
                          <td class="font-semibold" v-if="userdata.group=='subscriber'">Manager/Dealer</td>
                          <td class="font-semibold" v-if="userdata.group=='dealer'">Manager</td>
                           <td>
                              <CInput v-model="userdata.manager" disabled v-if="userdata.group=='dealer'"/>                              
                              <CSelect v-model="userdata.manager" :options="dealers" placeholder="Please select" v-if="userdata.group=='subscriber'" @update:value="val=>{userdata.manager=val}"/>
                           </td>
                        </tr>
                        <tr v-if="action=='addUser' && cognitogroup == 'admin'">
                         <td class="font-semibold" v-if="userdata.group=='subscriber'">Manager/Dealer</td>
                          <td class="font-semibold" v-if="userdata.group=='dealer'">Manager</td>
                           <td>
                              <CSelect v-model="userdata.manager" v-if="userdata.group=='subscriber'" :options="dealers" placeholder="Please select" @update:value="val=>{userdata.manager=val}"/>

                              <CInput v-model="userdata.manager" v-if="userdata.group=='dealer'" disabled/>
                           </td>
                        </tr>
                        <tr v-if="cognitogroup == 'dealer'">
                           <td class="font-semibold">Dealer</td>
                           <td>
                              <CInput v-model="cognitouser" disabled/>
                           </td>
                        </tr>
                     </table>
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
                           <td>
                              <CInput v-model="userdata.firstname" placeholder="Enter first name"/>
                           </td>
                        </tr>
                        <tr>
                           <td class="font-semibold">Last Name</td>
                           <td>
                              <CInput v-model="userdata.lastname" placeholder="Enter last name"/>
                           </td>
                        </tr>
                        <tr>
                           <td class="font-semibold">Nick name</td>
                           <td>
                              <CInput v-model="userdata.nickname" placeholder="Enter Nick name"/>
                           </td>
                        </tr>
                        <tr>
                           <td class="font-semibold">Birth Date</td>
                           <td>
                              <CInput v-model="userdata.birthdate" placeholder="Enter birthday"/>
                           </td>
                        </tr>
                        <tr>
                           <td class="font-semibold">Mobile</td>
                           <td>
                              <CInput v-model="userdata.phone_number" placeholder="Enter phone" type="number"/>
                           </td>
                        </tr>
                        <tr>
                           <td class="font-semibold">Gender</td>
                           <td>
                              <CInputRadio
                                 v-for="(option, optionIndex) in ['Male','Female']"
                                 :key="1 + option"
                                 :label="option"
                                 type="radio"
                                 :value="option"
                                 @update:checked="val=>{userdata.gender=val}"
                                 v-model="userdata.gender"
                                 :custom="1 > 1"
                                 :name="`Option 1${1}`"
                                 :checked="option === userdata.gender"
                                 :inline=true
                                 />
                           </td>
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
                           <td>
                              <CInput v-model="userdata.locale" placeholder="Enter locale"/>
                           </td>
                        </tr>
                        <tr>
                           <td class="font-semibold">Country</td>
                           <td>
                              <CSelect v-model="userdata.country" :options="countryoptions" placeholder="Please select" @update:value="val=>{userdata.country=val}"/>
                           </td>
                        </tr>
                        <tr>
                           <td class="font-semibold">Address</td>
                           <td>
                              <CTextarea 
                                 placeholder="" 
                                 rows="3"
                                 cols="12"
                                 v-model="userdata.address"
                                 />
                           </td>
                        </tr>
                        <tr>
                           <td class="font-semibold">State</td>
                           <td>
                              <CInput v-model="userdata.state" placeholder="Enter state"/>
                           </td>
                        </tr>
                        <tr>
                           <td class="font-semibold">City</td>
                           <td>
                              <CInput v-model="userdata.city" placeholder="Enter city"/>
                           </td>
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
      <CButton color="success" class="px-5 my-3 float-right" v-if="action=='addUser'" @click.prevent="createUser">Submit</CButton>
      <CButton color="success" class="px-5 my-3 float-right" v-if="action=='editUser'" @click.prevent="updateUser">Update</CButton>
   </div>
</CForm>
</div>
</template>


<script>
import country from "../../app/country.js" 
  export default {
    props:{
    },
    data() {
      return {
       userdata:{
          "email":"svellaiy1455@gmail.com",
          "password":"Public!123",
          "name":"shan",
          "username":"shan",
          "profile":"None",
          "picture":"None",
          "firstname":"None",
          "lastname":"None",
          "name":"Shanmugam",
          "gender":"Male",
          "locale":"None",
          "manager":this.$route.params.action=="addUser" && this.$route.params.group=="dealer"?localStorage.getItem("username"):"",
          "group":this.$route.params.group,
          "phone_number":"+919865579024",
          "nickname":"None",
          "address":"None",
          "country":"India",
          "state":"None",
          "city":"None",
          "birthdate":"01/01/1980",
          ...this.$route.params.item
        },  
        countryoptions:country,
        dealers:[],
        action:this.$route.params.action
      }    
    },
    mounted(){
      this.getDealers()
    },
    computed:{
      addAction(){
        return this.$route.params.action =="addUser" || this.$route.params.action =="editUser"
      },
      editAction(){
        return this.$route.params.action =="editUser"
      },
      getItem(){
        return this.$route.params.item;
      },
      group(){ 
        return this.$route.params.group
      },
      message(){
            return this.$store.getters.message
      },
      status(){
          return this.$store.getters.apiStatus  
      }
    },
    methods: {
      createUser(){
        let data = this.userdata
        data.group = this.$route.params.group;
        this.$store.dispatch("cognitoSignup", { data }).then((resp) => {
           data.sub = resp.userSub;
           //data.managersub = localStorage.getItem("sub");
           if(this.$route.params.action=="addUser" && this.$route.params.group=="dealer"){
              data.managersub = localStorage.getItem("sub");
           }else{
               data.managersub = data.manager;  
           }          
           data["action"] = "createprofile";
           this.$store.dispatch("createdynamoProfile", {data}).then((resp) =>{
              this.showUserList()
          }).catch(err =>{ 
          });
        }).catch(err => {});
      },
      updateUser(){
        let data = this.userdata
        data.group = this.$route.params.group;
          data["action"] = "updateprofile";
          this.$store.dispatch("createdynamoProfile", {data}).then((resp) =>{
            this.showUserList()
          }).catch(err =>{ 
        });
      },
      showUserList(){
        if(this.$route.params.group == "dealer"){
          this.$router.replace("/UserList/dealers")
        }else{
          this.$router.replace("/UserList/subscribers")
        }
      },     
      getDealers(){
        var group = this.$route.params.group;
        this.dealers.push({
            "label":this.cognitouser,
            "value":this.sub
         })
        if(group=='subscriber' && this.cognitogroup =='admin'){
           let group = "dealer";
           this.$store.dispatch("getListbyGroup", {group}).then((resp) =>{
              resp.data.items.forEach((item)=>{
                 this.dealers.push({
                    "label":item.username,
                    "value":item.sub
                 })
              }); 
          }).catch(err =>{ 

          });
        }       
      }
    }
  }
</script>