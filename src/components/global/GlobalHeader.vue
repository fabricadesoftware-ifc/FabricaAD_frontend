<script setup>
  import UserHeader from '../header/UserHeader.vue';
  import PathHeader from '../header/PathHeader.vue';
  defineProps({
    isUser: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
      default: () => {},
    },
  })
</script>
<template>
<div>
  <UserHeader  v-if="isUser"/>
  <PathHeader  v-else/>
</div>
</template>
