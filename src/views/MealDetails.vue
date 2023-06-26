<template>
	<div class="w-[800px] mx-auto">
		<h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
		<img :src="meal.strMealThumb" alt="meal.strMeal">
		<div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
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

		<div class="grid grid-cols-1 md:grid-cols-2">
			<div>
				<h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
				<ul>
					<template
						v-for="(item, index) of new Array(20)"
						:key="'ingredient' + index">
						<li v-if="meal[`strIngredient${index + 1}`]">
							{{index + 1 }}. {{meal[`strIngredient${index + 1}`]}}
						</li>
					</template>
				</ul>
			</div>
			<div>
				<h2 class="text-2xl font-semibold mb-3">Measures</h2>
				<ul>
					<template
						v-for="(item, index) of new Array(20)"
						:key="'measure' + index">
						<li v-if="meal[`strMeasure${index + 1}`]">
							{{index + 1 }}. {{meal[`strMeasure${index + 1}`]}}
						</li>
					</template>
				</ul>
			</div>
			<div>
				<youtube-button :href="meal.strYoutube">
					Go to Youtube
				</youtube-button>
			</div>

		</div>

	</div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';

const route = useRoute();
const meal = ref({});

onMounted(() => {
	axiosClient.get(`lookup.php?i=${route.params.id}`)
		.then(({ data }) => {
			meal.value = data.meals[0] || {};
		});
});

</script>
<style scoped>

</style>
