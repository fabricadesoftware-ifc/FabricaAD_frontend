// ...existing code...
<script setup>
import router from '@/router'
import { ref } from 'vue'

const recursos = [
  {
    titulo: 'Acompanhamento de Desempenho',
    descricao: 'Monitore o progresso dos funcionários ao longo do tempo.',
    icon: 'mdi-chart-line'
  },
  {
    titulo: 'Avaliações Personalizadas',
    descricao: 'Crie avaliações adaptadas às necessidades individuais.',
    icon: 'mdi-account-check'
  },
  {
    titulo: 'Feedback Contínuo',
    descricao: 'Facilite a comunicação entre gestores e colaboradores.',
    icon: 'mdi-message-reply-text'
  },
  {
    titulo: 'Planos de Desenvolvimento',
    descricao: 'Elabore planos de ação para o crescimento profissional.',
    icon: 'mdi-clipboard-list'
  },
  {
    titulo: 'Relatórios Detalhados',
    descricao: 'Gere relatórios para análise de desempenho e progresso.',
    icon: 'mdi-file-chart'
  }
]

const beneficios = [
  {
    titulo: 'Melhoria do Desempenho',
    descricao: 'Identifique áreas de melhoria e potencialize habilidades.'
  },
  {
    titulo: 'Engajamento',
    descricao: 'Promova um ambiente de trabalho mais motivador.'
  },
  {
    titulo: 'Crescimento Profissional',
    descricao: 'Apoie o desenvolvimento contínuo dos colaboradores.'
  },
  {
    titulo: 'Decisões Informadas',
    descricao: 'Use dados para decisões estratégicas de RH.'
  }
]
</script>
<template>
  <VMain class="overflow-y-auto">
    <VContainer >
      <v-row align="center" class="hero pa-8 rounded-lg mb-12">
        <v-col cols="12" md="6">
          <h1 class="display-1 font-weight-bold mb-4 text-primary">Desenvolva talentos. Potencialize resultados.</h1>
          <p class="subtitle-1 mb-6 text--secondary">
            Plataforma completa para acompanhar, avaliar e desenvolver colaboradores — feedbacks, metas, planos e
            relatórios em um só lugar.
          </p>
          <div class="d-flex flex-wrap gap-4">
            <v-btn color="primary" large @click="router.push('/painel/funcionarios/')">Acessar Plataforma</v-btn>
            <v-btn variant="outlined" large color="primary" @click="router.push('/contato')">Solicitar Demo</v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="text-center">
          <v-img max-width="320" class="mx-auto" alt="Ilustração de desempenho" />
        </v-col>
      </v-row>

      <v-row class="mb-12">
        <v-col cols="12">
          <h2 class="text-h5 font-weight-medium mb-6 text-primary">Recursos Principais</h2>
        </v-col>

        <v-col v-for="(r, i) in recursos" :key="i" cols="12" sm="6" md="4">
          <v-card class="pa-4 d-flex ga-2" elevation="2" hover>
            <v-row no-gutters align="center" class="d-flex ga-5">
              <v-col cols="auto">
                <v-avatar size="44" color="blue lighten-4">
                  <v-icon color="blue darken-2">{{ r.icon }}</v-icon>
                </v-avatar>
              </v-col>
              <v-col>
                <div class="font-weight-medium text-body-1 mb-1">{{ r.titulo }}</div>
                <div class="text-body-2 text--secondary">{{ r.descricao }}</div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mb-12">
        <v-col cols="12" md="7">
          <h2 class="text-h6 font-weight-medium mb-4 text-primary">Por que usar nossa plataforma?</h2>
          <v-list dense>
            <v-list-item v-for="(b, i) in beneficios" class="pa-3" :key="i">
              <div class="d-flex align-center ga-5">
              <v-list-item-icon><v-icon color="green darken-2">mdi-check-circle</v-icon></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="font-weight-medium">{{ b.titulo }}</v-list-item-title>
                <v-list-item-subtitle class="text-body-2">{{ b.descricao }}</v-list-item-subtitle>
              </v-list-item-content>
              </div>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </VContainer>
  </VMain>
</template>
<style scoped>
.hero {
  background: linear-gradient(90deg, rgba(227, 241, 255, 1) 0%, rgba(247, 250, 255, 1) 100%);
  box-shadow: 0 8px 24px rgba(14, 30, 58, 0.06);
}
</style>
