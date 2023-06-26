<template>
	<a
		class="px-3 py-2 rounded border border-red-600 hover:bg-red-600 hover:text-white transition-colors"
		:href="props.href"
		target="_blank">
		<slot></slot>
	</a>
</template>

<script setup>
const props = defineProps({
	href: {
		type: String,
		required: true
	}
});

</script>
