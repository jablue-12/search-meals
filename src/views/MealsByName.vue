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
		<meal-item
			v-for="meal in meals"
			:key="meal.idMeal"
			:meal="meal" />
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import MealItem from '@components/MealItem.vue';

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
