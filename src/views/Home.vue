<template>
    <div class="flex flex-col p-8">

        <div>
            <input
            type="text"
            class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for meals"/>
        </div>
        
        <div class="flex gap-1 justify-center gap-2 mt-2">
            <router-link 
                v-for="(letter,index) in letters"
                :key="index"
                :to="{name: 'byLetter', params: {letter}}" >
                {{ letter }}
            </router-link>
        </div>
    </div>
    
</template>

<script setup>
import { computed } from 'vue'
import store from '../store'

const meals = computed(() => store.state.meals);
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

</script>

<style lang="scss" scoped>

</style>