<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
import { useRouter } from "vue-router";
const router = useRouter();


const searchMovie = (e) => {
  router.push({
    name: "search",
    query: {
      name: e
    },
  });
};
</script>


<template>
  <Navbar @search-movie='searchMovie'/>

  <router-view />
</template>


