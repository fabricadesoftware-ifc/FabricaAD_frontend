<template>
  <v-main class="" style="display: flex; padding: 20px; gap: 20px; background-color: #F0F5F9;">
    <div style="width: 380px;" class="default-item" >
      Menu
    </div>
    <div style="gap: 20px; display: flex; flex-direction: column; width: 100%;">
      <div style="height: 75px;" class="default-item">Header</div>
      <div style="height: 60px;" class="default-item">Path</div>
      <div style="height: 100%;" class="default-item">
        <slot>
        </slot>
    </div>
    </div>
  </v-main>
</template>

<script setup>
</script>

<style scoped>
.default-item{
  background-color: white;
  box-shadow: 0px 1px 5px 1px #E2E9F6;
  border-radius: 15px;
}
</style>
