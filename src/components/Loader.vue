<template>
	<div class="flex flex-wrap justify-center mt-4">
		<beat-loader
			:loading="props.isLoading"
			:color="props.color"/>
	</div>
</template>

<script setup>

const props = defineProps({
	isLoading: {
		type: Boolean,
		required: true
	},
	color: {
		type: String,
		default: () => '#5f69c2'
	}
});

</script>
