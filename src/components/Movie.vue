<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();



defineProps({
  homePageMoviesList: {
    type: Array,
    default: () => [],
  }
});

const getMovieID = (e) => {
  router.push({
    name: "Detail",
    query: {
      name: e
    },
  });
}

</script>
<template>
<h3 class="text-white text-5xl ml-10 mt-10">Movies of 2022</h3>
    <div class="grid grid-cols-5 gap-8 p-9">
  <div v-for="movie in homePageMoviesList" :key="movie.imdbID" @click="getMovieID(movie.imdbID)"  >
  <div class="rounded-lg bg-gray-900 max-w-sm hover:scale-110 duration-500 cursor-pointer">
    <a>
      <img class="rounded-t-lg w-96 h-80 overflow-hidden contrast-125" :src="movie.Poster" alt=""/>
    </a>
    <div class="p-3">
      <h5 class=" text-white text-base font-medium mb-2">{{movie.Title}}</h5>
      <p class=" text-white text-base mb-4">
        {{movie.Year}}
      </p>
    </div>
  </div>
  </div>
  </div>

</template>