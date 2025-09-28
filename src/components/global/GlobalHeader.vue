<script setup>
  import UserHeader from '../header/UserHeader.vue';
  import PathHeader from '../header/PathHeader.vue';
  const props = defineProps({
    isUser: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
      default: () => {},
    },
  })
  onMounted(() => {
    console.log(props.user)
  })
</script>
<template>
<div>
  <UserHeader @closemenu="$emit('closemenu')" :username="`${props.user.first_name + '  ' + props.user.last_name}`"  v-if="isUser"/>
  <PathHeader  v-else/>
</div>
</template>
