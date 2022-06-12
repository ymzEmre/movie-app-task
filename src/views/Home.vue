<script setup lang="ts">
  import { inject, reactive, ref, watchEffect } from 'vue';
  import axios from "axios";
  import Movie from '../components/Movie.vue'
  import MovieFilter from '../components/MovieFilter.vue'
  import { useRouter } from "vue-router";
  const router = useRouter();

  const homePageMoviesList = ref();
  const totalResults = ref();
  const valuePageNumber = ref();

 const filter = reactive({
  type : null,
  year : null
});

  const filterTypeAssign = (type) => {
    filter.type = type;
  }

  const filterYearAssign = (year) => {
    filter.year = year;
  }

  const getHomePageMovies = (pageNumber: number) => {
    valuePageNumber.value = pageNumber;

    router.push({
      query: {
        page: pageNumber
      },
    });

    watchEffect(() => {
      let url = `http://www.omdbapi.com/?apikey=8321507c&s=all&y=2022&page=${pageNumber}`
      if (filter.type || filter.year) {
        url = `http://www.omdbapi.com/?apikey=8321507c&s=all&y=${filter?.year}&type=${filter?.type}&page=${pageNumber}`
      }
      axios.get(url)
      .then(response => {
        homePageMoviesList.value = response.data.Search;
        totalResults.value = Math.floor(response.data.totalResults / 10);
        window.scrollTo(0, 0);
      })
      .catch(error => {
        console.log(error);
      });
    });
  }

  getHomePageMovies(1)
</script>

<template>

  <div class="flex flex-row flex-wrap justify-between items-end">
  <h3 v-if="filter.year && filter.type" class="text-white text-5xl md:ml-10 mt-10 text-center md:text-start">Movies of type {{filter.type}} and year {{filter.year}}</h3>
  <h3 v-else-if="filter.type" class="text-white text-5xl md:ml-10 mt-10 text-center md:text-start">Movies of type {{filter.type}}</h3>
  <h3 v-else-if="filter.year" class="text-white text-5xl md:ml-10 mt-10 text-center md:text-start">Movies of year {{filter.year}}</h3>
  <h3 v-else class="text-white text-5xl md:ml-10 mt-10 text-center md:text-start">Movies of 2022</h3>

  <MovieFilter @filter-type="filterTypeAssign" @filter-year="filterYearAssign"/>

  <Movie :homePageMoviesList="homePageMoviesList" />
  </div>
  <div class="flex justify-center mb-10">
    <nav aria-label="Page navigation example">
      <ul class="flex list-style-none">
        <li class="page-item cursor-pointer" :class="{'bg-gray-900 rounded': item == valuePageNumber}" v-for="item in totalResults" :key="item.id">
          <a @click="getHomePageMovies(item)" class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:bg-gray-800 focus:shadow-none">
            {{item}}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
  body {
    background-color: #000;
  }
</style>