<script lang="ts" setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { ref } from '@vue/reactivity';
const router = useRouter();


const searchMovieID = router.currentRoute.value.query.name

const movieDetail = ref({});


const movieDetailUrl = () => {
  axios.get(`http://www.omdbapi.com/?apikey=8321507c&plot=full&i=${searchMovieID}`).then(response => {
    console.log(response);
    movieDetail.value = response.data;
  }).catch(error => {
    console.log(error);
  });
};

setTimeout(() => {
  console.log(JSON.parse(JSON.stringify(movieDetail.value)));
  console.log(movieDetail.value);
}, 2000);

movieDetailUrl();
</script>

<template>
<p v-for="test in movieDetail" :key="test.imdbID">{{test.Title}}</p>

</template>