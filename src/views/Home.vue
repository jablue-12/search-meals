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
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient.js';

const ingredients = ref([]);
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// * www.themealdb.com/api/json/v1/1/list.php?i=list
onMounted(async () => {
	const response = await axiosClient.get('list.php?i=list');
	console.log(response.data);
	ingredients.value = response.data;
});
</script>

<style lang="scss" scoped></style>
