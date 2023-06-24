<template>
    <navbar/>
    <div>
        <main class=" bg-slate-300 ">
			<router-view/>
        </main>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';

</script>

<style lang="scss" scoped>

</style>
