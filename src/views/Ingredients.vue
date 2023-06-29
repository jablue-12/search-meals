<template>
    <div class="p-8">
		<h1 class="font-bold text-4xl mb-4">Ingredients</h1>
		<router-link
			v-for="ingredient in ingredients"
			:key="ingredient.idIngredient"
			:to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient}}"
			class="block bg-white rounded-lg mb-3 p-5 shadow-md">
			<h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
			<p>{{ ingredient.strDescription }}</p>
		</router-link>
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
