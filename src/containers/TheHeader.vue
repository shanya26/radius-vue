<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      v-c-emit-root-event:toggle-sidebar-mobile
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      v-c-emit-root-event:toggle-sidebar
    />
    <CHeaderBrand
      class="mx-auto d-lg-none" 
      src="icons/cloud-icon.png"
      width="60"
      height="60"
      alt="MEYI CLOUD HOME"
    />
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" class="c-icon mx-1" ><path d="M22.016 10.146l-9.309-8.564c-0.283-0.261-0.662-0.421-1.079-0.421-0.44 0-0.839 0.178-1.127 0.467l-9.001 9.001v12.621h8.25v-7.875h4.5v7.875h8.25v-12.658zM21 21.75h-5.25v-6.375c0-0.828-0.672-1.5-1.5-1.5v0h-4.5c-0.828 0-1.5 0.672-1.5 1.5v0 6.375h-5.25v-10.5l8.561-8.561c0.017-0.017 0.040-0.027 0.066-0.027 0.025 0 0.047 0.009 0.064 0.025l-0-0 9.309 8.564z"></path></svg>Home
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="d-md-down-none"> 
       <CHeaderNavItem class="px-3">
        <div class="mr-auto">{{this.cognitouser}}</div>
        <div>{{this.cognitogroup}}</div>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="mr-4">       
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0"/>
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  }
}
</script>
