<script lang="ts" setup>
  import { reactive } from 'vue';
  import { useRouter } from "vue-router";
  import axios from "axios";

  const router = useRouter();

  let movieDetail = reactive({
    movie: {}
  })

  const searchMovieId = router.currentRoute.value.query.name

  const goToDetailPage = () => {
    axios.get(`http://www.omdbapi.com/?apikey=8321507c&i=${searchMovieId}`).then(response => {
      movieDetail.movie = response.data;
    }).catch(error => {
      console.log(error);
    });
  };

  goToDetailPage();
</script>

<template>
  <div class="grid grid-flow-row md:grid-flow-col ml-8 mt-8" v-for="movie in movieDetail" :key="movie">
    <div class="relative flex w-96">
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
