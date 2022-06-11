<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
import { useRouter } from "vue-router";
const router = useRouter();


const searchMovie = (e) => {
  if (e == undefined) return
  router.push({
    name: "Search",
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


