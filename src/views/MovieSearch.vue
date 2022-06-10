
<script lang="ts" setup>
import { ref } from 'vue';
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

searchMovie2()
</script>



<template>
  <h3 class="text-white text-5xl ml-10 mt-10">result for {{searchMovieName}}</h3>
    <div class="grid grid-cols-5 gap-8 p-9">
  <div v-for="movie in searchMovieList" :key="movie.imdbID">
  <div class="rounded-lg bg-gray-900 max-w-sm hover:scale-110 duration-500 cursor-pointer">
    <a href="#!">
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

  <div class="flex justify-center">
  <nav aria-label="Page navigation example">
    <ul class="flex list-style-none">
      <li class="page-item disabled"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
          href="#" tabindex="-1" aria-disabled="true">Previous</a></li>
      <li class="page-item" v-for="item in totalResults" :key="item.id"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:bg-gray-900 focus:shadow-none"
           @click="searchMovie2(item)">{{item}}</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">Next</a></li>
    </ul>
  </nav>
</div>
</template>