<template>
	<div
		v-if="!isMealLoading"
		class="max-w-[800px] mx-auto p-5">
		<h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
		<img class="object-cover mx-auto max-w-[100%]" :src="meal.strMealThumb" alt="meal.strMeal">

		<div class="mt-2">
			<div>
				<strong>Description:</strong>
			</div>
			{{ meal.strInstructions }}
		</div>
		<div class="flex flex-wrap justify-start gap-20 text-lg py-2 mt-2">
			<div>
				<strong>Category:</strong> {{ meal.strCategory }}
			</div>
			<div>
				<strong>Area:</strong> {{ meal.strArea }}
			</div>
			<div>
				<strong>Tags:</strong> {{ meal.strTags }}
			</div>
		</div>

		<div class="flex flex-wrap justify-start gap-20">
			<div>
				<h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
				<ul>
					<template
						v-for="(item, index) in mealIngredients"
						:key="'ingredient' + index">
						<li v-if="meal[`strIngredient${index + 1}`]">
							{{index + 1 }}. {{ item }}
						</li>
					</template>
				</ul>
			</div>
			<div>
				<h2 class="text-2xl font-semibold mb-3">Measures:</h2>
				<ul>
					<template
						v-for="(item, index) in mealMeasures"
						:key="'measure' + index">
						<li v-if="meal[`strMeasure${index + 1}`]">
							{{index + 1 }}. {{ item }}
						</li>
					</template>
				</ul>
			</div>
		</div>
		<div class="my-5 pb-5 flex flex-wrap justify-start gap-5">
			<youtube-button
				:href="meal.strYoutube">
				Go to Youtube
			</youtube-button>

			<!-- TODO: create reusable component for source -->
			<a
				class="px-3 py-2 rounded border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
				:href="meal.strSource"
				target="_blank">
				View Original Source
			</a>
		</div>
	</div>

	<loader
		v-else
		:is-loading="isMealLoading"/>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import Loader from '../components/Loader.vue';
import YoutubeButton from '@components/YoutubeButton.vue';

const route = useRoute();
const meal = ref({});
const isMealLoading = ref(true);
const spaceRegex = /\s/g;

const mealIngredients = computed(() => {
	const keys = Object.keys(meal.value);
	const ingredients = [];

	keys.forEach(key => {
		if (key.includes('strIngredient') && meal.value[key].replace(spaceRegex, '')) {
			ingredients.push(meal.value[key]);
		}
	});
	return ingredients;
});

const mealMeasures = computed(() => {
	const keys = Object.keys(meal.value);
	const measures = [];

	keys.forEach(key => {
		if (key.includes('strMeasure') && meal.value[key].replace(spaceRegex, '')) {
			measures.push(meal.value[key]);
		}
	});
	return measures;
});

onMounted(() => {
	axiosClient.get(`lookup.php?i=${route.params.id}`)
		.then(({ data }) => {
			meal.value = data.meals[0] || {};
		}).catch(() => {
			console.log(`Failed to retrieve the meal with id ${route.params.id}`);
		}).finally(() => {
			isMealLoading.value = false;
		});
});

</script>
<style scoped>

</style>
