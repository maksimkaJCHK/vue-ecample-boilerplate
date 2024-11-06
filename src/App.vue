<template>
  <component :is="nameComponent" />
</template>

<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  import LayAuth from '@/layouts/LayAuth.vue';
  import LayBase from '@/layouts/LayBase.vue';

  const route = useRoute();

  const nameComponent = computed(() => {
    if (route.meta.template === 'base') return LayBase;
    if (route.meta.template === 'auth') return LayAuth;

    return LayBase;
  });
</script>

<style>

</style>
