<script lang="ts" setup>
  import { ref } from '@vue/reactivity';

  const search = ref();


</script>


<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <input type="text" placeholder="search" v-model="search">
    <button type="button" class="" @click="$emit('search-movie', search)">Button</button>
  </nav>
</template>