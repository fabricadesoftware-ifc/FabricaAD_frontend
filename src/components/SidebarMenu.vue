<template>
  <v-navigation-drawer app class="pa-4" color="white" permanent width="260">
    <!-- Logo / Título -->
    <div class="logo-container">
      <span class="logo-panel">PAINEL</span>
      <span class="logo-rh">RH</span>
    </div>

    <!-- GERENCIAMENTO -->
    <div class="menu-section">
      <div class="menu-subheader">GERENCIAMENTO</div>
      <div class="menu-item">
        <v-icon class="menu-icon">mdi-account-group</v-icon>
        <span class="font-weight-bold">Funcionários</span>
      </div>
      <div class="menu-item">
        <v-icon class="menu-icon">mdi-office-building</v-icon>
        <span class="font-weight-bold">Departamentos</span>
      </div>
      <div class="menu-item">
        <v-icon class="menu-icon">mdi-briefcase</v-icon>
        <span class="font-weight-bold">Cargos</span>
      </div>
    </div>

    <!-- AVALIAÇÕES -->
    <div class="menu-section">
      <div class="menu-subheader">AVALIAÇÕES</div>
      <div class="menu-item">
        <v-icon class="menu-icon">mdi-file-document-check</v-icon>
        <span class="font-weight-bold">Ativas</span>
      </div>
      <div class="menu-item">
        <v-icon class="menu-icon">mdi-history</v-icon>
        <span class="font-weight-bold">Histórico</span>
      </div>
      <div class="menu-item">
        <v-icon class="menu-icon">mdi-lightbulb-outline</v-icon>
        <span class="font-weight-bold">Tópicos</span>
      </div>
    </div>

    <!-- RELATÓRIOS -->
    <div class="menu-section">
      <div class="menu-subheader">RELATÓRIOS</div>
      <div class="menu-item">
        <v-icon class="menu-icon">mdi-chart-line</v-icon>
        <span class="font-weight-bold">Estatísticas</span>
      </div>
      <div class="menu-item">
        <v-icon class="menu-icon">mdi-scale-balance</v-icon>
        <span class="font-weight-bold">Comparativos</span>
      </div>
    </div>

    <!-- AJUDA -->
    <div class="menu-section">
      <div class="menu-subheader">AJUDA</div>
      <div class="menu-item">
        <v-icon class="menu-icon">mdi-file-document-outline</v-icon>
        <span class="font-weight-bold">Documentação</span>
      </div>
      <div class="menu-item">
        <v-icon class="menu-icon">mdi-lifebuoy</v-icon>
        <span class="font-weight-bold">Suporte</span>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
// nada específico por enquanto
</script>

<style scoped>
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1;
  margin-bottom: 2rem;
}

/* PAINEL */
.logo-panel {
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 800;
  color: #d3d3d3;
  letter-spacing: 2px;
}

/* RH */
.logo-rh {
  font-size: 3rem;
  font-style: italic;
  font-weight: 900;
  background: linear-gradient(to bottom, #555, #000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  letter-spacing: 1px;
}

/* Menu customizado */
.menu-section {
  margin-bottom: 1.5rem;
}

.menu-subheader {
  color: #888;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0.2rem;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s;
}

.menu-item:hover {
  background: #f5f5f5;
}

.menu-icon {
  color: #000;
  font-size: 1.5rem;
  margin-right: 1rem;
}

.font-weight-bold {
  font-weight: 700;
}
</style>
