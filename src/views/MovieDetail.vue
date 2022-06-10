<script lang="ts" setup>
import {  reactive, ref } from 'vue';
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const searchMovieID = router.currentRoute.value.query.name


let movieDetail = reactive([{
    imdbID: null,
    Title: null,
    Year: null,
    Poster: null,
}])
  



const movieDetailUrl = () => {
  axios.get(`http://www.omdbapi.com/?apikey=8321507c&i=${searchMovieID}`).then(response => {
    // state.movieDetail = response.data;
    movieDetail = {
      imdbID: response.data.imdbID,
      Title: response.data.Title,
      Year: response.data.Year,
      Poster: response.data.Poster,
    }

    console.log(movieDetail);
  }).catch(error => {
    console.log(error);
  });
};


movieDetailUrl();
</script>

<template>
<p v-for="(key,val) in movieDetail" :key="val">
  {{key}} : {{val.Title}}
  <!-- <img :src="val.Poster" alt=""> -->
</p>

</template>