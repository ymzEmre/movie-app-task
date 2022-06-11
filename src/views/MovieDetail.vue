<script lang="ts" setup>
import {  reactive, ref } from 'vue';
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const searchMovieID = router.currentRoute.value.query.name


let movieDetail = reactive({
  movie: {}
})
  

 const movieDetailUrl = async () => {
 await axios.get(`http://www.omdbapi.com/?apikey=8321507c&i=${searchMovieID}`).then(response => {
    movieDetail.movie = response.data;

    // movieDetail.movie = JSON.stringify(movieDetail.movie)

    // console.log(Object.values(movieDetail.movie));
    // console.log(movieDetail.movie);
    // console.log(JSON.stringify(movieDetail.movie));
  }).catch(error => {
    console.log(error);
  });
};


movieDetailUrl();
</script>

<template>
<div class="grid grid-flow-col ml-8 mt-8" v-for="movie in movieDetail" :key="movie">
  <div class="relative">
    <img class="rounded-t-lg w-96 h-auto contrast-125" :src="movie.Poster" alt="">
    <span class="absolute bottom-2 right-2 bg-yellow-400 text-3xl rounded-full p-4 leading-normal font-black">{{movie.imdbRating}}</span>
    <span class="absolute bottom-2 left-2 bg-red-800 text-2xl rounded-xl p-2 text-white font-medium">{{movie.Runtime}}</span>
  </div>
  <div class="place-self-center ml-16">
    <p class="text-white text-5xl font-black">{{movie.Title}}</p>
    <p class="text-white text-2xl">{{movie.Year}}</p>
    <p class="text-white text-2xl mt-16"><span class="text-red-800 text-3xl font-black">Actors: </span>{{movie.Actors}}</p>
    <p class="text-white text-2xl mt-8"><span class="text-red-800 text-3xl font-black">Plot: </span>{{movie.Plot}}</p>
    <p class="text-white text-2xl mt-8"><span class="text-red-800 text-3xl font-black">Writer: </span>{{movie.Writer}}</p>
  </div>
</div>

</template>

<style>
  body {
    background-color: #000;
  }
</style>