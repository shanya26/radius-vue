<template>
  <CContainer class="d-flex align-items-center min-vh-100">
  <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div class="container">
        <img src="icons/cloud-icon.png" style="width: 80px;height: auto;">
         <a class="navbar-brand logo-text page-scroll" href="/">MEYI CLOUD</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-awesome fas fa-bars"></span>
         <span class="navbar-toggler-awesome fas fa-times"></span>
         </button> 
         <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">
               <li class="nav-item">
                  <router-link
                     to="/"
                     >
                     <a class="btn-outline-sm">HOME <span class="sr-only">(current)</span></a>
                  </router-link>
               </li> 
            </ul>
            <span class="nav-item">
               <router-link
                  to="/register"
                  >
                  <div class="btn-outline-sm">SIGN UP</div>
               </router-link>
            </span>
         </div>
      </div>
   </nav>
    <div class="col-md-12">
      <CCol class="mx-auto w-full p-3 text-center">
        <CCardGroup>
          <CCard class="p-4">
            <CCardBody>
              <CForm>
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>
                <div v-if="status=='error'" class="alert alert-danger">
                     {{message}}
                  </div>
                <CInput
                  placeholder="Email"
                  v-model="data.username"
                  prepend="@"
                >
                </CInput>
                <div class="invalid-feedback" v-if="invalid">
                   {{this.$store.getters.validateMsgs["email"]}}
                </div>
                <CInput
                  placeholder="Password"
                  type="password"
                  v-model="data.password"
                  autocomplete="curent-password"
                >
                  <template #prepend-content><CIcon name="cil-lock-cil-map"/></template>
                </CInput>
                <div class="invalid-feedback" v-if="invalid">
                   {{this.$store.getters.validateMsgs["password"]}}
                </div>
                <CRow>
                  <CCol sm="6" md="2">
                    <CButton type="submit" color="success" class="px-4" @click.prevent="login">{{$t('pages.login')}}</CButton>
                  </CCol>
                  <CCol sm="6" md="10">
                      <router-link to="/forgotpassword">
                        <CButton color="link" class="px-0">{{$t('pages.forgotpwd')}}?</CButton>
                      </router-link>
                  </CCol>
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
  name: 'Login',
  computed: {
     validateMsgs(){
        return this.$store.getters.validateMsgs  
     },
     message(){
        return this.$store.getters.message
     },
     status(){
        return this.$store.getters.apiStatus  
     }
  },
  data() {
    return {
      invalid:false,
      reset:this.$store.commit("reset"),
      data:{
        username:"svellaiy@gmail.com",
        password:"Public!123",
        group:""
      }
    };
  },

  methods: {
      login() {
        let data = this.data
        var validate = validation({"username":data.username,"password":data.password});
        if(Object.keys(validate).length){
           this.invalid = true;
           this.$store.commit("validate_error",validate);
           return;
        }
        this.$store.dispatch("login", { data }).then(() => this.$router.push("/dashboard")).catch(err => console.log(err));    
      }
  }
}
</script>
