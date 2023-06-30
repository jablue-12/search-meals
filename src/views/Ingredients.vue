<template>
    <div class="p-8">
		<h1 class="font-bold text-4xl mb-4">Ingredients</h1>

		<input
			type="text"
			v-model="keyword"
			class="rounded border-2 border-gray-200 w-full mb-3"
			placeholder="Search for ingredients"
		/>

		<loader
			:isLoading="ingredients.isLoading"/>

		<div v-if="!ingredients.isLoading">
			<router-link
				v-for="ingredient in filteredIngredients"
				:key="ingredient.idIngredient"
				:to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient}}"
				class="block bg-white rounded-lg mb-3 p-5 shadow-md">
				<h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
				<!-- TODO: add a view more button for description if available
					The button will open up a modal -->
				<p class="line-clamp-1">{{ ingredient.strDescription }}</p>
			</router-link>
		</div>

    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import Loader from '../components/Loader.vue';
import store from '../store';

const keyword = ref('');
const ingredients = computed(() => store.getters.ingredientList);

const filteredIngredients = computed(() => {
	if (!filteredIngredients.value) return ingredients.value.data;

	return ingredients.value.data.filter(ingredient =>
		(ingredient.strIngredient || '').toLowerCase().includes(keyword.value.toLowerCase())
	);
});

onMounted(() => {
	if (ingredients.value.data.length === 0) {
		store.dispatch('fetchIngredientList');
	}
});

</script>
