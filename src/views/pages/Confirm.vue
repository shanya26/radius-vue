<template>
    <div> 
    <CContainer class="min-vh-100 d-flex align-items-center"> 
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div class="container">
          <img src="favicon-96x96.png" style="width: 80px;height: auto;">
         <a class="navbar-brand logo-text page-scroll" href="/">MEYI CLOUD</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-awesome fas fa-bars"></span>
         <span class="navbar-toggler-awesome fas fa-times"></span>
         </button>           
      </div>
   </nav>     
    <CRow class="w-100 justify-content-center">
      <CCol md="6" sm="8">
        <CCard class="mx-4 mb-0">
          <CCardBody class="p-4">
            <CForm>
              <h1>Confirm</h1> 
              <p class="text-muted">Enter the verification code you should have recieved via email</p>
              <div v-if="status=='error'" class="alert alert-danger">
                        {{message}}
              </div>
               <CInput
                  placeholder="Username"
                  v-model = "data.username" 
                  disabled
                >
                 <template #prepend-content><CIcon name="cil-user"/></template>
                 </CInput> 
                <CInput
                  placeholder="Confirm Code"
                   v-model = "data.confirmcode"
                > 
                </CInput> 
                <CButton color="success" block @click.prevent="verifyAccount">Verify Now</CButton>
            </CForm>
          </CCardBody> 
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
    </div>
</template>

<script> 
 import validation from "../../app/validation";
  export default {
    name: "Confirm",
    data() {
      return {
        data:{
          ...this.$route.params.signupdata,
          confirmcode:""
        }
      };
    },
    components:{ 
     },
     computed: { 
         loading(){
           return this.$store.getters.loaderStatus
         },
         message(){
            return this.$store.getters.message
         },
         status(){
            return this.$store.getters.apiStatus  
         },
         validateMsgs(){
            return this.$store.getters.validateMsgs  
         }
    },
    methods: { 
      verifyAccount() {
        let data = this.data;
        var self = this;
        delete data.password;
        this.$store.dispatch("confirmCode", { data }).then((resp) =>{           
           data["action"] = "createprofile";
           data["method"] = "POST"
           this.$store.dispatch("createdynamoProfile", {data}).then((resp) =>{
             self.$router.push("/login")
          }).catch(err =>{ 

          }); 
        }).catch(err => console.log(err)); 
      }
    }
  };
</script>
 