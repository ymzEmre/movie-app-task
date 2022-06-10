<script lang="ts" setup>
  import { ref } from '@vue/reactivity';
  import { useRouter } from "vue-router";
  const router = useRouter();


  const search = ref();

  const goToHome = () => {
    router.push({
      name: "Home",
    });
  };
</script>


<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-3 py-5 bg-transparent backdrop-blur-lg sticky top-0 z-50">
    <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
      <span class="text-3xl font-black text-red-800 cursor-pointer" @click="goToHome()">MOVIES</span>
      <div class="mb-3 xl:w-96">
        <div class="input-group relative flex items-stretch w-full">
          <input type="search" v-model="search" class="min-w-0  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search movie" aria-label="Search" aria-describedby="button-addon3">
          <button type="button" class="px-6 py-2.5 bg-gray-900 text-white ml-1 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" @click="$emit('search-movie', search)">Search</button>
        </div>
      </div>
    </div>

  </nav>
</template>