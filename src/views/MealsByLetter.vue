<template>
    <div class="flex flex-col p-8">
        <div class="flex justify-center gap-2 mt-2">
			<router-link
				v-for="(letter, index) in letters"
				:key="index"
				:to="{ name: 'byLetter', params: { letter } }"
				active-class="bg-blue-200"
			>
				{{ letter }}
			</router-link>
		</div>
    </div>

	<loader
		:isLoading="meals.isLoading"/>

	<div v-if="!meals.isLoading">
		<meal-list :meals="meals.data"/>
	</div>
</template>

<script setup>
import { computed, onMounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import Loader from '@components/Loader.vue';
import MealList from '@components/MealList.vue';
import store from '../store';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.getters.mealsByLetter);

const isLetterValidated = (letter) => {
	return letter.length === 1 && letter.match(/[a-z]/i);
};

watchEffect(() => {
	if (route.params.letter) {
		if (isLetterValidated(route.params.letter)) {
			store.dispatch('searchMealsByLetter', route.params.letter);
		}
	}
});

onMounted(() => {
	if (route.params.letter) {
		if (isLetterValidated(route.params.letter)) {
			store.dispatch('searchMealsByLetter', route.params.letter);
		}
	}
});

</script>
