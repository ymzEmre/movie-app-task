<script lang="ts" setup>
  import { ref } from '@vue/reactivity';
  import { useRouter } from "vue-router";

  const router = useRouter();
  
  const searchValue = ref<string | number>();

  const goToHome = () :void => {
    router.push({
      name: "HomePage",
    });
  };
</script>

<template>
  <nav class="flex bg-white border-gray-200 py-3 md:py-6 bg-transparent backdrop-blur-lg sticky top-0 z-50">
    <div class="container-fluid w-full flex flex-wrap flex-col md:flex-row items-center justify-center md:justify-between px-8">
      <span class="text-4xl font-black text-red-800 cursor-pointer" @click="goToHome()">MOVIES</span>
      <div class="mb-3 xl:w-96">
        <div class="input-group relative flex items-stretch md:ml-24">
          <input type="search" v-model="searchValue" class="min-w-0 w-full px-4 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding rounded transition ease-in-out m-0 focus:bg-gray-700 focus:outline-none" placeholder="Search movie" aria-label="Search" aria-describedby="button-addon3">
          <button  @click="$emit('search-movie', searchValue)" type="button" class="px-6 py-2.5 bg-gray-900 text-white ml-1 font-medium text-xs leading-tight rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Search</button>
        </div>
      </div>
    </div>
  </nav>
</template>