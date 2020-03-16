<template>
    <CContainer class="d-flex align-items-center min-vh-100">
      <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div class="container"> 
        <img src="icons/cloud-icon.png" style="width: 80px;height: auto;">
      <a class="navbar-brand logo-text page-scroll" href="/">MEYI CLOUD</a>
            <!-- Mobile Menu Toggle Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-awesome fas fa-bars"></span>
                <span class="navbar-toggler-awesome fas fa-times"></span>
            </button>
            <!-- end of mobile menu toggle button -->

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link
                                      to="/"
                                    >
                                    <a class="btn-outline-sm">HOME <span class="sr-only">(current)</span></a>
                                    </router-link>
                         
                    </li>

                    <!-- Dropdown Menu -->

                    <!-- end of dropdown menu -->


                </ul>
                <span class="nav-item">
                <router-link
                                      to="/login"
                                    >
                                    <a class="btn-outline-sm">LOG IN</a>
                                    </router-link>
                         
                     

                                     
                </span>
            </div>
        </div> <!-- end of container -->
    </nav> <!-- end of navbar -->
    <!-- end of navigation -->
 <div class="col-md-12">
      <CCol class="mx-auto w-full p-3 text-center">
        <CCardGroup>
          <CCard class="p-4">
            <CCardBody>
              <CForm> 
                <p class="float-left text-muted">Recover your Password? </p>
                <div v-if="status=='error'" class="alert alert-danger">
                     {{message}}
                  </div>
                <CInput v-if="!verified"
                  placeholder="Email"
                  v-model="data.email"
                  prepend="@"
                > 
                </CInput>
                <div class="invalid-feedback" v-if="invalid">
                   {{this.$store.getters.validateMsgs["email"]}}
                </div>
                <CInput v-if="verified"
                  placeholder="Confirm Code"
                  type="text"
                  v-model="data.confirmcode"
                >
                <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CInput v-if="verified"
                  placeholder="Password"
                  type="password"
                  v-model="data.password"
                  autocomplete="curent-password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <div class="invalid-feedback" v-if="invalid">
                   {{this.$store.getters.validateMsgs["password"]}}
                </div>
                <CRow>
                  <CCol col="3" v-if="!verified">
                    <CButton color="success" class="px-4" @click.prevent="recoverPassword">Recover</CButton>
                   </CCol> 
                    <div class="float-left px-3" v-if="verified">  
                     <CButton color="success" @click.prevent="resend">Resend Code</CButton>
                     <CButton color="success" class="mx-4" @click.prevent="savepass">Save Password</CButton> 
                    </div> 
                </CRow>
              </CForm>
            </CCardBody>
          </CCard> 
        </CCardGroup>
      </CCol>
    </div>
    </CContainer>
</template>
<script>
import validation from "../../app/validation";
export default {
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
  data() {
    return {
      data:{
        email:"",
        password:"",
        confirmcode:"",
      },
      invalid:false,
      verified:false,
      reset:this.$store.commit("reset"),
    };
  },

  methods: {
      savepass(){         
        let data = this.data;    
        var validate = validation({"confirmcode":data.confirmcode,"password":data.password});
        if(Object.keys(validate).length){
           this.invalid = true;
           this.$store.commit("validate_error",validate);
           return;
        } 
        this.$store.dispatch("saveNewPassword", { data }).then(() => this.$router.push("/login")).catch(err => console.log(err));       
      }, 
      recoverPassword() {  
        let data = this.data
        data.username = data.email;     
        var validate = validation({"email":data.email,"username":data.username});
        if(Object.keys(validate).length){
           this.invalid = true;
           this.$store.commit("validate_error",validate);
           return;
        }
        localStorage.setItem("username",data.username)
        this.$store.dispatch("recoverPassword").then((resp) => {
                this.verified = true;
        }).catch(err => {
          console.log(err);
        });       
        
      },
      resend(){

      }
  }
};
</script>