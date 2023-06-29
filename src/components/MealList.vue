<template>
	<div v-if="props.meals.length === 0" class="flex justify-center">
		There are no meals for the selected ingredient.
	</div>

	<div
		v-else
		class="gap-5 p-8 flex flex-wrap justify-center">
		<meal-item
			v-for="meal in props.meals"
			:key="meal.idMeal"
			:meal="meal" />
	</div>
</template>

<script setup>
import MealItem from '@components/MealItem.vue';

const props = defineProps({
	meals: {
		type: Array,
		default: () => []
	}
});

</script>
