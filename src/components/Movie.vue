<script setup>
import { defineProps } from "vue";

defineProps({
  homePageMoviesList: {
    type: Array,
    default: () => [],
  },
});


</script>

<template>
<h3 class="text-white text-xl">Movies of 2022</h3>
    <div class="grid grid-cols-5 gap-4 p-5">
  <div v-for="movie in homePageMoviesList" :key="movie.imdbID">
  <div class="rounded-lg shadow-lg bg-zinc-800 max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg w-96 h-80" :src="movie.Poster" alt=""/>
    </a>
    <div class="p-3">
      <h5 class="text-gray-900 text-white text-base font-medium mb-2">{{movie.Title}}</h5>
      <p class="text-gray-700 text-white text-base mb-4">
        {{movie.Year}}
      </p>
    </div>
  </div>
  </div>
  </div>

</template>