<script lang="ts" setup>
  import { defineProps } from "vue";
  import { useRouter } from "vue-router";
  
  defineProps({
    homePageMoviesList: {
      type: Array,
      default: () => [],
    }
  });


  const router = useRouter();
  
  const getMovieId = (movieId: number) => {
    router.push({
      name: "MovieDetailPage",
      query: {
        name: movieId
      },
    });
  }
</script>

<template>

  <div class="grid grid-cols-1 place-items-center gap-8 p-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
    <div v-for="movie in homePageMoviesList" :key="movie.imdbID" @click="getMovieId(movie.imdbID)">
      <div class="rounded-lg bg-gray-900 max-w-sm hover:scale-110 duration-500 cursor-pointer">
        <img class="rounded-t-lg w-96 h-80 overflow-hidden  hover:contrast-150 duration-500" :src="movie.Poster" :alt="movie.Title"/>
          <div class="p-3">
            <h5 class=" text-white text-base font-medium mb-2">{{movie.Title}}</h5>
            <p class=" text-white text-base mb-4">{{movie.Year}}</p>
          </div>
      </div>
    </div>
  </div>
</template>