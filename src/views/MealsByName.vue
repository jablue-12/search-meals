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

	<meal-list :meals="meals"/>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import MealList from '../components/MealList.vue';
import store from '../store';

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
