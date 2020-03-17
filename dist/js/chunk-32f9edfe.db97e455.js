(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32f9edfe"],{"6ed0":function(t,a,e){"use strict";var s={emptySpace:new RegExp(/\s/),emptySpaceStartandEnd:new RegExp(/^\s+|\s+$/),validateEmail:new RegExp(/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/),validatePassword:new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})")},r={noInput:"Please provide ",emptySpace:"Contains empty space",emptySpaceStartandEnd:"Space is not allowed",validateEmail:"Email is not valid",validatePassword:"Password is not valid"},n=function(t){var a,e="",s={};for(a in t){var r=t[a];switch(a){case"name":e=o(a,r);break;case"username":e=o(a,r);break;case"password":e=i(a,r);break;case"email":e=l(a,r);break}""!=e&&void 0!=e&&(s[a]=e)}return s},o=function(t,a){var e="";return a?s["emptySpaceStartandEnd"].test(a)&&(e=r["emptySpaceStartandEnd"]):e=r["noInput"]+" "+t,e},i=function(t,a){var e="";return a?s["emptySpaceStartandEnd"].test(a)?e=r["emptySpaceStartandEnd"]:s["validatePassword"].test(a)||(e=r["validatePassword"]):e=r["noInput"]+" "+t,e},l=function(t,a){var e="";return a?s["emptySpaceStartandEnd"].test(a)?e=r["emptySpaceStartandEnd"]:s["validateEmail"].test(a)||(e=r["validateEmail"]):e=r["noInput"]+" "+t,e};a["a"]=n},"737a":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CContainer",{staticClass:"d-flex align-items-center min-vh-100"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"},[e("div",{staticClass:"container"},[e("img",{staticStyle:{width:"80px",height:"auto"},attrs:{src:"icons/logo-w.png"}}),e("a",{staticClass:"navbar-brand logo-text page-scroll",attrs:{href:"/"}},[t._v("MEYI CLOUD")]),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-awesome fas fa-bars"}),e("span",{staticClass:"navbar-toggler-awesome fas fa-times"})]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExampleDefault"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/"}},[e("a",{staticClass:"btn-outline-sm"},[t._v("HOME "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])])],1)]),e("span",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/login"}},[e("a",{staticClass:"btn-outline-sm"},[t._v("LOG IN")])])],1)])])]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("CCol",{staticClass:"mx-auto w-full p-3 text-center"},[e("CCardGroup",[e("CCard",{staticClass:"p-4"},[e("CCardBody",[e("CForm",[e("p",{staticClass:"float-left text-muted"},[t._v("Recover your Password? ")]),"error"==t.status?e("div",{staticClass:"alert alert-danger"},[t._v(" "+t._s(t.message)+" ")]):t._e(),t.verified?t._e():e("CInput",{attrs:{placeholder:"Email",prepend:"@"},model:{value:t.data.email,callback:function(a){t.$set(t.data,"email",a)},expression:"data.email"}}),t.invalid?e("div",{staticClass:"invalid-feedback"},[t._v(" "+t._s(this.$store.getters.validateMsgs["email"])+" ")]):t._e(),t.verified?e("CInput",{attrs:{placeholder:"Confirm Code",type:"text"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}],null,!1,3300492400),model:{value:t.data.confirmcode,callback:function(a){t.$set(t.data,"confirmcode",a)},expression:"data.confirmcode"}}):t._e(),t.verified?e("CInput",{attrs:{placeholder:"Password",type:"password",autocomplete:"curent-password"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}],null,!1,3300492400),model:{value:t.data.password,callback:function(a){t.$set(t.data,"password",a)},expression:"data.password"}}):t._e(),t.invalid?e("div",{staticClass:"invalid-feedback"},[t._v(" "+t._s(this.$store.getters.validateMsgs["password"])+" ")]):t._e(),e("CRow",[t.verified?t._e():e("CCol",{attrs:{col:"3"}},[e("CButton",{staticClass:"px-4",attrs:{color:"success"},on:{click:function(a){return a.preventDefault(),t.recoverPassword(a)}}},[t._v("Recover")])],1),t.verified?e("div",{staticClass:"float-left px-3"},[e("CButton",{attrs:{color:"success"},on:{click:function(a){return a.preventDefault(),t.resend(a)}}},[t._v("Resend Code")]),e("CButton",{staticClass:"mx-4",attrs:{color:"success"},on:{click:function(a){return a.preventDefault(),t.savepass(a)}}},[t._v("Save Password")])],1):t._e()],1)],1)],1)],1)],1)],1)],1)])},r=[],n=e("6ed0"),o={components:{},computed:{loading:function(){return this.$store.getters.loaderStatus},message:function(){return this.$store.getters.message},status:function(){return this.$store.getters.apiStatus},validateMsgs:function(){return this.$store.getters.validateMsgs}},data:function(){return{data:{email:"",password:"",confirmcode:""},invalid:!1,verified:!1,reset:this.$store.commit("reset")}},methods:{savepass:function(){var t=this,a=this.data,e=Object(n["a"])({confirmcode:a.confirmcode,password:a.password});if(Object.keys(e).length)return this.invalid=!0,void this.$store.commit("validate_error",e);this.$store.dispatch("saveNewPassword",{data:a}).then((function(){return t.$router.push("/login")})).catch((function(t){return console.log(t)}))},recoverPassword:function(){var t=this,a=this.data;a.username=a.email;var e=Object(n["a"])({email:a.email,username:a.username});if(Object.keys(e).length)return this.invalid=!0,void this.$store.commit("validate_error",e);localStorage.setItem("username",a.username),this.$store.dispatch("recoverPassword").then((function(a){t.verified=!0})).catch((function(t){console.log(t)}))},resend:function(){}}},i=o,l=e("2877"),c=Object(l["a"])(i,s,r,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-32f9edfe.db97e455.js.map