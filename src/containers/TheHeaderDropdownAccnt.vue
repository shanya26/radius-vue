<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="img/avatars/1.png"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template> 
    <CDropdownItem @click.prevent="profile">
      <CIcon name="cil-user" /> Profile
    </CDropdownItem>    
    <CDropdownItem @click.prevent="signout">
      <CIcon name="cil-lock-locked"/> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data() {
      return {
           
      };
  },
  methods:{
    signout(){
      this.$store.dispatch("logout");
      this.$router.replace({ path: "/login" });
    },
    profile(){
      this.$router.push("/profile");
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>