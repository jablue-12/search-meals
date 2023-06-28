<template>
    <navbar/>
    <div class="bg-slate-300">
        <main>
			<router-view/>
        </main>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';

</script>

<style lang="scss" scoped>

</style>
