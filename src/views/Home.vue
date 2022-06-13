<script setup lang="ts">
  import { reactive, ref, watchEffect } from 'vue';
  import axios from "axios";
  import Movie from '../components/Movie.vue'
  import MovieFilter from '../components/MovieFilter.vue'
  import { useRouter } from "vue-router";

  const router = useRouter();

  const homePageMoviesList = ref();
  const totalResults = ref<number>();
  const valuePageNumber = ref<number>();

  interface Filter {
    type: string | null;
    year: number | null;
  }

  const filter: Filter = reactive({
    type : null,
    year : null
  });

  const filterTypeAssign = (type: string) :void => {
    filter.type = type;
  }

  const filterYearAssign = (year: number) :void => {
    filter.year = year;
  }

  const getHomePageMovies = (pageNumber: number) :void => {
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
  <div class="flex flex-column flex-wrap justify-center lg:justify-between xl:justify-center md:flex-row items-end">

    <div class="flex items-center md:items-end flex-col md:flex-row justify-between w-full">
      <h3 v-if="filter.year && filter.type" class="text-white text-5xl md:ml-10 mt-10 text-center md:text-start">Results for of type {{filter.type}} and year {{filter.year}}</h3>
      <h3 v-else-if="filter.type" class="text-white text-5xl md:ml-10 mt-10 text-center md:text-start">Results of type {{filter.type}}</h3>
      <h3 v-else-if="filter.year" class="text-white text-5xl md:ml-10 mt-10 text-center md:text-start">Results of year {{filter.year}}</h3>
      <h3 v-else  class="text-white text-5xl md:ml-10 mt-10 text-center md:text-start">Movies of 2022</h3>

      <MovieFilter @filter-type="filterTypeAssign" @filter-year="filterYearAssign"/>
    </div>
    <Movie :homePageMoviesList="homePageMoviesList" />
  </div>
  <div class="flex justify-center mb-10">
    <nav class="overflow-x-auto max-w-xs lg:max-w-7xl">
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

