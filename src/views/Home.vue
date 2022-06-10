<script setup lang="ts">
import {  ref } from 'vue';

import Movie from '../components/Movie.vue'

import axios from "axios";





const homePageMoviesList = ref();
const totalResults = ref();

const homePageMovies = (pageNumber) => {
  axios.get(`http://www.omdbapi.com/?apikey=8321507c&s=all&y=2022&page=${pageNumber}`)
    .then(response => {
      homePageMoviesList.value = response.data.Search;
      totalResults.value = Math.floor(response.data.totalResults / 10);
      window.scrollTo(0, 0);
    })
    .catch(error => {
      console.log(error);
    });
}


homePageMovies()
</script>

<template>
  <Movie :homePageMoviesList="homePageMoviesList" />


<div class="flex justify-center">
  <nav aria-label="Page navigation example">
    <ul class="flex list-style-none">
      <li class="page-item disabled"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
          href="#" tabindex="-1" aria-disabled="true">Previous</a></li>
      <li class="page-item cursor-pointer" v-for="item in totalResults" :key="item.id"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:bg-gray-900 focus:shadow-none"
           @click="homePageMovies(item)">{{item}}</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">Next</a></li>
    </ul>
  </nav>
</div>
</template>


<style>
  body {
    background-color: #000;
  }
</style>