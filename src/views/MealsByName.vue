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

	<loader
		:isLoading="meals.isLoading"/>

	<div v-if="!meals.isLoading">
		<meal-list :meals="meals.data"/>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Loader from '../components/Loader.vue';
import MealList from '../components/MealList.vue';
import store from '../store';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.getters.searchedMeals);

const searchMeals = () => {
	if (keyword.value) {
		store.dispatch('searchMeals', keyword.value);
	} else {
		store.commit('setSearchedMeals', { data: { meals: [] }, isLoading: false });
	}
};

onMounted(() => {
	keyword.value = route.params.name;
	if (keyword.value) {
		searchMeals();
	}
});

</script>
