<template>
	<!-- TODO: probably dont use the meal-list component as the width for each card is not the same
	due to not having a description -->
	<meal-list :meals="meals"/>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MealList from '@components/MealList.vue';
import store from '../store';

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
	store.dispatch('searchMealsByIngredient', route.params.ingredient);
});

</script>
