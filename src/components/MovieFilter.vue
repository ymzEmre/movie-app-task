<script lang="ts" setup>
  import { defineEmits, ref } from "vue";

  const emit = defineEmits(["filter-type","filter-year"]);

  const valueYear = ref<number>();

  const filterType = (event: number) :void => {
    emit("filter-type", event.target.value);
  }

  const filterYear = (event: number) :void => {
    emit("filter-year", valueYear.value);
  }
</script>

<template>
  <div class="flex justify-center md:justify-end mt-5 md:mr-9">
    
    <div class="mr-1">
      <select @change="filterType($event)" class="form-select appearance-none min-w-0 px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding rounded transition ease-in-out m-0 focus:bg-gray-700 focus:outline-none" aria-label="Default select example">
          <option class="bg-gray-700" disabled selected>Movie type</option>
          <option class="bg-gray-700" value="movie">Movie</option>
          <option class="bg-gray-700" value="series">Series</option>
      </select>
    </div>

    <input type="number" min="1900" max="2023" v-model="valueYear" class="min-w-0 px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding rounded transition ease-in-out m-0  focus:bg-gray-700 focus:outline-none" placeholder="Year">
    <button @click="filterYear" type="button" class="px-4 py-2.5 bg-gray-900 text-white ml-1 font-medium text-xs leading-tight rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Filter year</button>
  </div>
</template>