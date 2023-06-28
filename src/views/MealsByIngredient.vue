<template>
    <div>
        Search By Ingredients
		<pre>{{ ingredients }}</pre>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// import store from '../store';
import axiosClient from '../axiosClient';

const ingredients = ref([]);

onMounted(() => {
	axiosClient.get('list.php?i=list').then(({ data }) => {
		ingredients.value = data.meals;
	});
});

</script>
