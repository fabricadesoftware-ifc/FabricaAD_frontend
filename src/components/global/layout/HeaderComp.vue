<script setup>
  import MenuLeftIcon from '@/components/icons/MenuLeftIcon.vue';
  import NotificationIcon from '@/components/icons/NotificationIcon.vue';
  import SearchIcon from '@/components/icons/SearchIcon.vue';
  import LogoMob from '@/assets/LogoMob.png';
</script>

<template>
  <header
    class="bg-white my-5 mx-5 rounded-xl"
    style="box-shadow: 0px 4px 10px rgba(226, 233, 246, 0.1)"
  >

    <!--HEADER DESK-->
    <div class="d-none d-sm-flex justify-space-between align-center px-10 py-4">
      <MenuLeftIcon class="cursor-pointer" />
      <div class="d-flex align-center ga-4">
        <NotificationIcon class="cursor-pointer mr-4" />
        <img
          class="rounded-circle cursor-pointer"
          width="40"
          height="40"
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          alt="Avatar teste"
        />
        <p class="d-none d-sm-block font-weight-bold cursor-pointer">Carol Nyemer</p>
      </div>
    </div>

    <!--HEADER MOB-->

    <div class="d-flex d-sm-none align-center px-8 py-4 justify-space-between">
      <MenuLeftIcon />
      <NotificationIcon />
      <img :src="LogoMob" alt="Logo" />
      <SearchIcon />
      <img
        class="rounded-circle"
        width="30"
        height="30"
        src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
        alt="Avatar teste"
      />
    </div>
  </header>

</template>
