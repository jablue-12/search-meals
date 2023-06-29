<template>
    <div class="flex flex-col p-8">
        <div class="flex justify-center gap-2 mt-2">
			<router-link
				v-for="(letter, index) in letters"
				:key="index"
				:to="{ name: 'byLetter', params: { letter } }"
			>
				{{ letter }}
			</router-link>
		</div>
    </div>

	<meal-list :meals="meals"/>
</template>

<script setup>
import { computed, onMounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import MealList from '@components/MealList.vue';
import store from '../store';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.state.mealsByLetter);

watchEffect(() => {
	store.dispatch('searchMealsByLetter', route.params.letter);
});

onMounted(() => {
	store.dispatch('searchMealsByLetter', route.params.letter);
});
</script>
