<template>
	<div class="flex flex-col p-8">
		Hello worlds
	</div>

	<!-- <pacman-loader
		:loading="true"
		color="orange"/> -->

	<button
		type="button"
		@click="showModal = !showModal"
		class="mx-auto w-full flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
		Open Modal
	</button>

	<modal-dialog
		:show="showModal"
		@close="closeModal">
		Test new content
	</modal-dialog>

</template>

<script setup>
import { ref } from 'vue';
import ModalDialog from '@components/ModalDialog.vue';

const showModal = ref(false);

const closeModal = () => {
	showModal.value = false;
};
</script>
