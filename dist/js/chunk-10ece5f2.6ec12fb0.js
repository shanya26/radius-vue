(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10ece5f2","chunk-2d20e8cd"],{"3a27":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"35px",height:"35px"}},[a("path",{attrs:{fill:"#32BEA6",d:"M7.9,256C7.9,119,119,7.9,256,7.9C393,7.9,504.1,119,504.1,256c0,137-111.1,248.1-248.1,248.1C119,504.1,7.9,393,7.9,256z"}}),a("path",{attrs:{fill:"#FFF",d:"M391.5,214.5H297v-93.9c0-4-3.2-7.2-7.2-7.2h-68.1c-4,0-7.2,3.2-7.2,7.2v93.9h-93.9c-4,0-7.2,3.2-7.2,7.2v69.2c0,4,3.2,7.2,7.2,7.2h93.9v93.4c0,4,3.2,7.2,7.2,7.2h68.1c4,0,7.2-3.2,7.2-7.2v-93.4h94.5c4,0,7.2-3.2,7.2-7.2v-69.2C398.7,217.7,395.4,214.5,391.5,214.5z"}})])},i=[],r=a("2877"),n={},o=Object(r["a"])(n,s,i,!1,null,null,null);t["a"]=o.exports},b09b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return 1==e.showRadiusform?a("div",[a("transition",{attrs:{name:e.sideBar.fade,appear:!0}},[a("CSidebar",{attrs:{fixed:e.sideBar.fixed,minimize:e.sideBar.minimize,show:e.sideBar.show,aside:e.sideBar.aside,overlaid:e.sideBar.overlaid,colorScheme:e.sideBar.colorScheme,dropdownMode:e.sideBar.dropdownMode,open:e.sideBar.open}},[a("transition",{attrs:{name:"slide"}},[a("div",[a("CSidebarHeader",[e._v(" RADIUS Server Configuration ")]),a("span",{on:{click:function(t){return t.preventDefault(),e.hideSidebar(!1)}}},[a("CSidebarClose")],1),a("CSidebarForm",[a("CCard",[a("CCardBody",["error"==e.status?a("div",{staticClass:"alert alert-danger"},[e._v(" "+e._s(e.message)+" ")]):e._e(),a("CRow",[a("CCol",{attrs:{"md-12":""}},["add"==e.action?a("CSelect",{attrs:{value:e.sideBar.sideBarData.username,options:e.sideBar.dealers,label:"User Name",horizontal:"",placeholder:"Please select"},on:{"update:value":function(t){e.sideBar.sideBarData.username=t}}}):e._e(),"edit"==e.action?a("CSelect",{attrs:{value:e.sideBar.sideBarData.username,disabled:"",options:e.sideBar.dealers,label:"User Name",horizontal:"",placeholder:"Please select"},on:{"update:value":function(t){e.sideBar.sideBarData.username=t}}}):e._e()],1)],1),a("CRow",[a("CCol",{attrs:{"md-12":""}},["add"==e.action?a("CInput",{attrs:{label:"Server Name",horizontal:"",placeholder:"Enter server name"},model:{value:e.sideBar.sideBarData.server,callback:function(t){e.$set(e.sideBar.sideBarData,"server",t)},expression:"sideBar.sideBarData.server"}}):e._e(),"edit"==e.action?a("CInput",{attrs:{label:"Server Name",disabled:"",horizontal:"",placeholder:"Enter server name"},model:{value:e.sideBar.sideBarData.server,callback:function(t){e.$set(e.sideBar.sideBarData,"server",t)},expression:"sideBar.sideBarData.server"}}):e._e()],1)],1),a("CRow",[a("CCol",{attrs:{"md-12":""}},["add"==e.action?a("CInput",{attrs:{label:"IP Address",horizontal:"",placeholder:"Enter ipAddress"},model:{value:e.sideBar.sideBarData.nasname,callback:function(t){e.$set(e.sideBar.sideBarData,"nasname",t)},expression:"sideBar.sideBarData.nasname"}}):e._e(),"edit"==e.action?a("CInput",{attrs:{label:"IP Address",horizontal:"",disabled:"",placeholder:"Enter ipAddress"},model:{value:e.sideBar.sideBarData.nasname,callback:function(t){e.$set(e.sideBar.sideBarData,"nasname",t)},expression:"sideBar.sideBarData.nasname"}}):e._e()],1)],1),a("CRow",[a("CCol",{attrs:{"md-12":""}},[a("CInput",{attrs:{label:"Shared Secret",horizontal:"",type:"password",placeholder:"Enter shared Secret",description:e.sideBar.secretdesc,refs:"sharedsecret",maxlength:"31"},on:{"update:value":e.onkeyupsecret},model:{value:e.sideBar.sideBarData.secret,callback:function(t){e.$set(e.sideBar.sideBarData,"secret",t)},expression:"sideBar.sideBarData.secret"}})],1)],1),a("CRow",[a("CCol",{attrs:{"md-12":""}},["add"==e.action?a("CSelect",{attrs:{value:e.sideBar.sideBarData.community,options:e.sideBar.commuties,label:"Community",horizontal:"",placeholder:"Please select"},on:{"update:value":function(t){e.sideBar.sideBarData.community=t}}}):e._e(),"edit"==e.action?a("CSelect",{attrs:{value:e.sideBar.sideBarData.community,disabled:"",options:e.sideBar.commuties,label:"Community",horizontal:"",placeholder:"Please select"},on:{"update:value":function(t){e.sideBar.sideBarData.community=t}}}):e._e()],1)],1),a("CRow",[a("CCol",{attrs:{"md-12":""}},["add"==e.action?a("CTextarea",{attrs:{placeholder:"",rows:"3",cols:"12",label:"Description",horizontal:""},model:{value:e.sideBar.sideBarData.description,callback:function(t){e.$set(e.sideBar.sideBarData,"description",t)},expression:"sideBar.sideBarData.description"}}):e._e(),"edit"==e.action?a("CTextarea",{attrs:{placeholder:"",rows:"3",cols:"12",disabled:"",label:"Description",horizontal:""},model:{value:e.sideBar.sideBarData.description,callback:function(t){e.$set(e.sideBar.sideBarData,"description",t)},expression:"sideBar.sideBarData.description"}}):e._e()],1)],1)],1)],1),a("div",["add"==e.action?a("CButton",{staticClass:"mx-2 float-right",attrs:{color:"success"},on:{click:function(t){return t.preventDefault(),e.createRadius(t)}}},[e._v("Submit")]):e._e(),"edit"==e.action?a("CButton",{staticClass:"mx-3 float-right",attrs:{color:"success"},on:{click:function(t){return t.preventDefault(),e.updateRadius(t)}}},[e._v("Update")]):e._e(),a("CButton",{staticClass:"mx-2 float-right",attrs:{color:"secondary"},on:{click:function(t){return t.preventDefault(),e.hideSidebar(!1)}}},[e._v("Close")])],1)],1)],1)])],1)],1)],1):e._e()},i=[];function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d={props:["showRadiusform","action","item"],mounted:function(){"edit"!=this.action?this.getUserList():this.sideBar.dealers.push({label:this.item.shortname,value:this.item.shortname}),this.onkeyupsecret()},data:function(){return{sideBar:{minimize:!1,fade:"fade",open:"responsive",show:"responsive",aside:!0,fixed:!0,overlaid:!1,colorScheme:"light",dropdownMode:"closeInactive",hideOnMobileClick:!0,commuties:["mikrotik_pre_6.43"],sideBarData:n({username:this.item.shortname?this.item.shortname:localStorage.getItem("username")},this.item),dealers:[],secretdesc:"0 to 31 characters remaining"}}},computed:{message:function(){return this.$store.getters.message},status:function(){return this.$store.getters.apiStatus},updateItem:function(){this.item.username=this.item.shortname,this.sideBar.sideBarData=this.item}},methods:{getUserList:function(){var e=this;if(this.sideBar.dealers.push({label:this.cognitouser,value:this.cognitouser}),"admin"==this.cognitogroup){var t="dealer";this.$store.dispatch("getListbyGroup",{group:t}).then((function(t){t.data.items.forEach((function(t){e.sideBar.dealers.push({label:t.username,value:t.username})}))})).catch((function(e){}))}},createRadius:function(){var e=this,t=this.sideBar.sideBarData;t.action="saveRadius",this.$store.dispatch("saveRadius",{data:t}).then((function(t){e.hideSidebar(!1,!0)})).catch((function(e){}))},updateRadius:function(){var e=this,t=this.sideBar.sideBarData;t.action="updateRadius",this.$store.dispatch("updateRadius",{data:t}).then((function(t){e.hideSidebar(!1,!0)})).catch((function(e){}))},hideSidebar:function(e,t){this.$emit("update-showRadiusform",e,t)},onkeyupsecret:function(e){if(e||(e=this.sideBar.sideBarData.secret),e){var t=e.length;this.sideBar.secretdesc=31-t+" to 31 characters remaining"}}}},c=d,l=a("2877"),u=Object(l["a"])(c,s,i,!1,null,null,null);t["default"]=u.exports},eecc:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("CRow",[a("CCol",{attrs:{col:"12"}},[a("transition",{attrs:{name:"slide"}},[a("CCard",[a("CCardBody",[a("div",{staticClass:"my-1 mx-2 text-right plus-button"},[a("div",{staticClass:"icon-plus",on:{click:function(t){return t.preventDefault(),e.addRadius(t)}}},[a("i",{staticClass:"fa fa-plus-square"})])]),a("CDataTable",{ref:"dealer_table",attrs:{hover:"",striped:"","table-filter":"",items:e.items,fields:e.fields,"items-per-page":e.perPage,pagination:e.$options.paginationProps,"index-column":"","clickable-rows":"",sorter:e.sorter,itemsPerPageSelect:e.itemsPerPageSelect},on:{"row-clicked":e.rowClicked},scopedSlots:e._u([{key:"username",fn:function(t){var s=t.item;t.index;return[a("td",[a("span",[a("CIcon",{attrs:{name:"cil-user"}})],1),a("a",{on:{click:function(t){return t.preventDefault(),e.showdetails(s)}}},[e._v(e._s(s.username))])])]}},{key:"action",fn:function(t){var s=t.item;return[a("td",[a("span",{staticClass:"icon-edit mx-2",on:{click:function(t){return t.preventDefault(),e.editNAS(s)}}},[a("i",{staticClass:"fas fa-edit"})]),a("span",{staticClass:"icon-remove",on:{click:function(t){return t.preventDefault(),e.removeNas(s.nasname)}}},[a("i",{staticClass:"fas fa-trash"})])])]}}])})],1)],1)],1)],1)],1),e.showRadiusform?a("NASManage",{attrs:{showRadiusform:e.showRadiusform,action:e.action,item:e.item},on:{"update-showRadiusform":e.update}}):e._e()],1)},i=[],r=a("b09b"),n=a("3a27"),o={components:{NASManage:r["default"],plusicon:n["a"]},mounted:function(){this.getNASlist()},data:function(){return{items:[],itemsPerPageSelect:!0,sorter:!0,fields:[{key:"nasname",label:"Radius Name"},{key:"shortname",label:"User Name"},{key:"server",label:"Server Name"},{key:"community",label:"Community"},{key:"description",label:"Description"},{key:"action"}],perPage:5,showUserDialog:!1,selectedRow:{},isRowSelected:!1,showRadiusform:!1,action:"add",item:{}}},computed:{message:function(){return this.$store.getters.message},status:function(){return this.$store.getters.apiStatus},isShowAddbutton:function(){return!this.$store.getters.getUserData[0].nasValue||this.$store.getters.getUserData[0].nasValue>this.items.length}},paginationProps:{doubleArrows:!1,previousButtonHtml:"prev",nextButtonHtml:"next"},methods:{getBadge:function(e){return"Active"===e?"success":"Inactive"===e?"secondary":"Pending"===e?"warning":"Banned"===e?"danger":"primary"},userLink:function(e){return"users/".concat(e.toString())},rowClicked:function(e,t){this.selectedRow=e,this.isRowSelected=!0},editNAS:function(e){this.showRadiusform=!0,this.action="edit",this.item=e},removeNas:function(e){var t=this,a={action:"removeradius",nasname:e};this.$store.dispatch("removeRadius",{data:a}).then((function(e){t.getNASlist()})).catch((function(e){}))},addRadius:function(){this.isShowAddbutton?(this.showRadiusform=!0,this.action="add",this.item={}):this.$store.commit("loadToaster",{varient:"warn",message:"Allowed "+this.$store.getters.getUserData[0].nasValue+" Radius(s) only,  Check with administrator"})},getNASlist:function(){var e=this,t=this.cognitouser,a="getradiuslist";"admin"==this.cognitogroup&&(a="getallradius"),this.$store.dispatch("getRadiusList",{username:t,action:a}).then((function(t){e.items=JSON.parse(t.data.items)[0].data})).catch((function(e){}))},update:function(e,t){this.showRadiusform=e,t&&this.getNASlist()}}},d=o,c=a("2877"),l=Object(c["a"])(d,s,i,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-10ece5f2.6ec12fb0.js.map