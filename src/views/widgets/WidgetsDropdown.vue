<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="primary" header="9.823" text="Members online">
        <template #default>
           
        </template>
        <template #footer>
          
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="info" header="9.823" text="Members online">
        <template #default>
          
        </template>
        <template #footer>
          
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="warning"
        header="9.823"
        text="Members online"
      >
        <template #default>
           
        </template>
        <template #footer>
          
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="danger"
        header="9.823"
        text="Members online"
      >
        <template #default>
           
        </template>
        <template #footer> 
        </template>
      </CWidgetDropdown>
    </CCol>
  </CRow>
</template>

<script> 

export default {
  name: 'WidgetsDropdown'
}
</script>
