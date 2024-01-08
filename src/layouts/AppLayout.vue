<template>
  <a-layout style="min-height: 100vh">
    <app-sider></app-sider>
    <a-layout>
      <app-header></app-header>
      <a-layout-content style="margin: 0 16px">
        <app-bread-crumb></app-bread-crumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <app-footer></app-footer>
    </a-layout>
  </a-layout>
</template>
<script setup>
    import AppSider from './component/AppSider.vue'
    import AppHeader from './component/AppHeader.vue'
    import AppBreadCrumb from './component/AppBreadCrumb.vue'
    import AppFooter from './component/AppFooter.vue'
</script>
<style scoped>

</style>