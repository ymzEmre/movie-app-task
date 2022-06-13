<script lang="ts" setup>
  import { reactive, ref, watchEffect } from 'vue';
  import { useRouter } from "vue-router";
  import axios from "axios";
  import MovieFilter from '../components/MovieFilter.vue'

  const router = useRouter();

  const searchMovieList = ref();
  const totalResults = ref<number>();
  const valuePageNumber = ref<number>();

  const searchMovieName = router.currentRoute.value.query.name

  interface Filter {
    type: string | null;
    year: number | null;
  }

  const filter: Filter = reactive({
    type : null,
    year : null
  });

  const filterTypeAssign = (type: string) => {
    filter.type = type;
  }

  const filterYearAssign = (year: number) => {
    filter.year = year;
  }

  const getSearchedMovies = (pageNumber: number) => {
    valuePageNumber.value = pageNumber;

    router.push({
      query: {
        page: pageNumber
      },
    });

      watchEffect(() => {
      let url = `http://www.omdbapi.com/?apikey=8321507c&s=${searchMovieName}&page=${pageNumber}`
      if (filter.type || filter.year) {
        url = `http://www.omdbapi.com/?apikey=8321507c&s=${searchMovieName}&y=${filter?.year}&type=${filter?.type}&page=${pageNumber}`
      }
       axios.get(url)
      .then(response => {
        searchMovieList.value = response.data.Search;
        totalResults.value = Math.floor(response.data.totalResults / 10);
        window.scrollTo(0, 0);
      }).catch(error => {
        console.log(error);
      });
    });
  }

  const goToDetailPage = (movieId: number) => {
    router.push({
      name: "MovieDetailPage",
      query: {
        name: movieId
      },
    });
  };

  getSearchedMovies(1)
</script>

<template>
   
  <h3 v-if="!searchMovieList" class="text-white text-5xl flex justify-center items-center mt-10 text-center">Movie not found</h3>

  <div v-if="searchMovieList">
   <div class="flex items-center md:items-end flex-col md:flex-row justify-between w-full">
      <h3 class="text-white text-5xl md:ml-10 mt-10 text-center md:text-start">Result for {{searchMovieName}}</h3>
      <MovieFilter @filter-type="filterTypeAssign" @filter-year="filterYearAssign"/>
    </div>

      <div class="grid grid-cols-1 place-items-center gap-8 p-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div v-for="movie in searchMovieList" :key="movie.imdbID" @click="goToDetailPage(movie.imdbID)">
          <div class="rounded-lg bg-gray-900 max-w-sm hover:scale-110 duration-500 cursor-pointer max-w-xs">
            <img class="rounded-t-lg w-96 h-80 overflow-hidden contrast-125" :src="movie.Poster" :alt="movie.Title"/>
              <div class="p-3">
                <h5 class=" text-white text-base font-medium mb-2">{{movie.Title}}</h5>
                <p class=" text-white text-base mb-4">{{movie.Year}}</p>
              </div>
          </div>
        </div>
      </div>

    <div class="flex justify-center mb-10">
      <nav aria-label="Page navigation example">
        <ul class="flex list-style-none">
          <li class="page-item cursor-pointer" :class="{'bg-gray-900 rounded': item == valuePageNumber}" v-for="item in totalResults" :key="item.id">
            <a @click="getSearchedMovies(item)" class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:bg-gray-900 focus:shadow-none">
              {{item}}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>