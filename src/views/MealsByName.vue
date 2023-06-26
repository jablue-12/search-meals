<template>
    <div class="p-8">
		<input
			type="text"
			v-model="keyword"
			class="rounded border-2 border-gray-200 w-full"
			placeholder="Search for meals"
			@change="searchMeals"
		/>
	</div>

	<div
		class="gap-5 p-8 flex flex-wrap justify-center">
		<div
			v-for="meal in meals"
			:key="meal.idMeal"
			class="bg-white shadow rounded-t-xl max-w-xs">

			<router-link :to="{name: 'mealDetails', params: {id: meal.idMeal} }">
				<img
					class="rounded-t-xl h-48 object-cover w-full"
					:alt="meal.strMeal"
					:src="meal.strMealThumb">
			</router-link>

				<div class="px-3">
					<h3 class="font-bold">{{ meal.strMeal }}</h3>
					<p class="mb-4 line-clamp-3">
						{{ meal.strInstructions }}
					</p>
					<div class="mb-4 flex justify-between items-center">
						<a
							class="px-3 py-2 rounded border border-red-600 hover:bg-red-600 hover:text-white transition-colors"
							:href="meal.strYoutube"
							target="_blank">Youtube
						</a>
					</div>
				</div>
		</div>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

const searchMeals = () => {
	store.dispatch('searchMeals', keyword.value);
};

onMounted(() => {
	keyword.value = route.params.name;
	if (keyword.value) {
		searchMeals();
	}
});

</script>
