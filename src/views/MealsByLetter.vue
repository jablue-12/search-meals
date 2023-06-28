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
	<div
		class="gap-5 p-8 flex flex-wrap justify-center">
		<meal-item
			v-for="meal in meals"
			:key="meal.idMeal"
			:meal="meal" />
	</div>

</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import MealItem from '@components/MealItem.vue';
import store from '../store';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.state.mealsByLetter);

watch(() => {
	store.dispatch('searchMealsByLetter', route.params.letter);
});

onMounted(() => {
	store.dispatch('searchMealsByLetter', route.params.letter);
});
</script>
