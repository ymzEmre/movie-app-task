
<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const searchMovieName = router.currentRoute.value.query.name

const searchMovieList = ref();

const totalResults = ref();

const searchMovie2 = (e) => {
  axios.get(`http://www.omdbapi.com/?apikey=8321507c&s=${searchMovieName}&page=${e}`).then(response => {
    searchMovieList.value = response.data.Search;
    totalResults.value = Math.floor(response.data.totalResults / 10);
  }).catch(error => {
    console.log(error);
  });
};


const getMovieID = (e) => {
  console.log(e)
  router.push({
    name: "Detail",
    query: {
      name: e
    },
  });
};

searchMovie2()

</script>



<template>
<h3 v-if="!searchMovieList" class="text-white text-5xl flex justify-center items-center">Movies not found</h3>

<div v-if="searchMovieList">
  <h3 class="text-white text-5xl md:ml-10 mt-10 text-center md:text-start">Result for {{searchMovieName}}</h3>
    <div class="grid grid-cols-1 place-items-center gap-8 p-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
  <div v-for="movie in searchMovieList" :key="movie.imdbID" @click="getMovieID(movie.imdbID)">
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

  <div class="flex justify-center mb-10">
  <nav aria-label="Page navigation example">
    <ul class="flex list-style-none">
      <li class="page-item disabled"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
          href="#" tabindex="-1" aria-disabled="true">Previous</a></li>
      <li class="page-item cursor-pointer" v-for="item in totalResults" :key="item.id"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:bg-gray-900 focus:shadow-none"
           @click="searchMovie2(item)">{{item}}</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">Next</a></li>
    </ul>
  </nav>
</div>
</div>

</template>

<style>
  body {
    background-color: #000;
  }
</style>