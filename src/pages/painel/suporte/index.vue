<script setup>
import { ref } from 'vue'
import defaultLayout from '@/layouts/defaultLayout.vue'

const activeTab = ref('faq')
const searchQuery = ref('')
const showNewTicketDialog = ref(false)
const showTicketDetails = ref(false)
const showDocDetails = ref(false)
const selectedTicket = ref(null)
const selectedDoc = ref(null)
const newComment = ref('')

const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const newTicket = ref({
  title: '',
  priority: 'Média',
  description: ''
})

const faqs = ref([
  {
    question: 'Como posso acompanhar meu desenvolvimento profissional?',
    answer: 'Você pode acompanhar seu desenvolvimento através do dashboard principal, onde encontrará métricas de desempenho, metas alcançadas e recomendações personalizadas de desenvolvimento.'
  },
  {
    question: 'Como solicitar feedback do meu gestor?',
    answer: 'Acesse a seção de Feedback no menu principal e clique em "Solicitar Feedback". Seu gestor receberá uma notificação e poderá fornecer feedback estruturado.'
  },
  {
    question: 'Quais são as competências que devo desenvolver?',
    answer: 'As competências recomendadas são personalizadas com base em seu cargo, desempenho atual e objetivos de carreira. Consulte a seção "Desenvolvimento" para detalhes.'
  },
  {
    question: 'Como funciona o plano de desenvolvimento individual (PDI)?',
    answer: 'O PDI é um plano personalizado criado em conjunto com seu gestor. Ele inclui objetivos, ações, prazos e métricas de sucesso para seu desenvolvimento profissional.'
  },
  {
    question: 'Posso agendar uma reunião com o departamento de RH?',
    answer: 'Sim! Clique em "Agendar Reunião" na seção de Contato e escolha um horário disponível. Você receberá uma confirmação por email.'
  }
])

const ticketHeaders = ref([
  { title: 'ID', key: 'id' },
  { title: 'Título', key: 'title' },
  { title: 'Status', key: 'status' },
  { title: 'Prioridade', key: 'priority' },
  { title: 'Data de Criação', key: 'createdAt' },
  { title: 'Ações', key: 'actions', sortable: false }
])

const tickets = ref([
  {
    id: 'TKT-001',
    title: 'Dúvida sobre competências técnicas',
    status: 'Aberto',
    priority: 'Média',
    createdAt: '2024-01-15',
    description: 'Gostaria de esclarecer quais competências técnicas são prioritárias para meu desenvolvimento.',
    comments: [
      { author: 'Gestor', date: '2024-01-16', text: 'Vamos agendar uma reunião para discutir isso.' }
    ]
  },
  {
    id: 'TKT-002',
    title: 'Solicitação de treinamento em liderança',
    status: 'Em Progresso',
    priority: 'Alta',
    createdAt: '2024-01-10',
    description: 'Gostaria de participar do programa de treinamento em liderança.',
    comments: [
      { author: 'RH', date: '2024-01-11', text: 'O próximo programa começa em fevereiro.' }
    ]
  },
  {
    id: 'TKT-003',
    title: 'Feedback de desempenho',
    status: 'Resolvido',
    priority: 'Baixa',
    createdAt: '2024-01-05',
    description: 'Solicitação de feedback estruturado sobre desempenho.',
    comments: [
      { author: 'Gestor', date: '2024-01-08', text: 'Feedback enviado com sucesso.' }
    ]
  }
])

const docs = ref([
  {
    title: 'Guia de Competências',
    description: 'Conheça todas as competências esperadas para seu cargo',
    icon: 'mdi-book-open-page-variant',
    tags: ['Competências', 'Desenvolvimento'],
    content: '<h3>Competências Principais</h3><p>As competências são divididas em três categorias: Técnicas, Comportamentais e Gerenciais.</p><h4>Competências Técnicas</h4><p>Incluem conhecimentos específicos do seu cargo e ferramentas utilizadas.</p><h4>Competências Comportamentais</h4><p>Incluem comunicação, trabalho em equipe, liderança e resolução de problemas.</p>'
  },
  {
    title: 'Plano de Desenvolvimento Individual',
    description: 'Como criar e acompanhar seu PDI',
    icon: 'mdi-target',
    tags: ['PDI', 'Planejamento'],
    content: '<h3>O que é um PDI?</h3><p>Um Plano de Desenvolvimento Individual é um documento que define seus objetivos de desenvolvimento para o próximo período.</p><h4>Passos para criar um PDI</h4><ol><li>Identifique suas necessidades de desenvolvimento</li><li>Defina objetivos SMART</li><li>Escolha ações e recursos</li><li>Acompanhe regularmente</li></ol>'
  },
  {
    title: 'Processo de Feedback',
    description: 'Entenda como funciona o feedback 360 graus',
    icon: 'mdi-chat-multiple',
    tags: ['Feedback', 'Avaliação'],
    content: '<h3>Feedback 360 Graus</h3><p>O feedback 360 graus coleta informações de múltiplas perspectivas: gestor, pares e subordinados.</p><h4>Benefícios</h4><ul><li>Visão completa do seu desempenho</li><li>Identificação de pontos fortes e de melhoria</li><li>Base para plano de desenvolvimento</li></ul>'
  },
  {
    title: 'Trilhas de Aprendizado',
    description: 'Acesse cursos e treinamentos recomendados',
    icon: 'mdi-school',
    tags: ['Aprendizado', 'Treinamento'],
    content: '<h3>Trilhas de Aprendizado</h3><p>Trilhas personalizadas baseadas em seu cargo e objetivos de carreira.</p><h4>Como acessar</h4><p>Acesse o menu "Aprendizado" e escolha a trilha que melhor se alinha com seus objetivos.</p>'
  },
  {
    title: 'Métricas de Desempenho',
    description: 'Conheça os indicadores que medem seu desempenho',
    icon: 'mdi-chart-line',
    tags: ['Métricas', 'Desempenho'],
    content: '<h3>Indicadores de Desempenho</h3><p>Os indicadores são definidos em conjunto com seu gestor e acompanhados regularmente.</p><h4>Tipos de Indicadores</h4><ul><li>Quantitativos: Números e métricas</li><li>Qualitativos: Comportamentos e competências</li></ul>'
  },
  {
    title: 'Carreira e Sucessão',
    description: 'Planeje sua trajetória profissional',
    icon: 'mdi-briefcase-check',
    tags: ['Carreira', 'Planejamento'],
    content: '<h3>Planejamento de Carreira</h3><p>Defina seus objetivos de longo prazo e trabalhe com seu gestor para alcançá-los.</p><h4>Próximos Passos</h4><p>Agende uma reunião com o departamento de RH para discutir suas aspirações de carreira.</p>'
  }
])
const getStatusColor = (status) => {
  const colors = {
    'Aberto': 'blue',
    'Em Progresso': 'orange',
    'Resolvido': 'green',
    'Fechado': 'grey'
  }
  return colors[status] || 'grey'
}

const getPriorityColor = (priority) => {
  const colors = {
    'Baixa': 'green',
    'Média': 'orange',
    'Alta': 'red',
    'Crítica': 'darkred'
  }
  return colors[priority] || 'grey'
}

const submitContact = () => {
  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
  contactForm.value = { name: '', email: '', subject: '', message: '' }
}

const submitTicket = () => {
  const ticket = {
    id: `TKT-${String(tickets.value.length + 1).padStart(3, '0')}`,
    title: newTicket.value.title,
    status: 'Aberto',
    priority: newTicket.value.priority,
    createdAt: new Date().toISOString().split('T')[0],
    description: newTicket.value.description,
    comments: []
  }

  tickets.value.push(ticket)
  showNewTicketDialog.value = false
  newTicket.value = { title: '', priority: 'Média', description: '' }
  alert('Ticket criado com sucesso!')
}

const viewTicket = (ticket) => {
  selectedTicket.value = ticket
  showTicketDetails.value = true
}

const addComment = () => {
  if (newComment.value && selectedTicket.value) {
    selectedTicket.value.comments.push({
      author: 'Você',
      date: new Date().toISOString().split('T')[0],
      text: newComment.value
    })
    newComment.value = ''
  }
}

const viewDoc = (doc) => {
  selectedDoc.value = doc
  showDocDetails.value = true
}

</script>
<template>
<default-layout>
    <v-container fluid class="py-8 overflow-y-auto" style="max-height: 70vh;">
      <v-row class="mb-8">
        <v-col cols="12">
          <div>
            <h1 class="text-h3 font-weight-bold mb-2">Central de Suporte</h1>
            <p class="text-subtitle1 text-grey">Encontre respostas, abra tickets e acompanhe seu desenvolvimento
              profissional</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="mb-8">
        <v-col cols="12" sm="6" md="3">
          <v-card class="h-100 cursor-pointer" @click="activeTab = 'faq'" :color="activeTab === 'faq' ? 'primary' : ''">
            <v-card-text class="text-center py-6">
              <v-icon size="40" class="mb-2">mdi-help-circle</v-icon>
              <div class="font-weight-bold">FAQ</div>
              <div class="text-caption">Perguntas Frequentes</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="h-100 cursor-pointer" @click="activeTab = 'contact'"
            :color="activeTab === 'contact' ? 'primary' : ''">
            <v-card-text class="text-center py-6">
              <v-icon size="40" class="mb-2">mdi-email</v-icon>
              <div class="font-weight-bold">Contato</div>
              <div class="text-caption">Entre em Contato</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="h-100 cursor-pointer" @click="activeTab = 'tickets'"
            :color="activeTab === 'tickets' ? 'primary' : ''">
            <v-card-text class="text-center py-6">
              <v-icon size="40" class="mb-2">mdi-ticket</v-icon>
              <div class="font-weight-bold">Tickets</div>
              <div class="text-caption">Meus Tickets</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="h-100 cursor-pointer" @click="activeTab = 'docs'"
            :color="activeTab === 'docs' ? 'primary' : ''">
            <v-card-text class="text-center py-6">
              <v-icon size="40" class="mb-2">mdi-book</v-icon>
              <div class="font-weight-bold">Documentação</div>
              <div class="text-caption">Base de Conhecimento</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Search Bar -->
      <v-row class="mb-8">
        <v-col cols="12">
          <v-text-field v-model="searchQuery" label="Buscar na base de conhecimento..." prepend-inner-icon="mdi-magnify"
            outlined dense clearable></v-text-field>
        </v-col>
      </v-row>

      <!-- Tab Content -->
      <v-row>
        <v-col cols="12">
          <!-- FAQ Tab -->
          <div v-if="activeTab === 'faq'">
            <h2 class="text-h5 font-weight-bold mb-6">Perguntas Frequentes</h2>
            <v-expansion-panels>
              <v-expansion-panel v-for="(faq, index) in faqs" :key="index">
                <template v-slot:title>
                  <v-icon class="mr-2">mdi-help-circle-outline</v-icon>
                  {{ faq.question }}
                </template>
                <template v-slot:text>
                  <p>{{ faq.answer }}</p>
                </template>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>

          <!-- Contact Form Tab -->
          <div v-if="activeTab === 'contact'">
            <h2 class="text-h5 font-weight-bold mb-6">Formulário de Contato</h2>
            <v-card class="pa-6">
              <v-form @submit.prevent="submitContact">
                <v-row>
                  <v-col cols="12">
                    <v-select v-model="contactForm.subject" label="Assunto"
                      :items="['Dúvida sobre desenvolvimento', 'Problema técnico', 'Feedback', 'Outro']" outlined
                      required :rules="[v => !!v || 'Assunto é obrigatório']"></v-select>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-textarea v-model="contactForm.message" label="Mensagem" outlined rows="6" required
                      :rules="[v => !!v || 'Mensagem é obrigatória']"></v-textarea>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-btn type="submit" color="primary" size="large">
                      <v-icon left>mdi-send</v-icon>
                      Enviar Mensagem
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </div>

          <!-- Tickets Tab -->
          <div v-if="activeTab === 'tickets'">
            <h2 class="text-h5 font-weight-bold mb-6">Meus Tickets de Suporte</h2>
            <v-btn color="primary" class="mb-4" @click="showNewTicketDialog = true">
              <v-icon left>mdi-plus</v-icon>
              Novo Ticket
            </v-btn>

            <v-data-table :headers="ticketHeaders" :items="tickets" class="elevation-1">
              <template v-slot:item.status="{ item }">
                <v-chip :color="getStatusColor(item.status)" text-color="white">
                  {{ item.status }}
                </v-chip>
              </template>
              <template v-slot:item.priority="{ item }">
                <v-chip :color="getPriorityColor(item.priority)">
                  {{ item.priority }}
                </v-chip>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-btn icon size="small" @click="viewTicket(item)">
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </div>
          <div v-if="activeTab === 'docs'">
            <h2 class="text-h5 font-weight-bold mb-6">Base de Conhecimento</h2>
            <v-row>
              <v-col v-for="(doc, index) in docs" :key="index" cols="12" sm="6" md="4">
                <v-card class="h-100" @click="viewDoc(doc)">
                  <v-card-item>
                    <v-icon size="40" color="primary" class="mb-2">{{ doc.icon }}</v-icon>
                    <v-card-title>{{ doc.title }}</v-card-title>
                    <v-card-subtitle>{{ doc.description }}</v-card-subtitle>
                  </v-card-item>
                  <v-card-text>
                    <v-chip size="small" class="mr-2" v-for="tag in doc.tags" :key="tag">
                      {{ tag }}
                    </v-chip>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>

      <!-- New Ticket Dialog -->
      <v-dialog v-model="showNewTicketDialog" max-width="600">
        <v-card>
          <v-card-title>Criar Novo Ticket</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitTicket">
              <v-text-field v-model="newTicket.title" label="Título do Ticket" outlined required
                class="mb-4"></v-text-field>

              <v-select v-model="newTicket.priority" label="Prioridade" :items="['Baixa', 'Média', 'Alta', 'Crítica']"
                outlined class="mb-4"></v-select>

              <v-textarea v-model="newTicket.description" label="Descrição" outlined rows="4" required></v-textarea>

              <v-btn type="submit" color="primary" class="mt-4">
                Criar Ticket
              </v-btn>
              <v-btn @click="showNewTicketDialog = false" class="mt-4 ml-2">
                Cancelar
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- Ticket Details Dialog -->
      <v-dialog v-model="showTicketDetails" max-width="700">
        <v-card v-if="selectedTicket">
          <v-card-title>{{ selectedTicket.title }}</v-card-title>
          <v-card-text>
            <v-row class="mb-4">
              <v-col cols="12" sm="6">
                <strong>ID:</strong> {{ selectedTicket.id }}
              </v-col>
              <v-col cols="12" sm="6">
                <strong>Status:</strong>
                <v-chip :color="getStatusColor(selectedTicket.status)" text-color="white" size="small">
                  {{ selectedTicket.status }}
                </v-chip>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col cols="12" sm="6">
                <strong>Prioridade:</strong>
                <v-chip :color="getPriorityColor(selectedTicket.priority)" size="small">
                  {{ selectedTicket.priority }}
                </v-chip>
              </v-col>
              <v-col cols="12" sm="6">
                <strong>Data de Criação:</strong> {{ selectedTicket.createdAt }}
              </v-col>
            </v-row>

            <v-divider class="my-4"></v-divider>

            <h3 class="mb-2">Descrição</h3>
            <p>{{ selectedTicket.description }}</p>

            <v-divider class="my-4"></v-divider>

            <h3 class="mb-2">Comentários</h3>
            <v-card v-for="(comment, index) in selectedTicket.comments" :key="index" class="mb-2">
              <v-card-text>
                <strong>{{ comment.author }}</strong>
                <span class="text-caption text-grey ml-2">{{ comment.date }}</span>
                <p class="mt-2">{{ comment.text }}</p>
              </v-card-text>
            </v-card>

            <v-textarea v-model="newComment" label="Adicionar Comentário" outlined rows="3" class="mt-4"></v-textarea>

            <v-btn color="primary" class="mt-4" @click="addComment">
              Adicionar Comentário
            </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="showTicketDetails = false">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Document Details Dialog -->
      <v-dialog v-model="showDocDetails" max-width="800">
        <v-card v-if="selectedDoc">
          <v-card-title>{{ selectedDoc.title }}</v-card-title>
          <v-card-text>
            <p class="text-subtitle2 text-grey mb-4">{{ selectedDoc.description }}</p>
            <v-divider class="mb-4"></v-divider>
            <div v-html="selectedDoc.content"></div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="showDocDetails = false">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </default-layout>
</template>
<style scoped>
.cursor-pointer {
  cursor: pointer;
  transition: transform 0.2s;
}

.cursor-pointer:hover {
  transform: translateY(-4px);
}
</style>
