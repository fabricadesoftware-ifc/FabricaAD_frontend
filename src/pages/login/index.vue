<script setup>
import UndergroundImg from '@/assets/fundologin.png'
import Logo from '@/assets/Logo.png'
import AuthMenu from '@/components/auth/AuthMenu.vue';
import gsap from 'gsap'
import { login } from '@/stores/loginTest';
import { ref, onMounted } from 'vue';
import { useDisplay } from 'vuetify';
const box = ref(null)
const words = ref(null)
const { width } = useDisplay()

onMounted(() => {
  const tl = gsap.timeline()
  
  if (width.value < 1150) {
    tl.from(words.value, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    }, 0)

    tl.to(words.value, {
      y:  "-35vh" ,
      duration: 1.5,
      ease: "power2.out"
    }, 1)

    tl.from(box.value.$el, {
      y: 500,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    }, 1)
  }
  else {
    tl.from(words.value, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    }, 0)

    tl.to(words.value, {
      x: -300,
      duration: 1.5,
      ease: "power2.out"
    }, 1)

    tl.from(box.value.$el, {
      x: 500,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    }, 1)
  }

})
</script>
<template>
  <div class="h-screen d-flex">
    <div class="d-flex flex-column justify-center align-center  w-100 h-100  text-white"
      :style="`background-image: url(${UndergroundImg}); background-size: cover; background-position: center;`">
      <div class="d-flex flex-column w-75 justify-end align-end text-center pa-5" ref="words">
        <div class="d-flex justify-center  w-100 align-center">
          <h1 class="text-center me-10">
            <span class="font-weight-light">Avaliação de</span> <b>desempenho</b>
          </h1>
        </div>
        <div class="d-flex" style="width: 30%">
          <img :src="Logo" alt="Logo" style="width: 75px; height: auto;" />
        </div>
      </div>
    </div>
    <AuthMenu ref="box" @login="login"/>
  </div>
</template>
