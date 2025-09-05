<script setup>
  import menuItems from '@/utils/menu/infomenu';
  import ListItemMenu from './layout/ListItemMenu.vue';
</script>
<template>
  <div class="pa-6">
    <!-- Logo / Título -->
    <div class="logo-container">
      <span class="logo-panel">PAINEL</span> <span class="logo-rh">RH</span>
    </div>
    <!-- GERENCIAMENTO -->
    <v-list density="comfortable">
      <ListItemMenu :arr="menuItems" :subheader-indexes="[0, 4, 8, 11]" /> 
    </v-list>
  </div>
</template>
<style scoped>
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1;
  margin-bottom: 2rem; /* espaço abaixo do logo */
} /* PAINEL */
.logo-panel {
  font-size: 1.5rem; /* menor que o RH */
  font-style: italic; /* itálico */
  font-weight: 800; /* bem forte */
  color: #d3d3d3; /* cinza claro */
  letter-spacing: 2px; /* espaçamento */
} /* RH */
.logo-rh {
  font-size: 3.5rem; /* bem grande */
  font-style: italic; /* itálico */
  font-weight: 900; /* bem negrito */
  background: linear-gradient(to bottom, #000, #555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  letter-spacing: 1px;
}

</style>
