<template>
    <div class="p-8">
		<h1 class="font-bold text-4xl mb-4">Ingredients</h1>

		<input
			type="text"
			v-model="keyword"
			class="rounded border-2 border-gray-200 w-full mb-3"
			placeholder="Search for ingredients"
		/>

		<router-link
			v-for="ingredient in filteredIngredients"
			:key="ingredient.idIngredient"
			:to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient}}"
			class="block bg-white rounded-lg mb-3 p-5 shadow-md">
			<h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
			<p>{{ ingredient.strDescription }}</p>
		</router-link>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';

const keyword = ref('');
const ingredients = ref([]);

const filteredIngredients = computed(() => {
	if (!filteredIngredients.value) return ingredients.value;

	return ingredients.value.filter(ingredient =>
		(ingredient.strDescription || '').toLowerCase().includes(keyword.value.toLowerCase())
	);
});

onMounted(() => {
	axiosClient.get('list.php?i=list').then(({ data }) => {
		ingredients.value = data.meals;
	});
});

</script>
