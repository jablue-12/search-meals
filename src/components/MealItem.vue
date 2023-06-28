<template>
	<div
		class="bg-white shadow rounded-t-xl max-w-xs">

		<router-link :to="{name: 'mealDetails', params: {id: props.meal.idMeal} }">
			<img
				class="rounded-t-xl h-48 object-cover w-full"
				:alt="props.meal.strMeal"
				:src="props.meal.strMealThumb">
		</router-link>

			<div class="px-3">
				<h3 class="font-bold">{{ props.meal.strMeal }}</h3>
				<p class="mb-4 line-clamp-3">
					{{ props.meal.strInstructions }}
				</p>
				<div class="mb-4 flex justify-between items-center">
					<youtube-button :href="props.meal.strYoutube">
						Go to Youtube
					</youtube-button>
				</div>
			</div>
	</div>
</template>

<script setup>
import YoutubeButton from '@components/YoutubeButton.vue';

const props = defineProps({
	meal: {
		type: Object,
		required: true
	}
});

</script>
