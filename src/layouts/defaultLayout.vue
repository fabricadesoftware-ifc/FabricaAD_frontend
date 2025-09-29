<script setup>
  import SidebarMenu from '@/components/SidebarMenu.vue';
  import GlobalHeader from '@/components/global/GlobalHeader.vue';
</script>
<template>
  <v-main class="" style="display: flex; padding: 20px; gap: 20px; background-color: #F0F5F9;">
    <div style="width: 380px;" class="default-item" >
      <sidebar-menu/>
    </div>
    <div style="gap: 20px; display: flex; flex-direction: column; width: 100%;">
      <global-header :is-user="true" class="default-item"/>
      <global-header class="default-item"/>
      <div style="height: 100%;" class="default-item pa-8" >
        <slot>
        </slot>
      </div>
    </div>
  </v-main>
</template>
<style scoped>
.default-item{
  background-color: white;
  box-shadow: 0px 1px 5px 1px #E2E9F6;
  border-radius: 15px;
}
</style>
