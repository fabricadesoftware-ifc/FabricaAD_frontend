<template>
  <defaultLayout>
    <v-app class="overflow-y-auto" style="max-height: 70vh">
    <v-app-bar color="primary" dark prominent>
      <v-app-bar-title>{{ appTitle }}</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs v-model="activeTab" align-tabs="start" class="bg-primary">
          <v-tab value="introducao">Introdução</v-tab>
          <v-tab value="objetivos">Objetivos</v-tab>
          <v-tab value="metodologias">Metodologias</v-tab>
          <v-tab value="metricas">Métricas</v-tab>
          <v-tab value="relatorios">Relatórios</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main class="bg-grey-lighten-3">
      <v-container class="py-8 px-4">
        <v-window v-model="activeTab" class="mt-4">
          <v-window-item value="introducao">
            <v-card class="mb-8" elevation="2">
              <v-card-title class="d-flex align-center">
                <v-icon color="primary" class="mr-3">mdi-information-outline</v-icon>
                Introdução
              </v-card-title>
              <v-card-text>
                <p class="text-body1 mb-4">
                  A análise de desenvolvimento de funcionários é um processo estratégico fundamental para organizações que buscam maximizar o potencial de suas equipes. Este documento apresenta metodologias, ferramentas e melhores práticas para avaliar, acompanhar e promover o crescimento profissional dos colaboradores de forma estruturada e eficaz.
                </p>
                <p class="text-body1">
                  Através de uma abordagem sistemática, é possível identificar lacunas de competências, definir planos de desenvolvimento personalizados e medir o progresso ao longo do tempo, garantindo alinhamento entre os objetivos individuais e organizacionais.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="objetivos">
            <v-card class="mb-8" elevation="2">
              <v-card-title class="d-flex align-center">
                <v-icon color="success" class="mr-3">mdi-target</v-icon>
                Objetivos
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card class="mb-4" variant="outlined" color="success-lighten-5">
                      <v-card-title class="text-h6">
                        <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                        Identificar Competências
                      </v-card-title>
                      <v-card-text>
                        Mapear habilidades técnicas e comportamentais atuais de cada colaborador para criar um perfil completo de competências.
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card class="mb-4" variant="outlined" color="info-lighten-5">
                      <v-card-title class="text-h6">
                        <v-icon color="info" class="mr-2">mdi-pencil-box</v-icon>
                        Planejar Desenvolvimento
                      </v-card-title>
                      <v-card-text>
                        Criar planos de ação personalizados que considerem aspirações profissionais e necessidades organizacionais.
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card class="mb-4" variant="outlined" color="warning-lighten-5">
                      <v-card-title class="text-h6">
                        <v-icon color="warning" class="mr-2">mdi-chart-line</v-icon>
                        Acompanhar Progresso
                      </v-card-title>
                      <v-card-text>
                        Monitorar continuamente a evolução dos colaboradores através de indicadores objetivos e feedback estruturado.
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card class="mb-4" variant="outlined" color="error-lighten-5">
                      <v-card-title class="text-h6">
                        <v-icon color="error" class="mr-2">mdi-heart</v-icon>
                        Promover Engajamento
                      </v-card-title>
                      <v-card-text>
                        Aumentar a motivação e retenção através de oportunidades claras de crescimento e reconhecimento.
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-window-item>

          <!-- Metodologias Section -->
          <v-window-item value="metodologias">
            <v-card class="mb-8" elevation="2">
              <v-card-title class="d-flex align-center">
                <v-icon color="purple" class="mr-3">mdi-book-open-variant</v-icon>
                Metodologias
              </v-card-title>
              <v-card-text>
                <v-expansion-panels>
                  <v-expansion-panel>
                    <template v-slot:title>
                      <v-icon color="purple" class="mr-2">mdi-rotate-360</v-icon>
                      <span class="font-weight-bold">Avaliação 360 Graus</span>
                    </template>
                    <v-expansion-panel-text>
                      <p class="mb-3">
                        Metodologia que coleta feedback de múltiplas perspectivas: superiores, pares, subordinados e autoavaliação. Proporciona uma visão holística do desempenho e comportamento do colaborador.
                      </p>
                      <v-alert type="info" variant="tonal" class="mt-3">
                        <strong>Aplicação:</strong> Ciclos semestrais ou anuais com questionários estruturados focados em competências-chave.
                      </v-alert>
                    </v-expansion-panel-text>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <template v-slot:title>
                      <v-icon color="blue" class="mr-2">mdi-flag-checkered</v-icon>
                      <span class="font-weight-bold">OKRs (Objectives and Key Results)</span>
                    </template>
                    <v-expansion-panel-text>
                      <p class="mb-3">
                        Framework de definição de objetivos que conecta metas individuais aos objetivos estratégicos da organização. Cada objetivo possui resultados-chave mensuráveis que indicam progresso.
                      </p>
                      <v-alert type="info" variant="tonal" class="mt-3">
                        <strong>Aplicação:</strong> Definição trimestral com revisões mensais para ajustes e acompanhamento de progresso.
                      </v-alert>
                    </v-expansion-panel-text>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <template v-slot:title>
                      <v-icon color="green" class="mr-2">mdi-chart-line</v-icon>
                      <span class="font-weight-bold">PDI (Plano de Desenvolvimento Individual)</span>
                    </template>
                    <v-expansion-panel-text>
                      <p class="mb-3">
                        Documento estruturado que mapeia competências a desenvolver, ações específicas, recursos necessários e prazos. Criado colaborativamente entre gestor e colaborador.
                      </p>
                      <v-alert type="info" variant="tonal" class="mt-3">
                        <strong>Aplicação:</strong> Revisão anual com acompanhamento trimestral e ajustes conforme necessário.
                      </v-alert>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-card-text>
            </v-card>
          </v-window-item>

          <!-- Métricas Section -->
          <v-window-item value="metricas">
            <v-card class="mb-8" elevation="2">
              <v-card-title class="d-flex align-center">
                <v-icon color="orange" class="mr-3">mdi-chart-bar</v-icon>
                Métricas e Indicadores
              </v-card-title>
              <v-card-text>
                <v-table class="mb-4">
                  <thead>
                    <tr>
                      <th class="text-left">Indicador</th>
                      <th class="text-left">Descrição</th>
                      <th class="text-left">Frequência</th>
                      <th class="text-left">Meta</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-weight-bold">Taxa de Conclusão de PDI</td>
                      <td>Percentual de ações do PDI concluídas no prazo</td>
                      <td>Trimestral</td>
                      <td>
                        <v-chip color="success" text-color="white" size="small">≥ 80%</v-chip>
                      </td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Evolução de Competências</td>
                      <td>Variação positiva no score de competências-chave</td>
                      <td>Semestral</td>
                      <td>
                        <v-chip color="success" text-color="white" size="small">+15%</v-chip>
                      </td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Engajamento em Treinamentos</td>
                      <td>Participação ativa em programas de capacitação</td>
                      <td>Mensal</td>
                      <td>
                        <v-chip color="success" text-color="white" size="small">≥ 90%</v-chip>
                      </td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Índice de Satisfação</td>
                      <td>Avaliação do colaborador sobre suporte ao desenvolvimento</td>
                      <td>Semestral</td>
                      <td>
                        <v-chip color="success" text-color="white" size="small">≥ 4.0/5.0</v-chip>
                      </td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Taxa de Promoção Interna</td>
                      <td>Percentual de posições preenchidas internamente</td>
                      <td>Anual</td>
                      <td>
                        <v-chip color="success" text-color="white" size="small">≥ 60%</v-chip>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <v-alert type="info" variant="tonal">
                  <v-icon class="mr-2">mdi-lightbulb-on-outline</v-icon>
                  <strong>Dica:</strong> Combine indicadores quantitativos com feedback qualitativo para obter uma visão completa do desenvolvimento dos colaboradores.
                </v-alert>
              </v-card-text>
            </v-card>
          </v-window-item>

          <!-- Relatórios Section -->
          <v-window-item value="relatorios">
            <v-card class="mb-8" elevation="2">
              <v-card-title class="d-flex align-center">
                <v-icon color="red" class="mr-3">mdi-file-document-outline</v-icon>
                Relatórios e Documentação
              </v-card-title>
              <v-card-text>
                <p class="text-body1 mb-6">
                  A documentação adequada é essencial para garantir transparência, continuidade e tomada de decisões baseada em dados. Os seguintes relatórios devem ser mantidos e atualizados regularmente:
                </p>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card variant="outlined" class="mb-4">
                      <v-card-title class="text-h6 d-flex align-center">
                        <v-icon color="blue" class="mr-2">mdi-account-box</v-icon>
                        Perfil de Competências
                      </v-card-title>
                      <v-card-subtitle>Atualização: Semestral</v-card-subtitle>
                      <v-card-text>
                        Mapeamento detalhado das competências técnicas e comportamentais de cada colaborador, incluindo níveis de proficiência e gaps identificados.
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card variant="outlined" class="mb-4">
                      <v-card-title class="text-h6 d-flex align-center">
                        <v-icon color="green" class="mr-2">mdi-clipboard-check</v-icon>
                        Relatório de Progresso
                      </v-card-title>
                      <v-card-subtitle>Atualização: Trimestral</v-card-subtitle>
                      <v-card-text>
                        Acompanhamento das ações de desenvolvimento em andamento, marcos alcançados e ajustes necessários nos planos individuais.
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card variant="outlined" class="mb-4">
                      <v-card-title class="text-h6 d-flex align-center">
                        <v-icon color="purple" class="mr-2">mdi-chart-timeline-variant</v-icon>
                        Dashboard Analítico
                      </v-card-title>
                      <v-card-subtitle>Atualização: Mensal</v-card-subtitle>
                      <v-card-text>
                        Visualização consolidada de métricas-chave por departamento, incluindo tendências, comparativos e alertas de desvios.
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card variant="outlined" class="mb-4">
                      <v-card-title class="text-h6 d-flex align-center">
                        <v-icon color="orange" class="mr-2">mdi-school</v-icon>
                        Histórico de Capacitação
                      </v-card-title>
                      <v-card-subtitle>Atualização: Contínua</v-card-subtitle>
                      <v-card-text>
                        Registro completo de treinamentos, certificações, workshops e outras atividades de desenvolvimento realizadas por cada colaborador.
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-alert type="warning" variant="tonal" class="mt-4">
                  <v-icon class="mr-2">mdi-alert-circle-outline</v-icon>
                  <strong>Importante:</strong> Todos os relatórios devem respeitar a LGPD e políticas internas de privacidade, garantindo acesso restrito e confidencialidade das informações pessoais.
                </v-alert>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>

        <!-- Call to Action -->
        <v-card color="primary" dark class="mb-8" elevation="4">
          <v-card-title class="text-h4 text-center">Pronto para Implementar?</v-card-title>
          <v-card-text class="text-center text-body1 py-6">
            A análise de desenvolvimento de funcionários é um investimento estratégico que gera resultados mensuráveis em produtividade, engajamento e retenção de talentos.
          </v-card-text>
          <v-card-actions class="justify-center pb-6">
            <v-btn color="white" text-color="primary" size="large" variant="elevated">
              <v-icon class="mr-2">mdi-rocket-launch</v-icon>
              Começar Agora
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</defaultLayout>
</template>
<script setup>
import { ref } from 'vue'
import defaultLayout from '@/layouts/defaultLayout.vue';
const appTitle = ref('Documentação - Análise de Desenvolvimento de Funcionários')
const activeTab = ref('introducao')
</script>
<style scoped>
:deep(.v-expansion-panel-title) {
  font-weight: 500;
}

:deep(.v-table) {
  background-color: white;
}
</style>
