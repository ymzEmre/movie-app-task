<script lang="ts" setup>
import { defineEmits, ref } from "vue";

const valueYear = ref();

const emit = defineEmits(["filter-type","filter-year"]);

const filterType = (event) => {
  emit("filter-type", event.target.value);
}

const filterYear = (event) => {
  emit("filter-year", valueYear.value);
}
</script>



<template>
  <div class="flex justify-end mr-9">
  <div class="mr-5">
    <select @change="filterType($event)"
    class="form-select appearance-none min-w-0 px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding rounded transition ease-in-out m-0  focus:bg-gray-700 focus:outline-none" aria-label="Default select example">
        <option disabled selected>Movie type</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
    </select>
  </div>
    <input type="number" min="1900" max="2099" v-model="valueYear" class="min-w-0 px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding rounded transition ease-in-out m-0  focus:bg-gray-700 focus:outline-none" placeholder="Year">
    <button @click="filterYear" type="button" class="px-6 py-2.5 bg-gray-900 text-white ml-1 font-medium text-xs leading-tight rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" >Filter Year</button>
</div>
</template>