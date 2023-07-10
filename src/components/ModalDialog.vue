<template>
	<teleport to="body">
		<transition
			enter-active-class="transition ease-out duration-200 transform"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition ease-in duration-200 transform"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0">
			<div
				v-show="props.show"
				ref="modal-backdrop"
				class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
				<div
					class="flex items-start justify-center min-h-screen pt-24 text-center">
					<transition
						enter-active-class="transition ease-out duration-300 transform "
						enter-from-class="opacity-0 translate-y-10 scale-95"
						enter-to-class="opacity-100 translate-y-0 scale-100"
						leave-active-class="ease-in duration-200"
						leave-from-class="opacity-100 translate-y-0 scale-100"
						leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95">
						<div
							v-show="props.show"
							class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 w-1/2"
							role="dialog"
							ref="modal"
							aria-modal="true"
							aria-labelledby="modal-headline">
							<button
								type="button"
								class="m-0 absolute top-4 right-4 bg-slate-600"
								@click="closeModal">
								X
							</button>
							<slot>Default</slot>
						</div>
					</transition>
				</div>
			</div>
		</transition>
	</teleport>
</template>

<script setup>
const props = defineProps({
	show: {
		type: Boolean,
		required: true
	}
});

const emit = defineEmits([
	'close'
]);

const closeModal = () => {
	emit('close');
};

</script>
