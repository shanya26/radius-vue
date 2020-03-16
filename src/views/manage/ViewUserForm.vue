<template>
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
</template>
<script> 
  export default {
    props: {   
    	details:{
    		default:{}
    	}
    },
    data: () => {
      return {
      }
    },
    computed:{
    },
    methods: { 

    }
  }
</script>