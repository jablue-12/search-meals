<template>
	<!-- TODO: probably dont use the meal-list component as the width for each card is not the same
	due to not having a description -->
	<loader
		:isLoading="meals.isLoading"/>

	<div v-if="!meals.isLoading">
		<meal-list :meals="meals.data"/>
	</div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Loader from '../components/Loader.vue';
import MealList from '@components/MealList.vue';
import store from '../store';

const route = useRoute();
const meals = computed(() => store.getters.mealsByIngredient);

onMounted(() => {
	store.dispatch('searchMealsByIngredient', route.params.ingredient);
});

</script>
