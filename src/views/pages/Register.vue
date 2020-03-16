<template>
  <CContainer class="min-vh-100 d-flex align-items-center">
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
                  <router-link to="/">
                     <a class="btn-outline-sm">HOME <span class="sr-only">(current)</span></a>
                  </router-link>
               </li> 
            </ul>
            <span class="nav-item">
               <router-link to="/login">
                  <div class="btn-outline-sm">LOG IN</div>
               </router-link>
            </span>
         </div>
      </div>
   </nav>
    <CRow class="w-100 justify-content-center">
      <CCol md="6" sm="8">
        <CCard class="mx-4 mb-0">
          <CCardBody class="p-4">
            <CForm>
              <h1>Register</h1>
              <p class="text-muted">Create your account</p>
              <div v-if="status=='error'" class="alert alert-danger">
                        {{message}}
              </div>
              <CInput
                placeholder="User Name"
                 v-model = "data.username"
              >
              <template #prepend-content><CIcon name="cil-user"/></template>
              <div class="invalid-feedback" v-if="invalid">
                   {{this.$store.getters.validateMsgs["username"]}}
                </div> 
              </CInput>  
               <CInput
                placeholder="Password"
                type="password"
                 v-model = "data.password"
                autocomplete="new-password"
              >
                <template #prepend-content><CIcon name="cil-lock-locked"/></template>
              </CInput> 
              <div class="invalid-feedback" v-if="invalid">
                   {{this.$store.getters.validateMsgs["password"]}}
                </div> 
              <CInput
                placeholder="Email"
                autocomplete="email"
                v-model = "data.email"
                prepend="@"
              />
              <div class="invalid-feedback" v-if="invalid">
                   {{this.$store.getters.validateMsgs["email"]}}
                </div>
              <CInput
                placeholder="Name"
                autocomplete="name"
                 v-model = "data.name"
              >
                <template #prepend-content><CIcon name="cil-user"/></template>
              </CInput>   
              <div class="invalid-feedback" v-if="invalid">
                   {{this.$store.getters.validateMsgs["name"]}}
              </div> 
              <CInput
                placeholder="Phone"
                 v-model = "data.phone_number"
              >
              <template #prepend-content><CIcon name="cil-screen-smartphone"/></template>
              </CInput>  
              <CButton color="success" block @click.prevent="signup">Sign up</CButton>
            </CForm>
          </CCardBody> 
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import validation from "../../app/validation"; 
export default {
  name: 'Register',
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
        "email":"svellaiy@gmail.com",
        "password":"Public!123",
        "name":"svellaiy",
        "username":"svellaiy",
        "profile":"None",
        "picture":"None",
        "firstname":"None",
        "lastname":"None",
        "name":"Shanmugam",
        "gender":"Male",
        "locale":"None",
        "group":"admin",
        "phone_number":"+919865579024",
        "nickname":"None",
        "address":"None",
        "country":"India",
        "state":"None",
        "city":"None",
        "birthdate":"01/01/1980"
      },
      invalid:false,
      reset:this.$store.commit("reset")
    };
  },
  methods: {
      signup() {
        let data = this.data;
        var validate = validation({"username":data.username,"password":data.password,"email":data.email});
        if(Object.keys(validate).length){
           this.invalid = true;
           this.$store.commit("validate_error",validate);
           return;
        }
        this.signCognito(data);
      },
      signCognito(data){
        this.$store.dispatch("cognitoSignup", { data }).then((resp) => {
            data.sub = resp.userSub;            
            this.$router.push({ name: 'confirm', params: {"signupdata":data} })
        }).catch(err => {});
      }
  }
}
</script>
