<script lang="ts" setup>
  import { useRouter } from "vue-router";
  import Navbar from './components/Navbar.vue'

  const router = useRouter();

  const searchMovie = (movieName) => {
    if (movieName == undefined) return
    router.push({
      name: "SearchPage",
      query: {
        name: movieName
      },
    });
  };
</script>


<template>
  <Navbar @search-movie='searchMovie'/>
  <router-view />
</template>


