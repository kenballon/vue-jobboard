<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="flex justify-center items-center h-screen bg-gray-200">
        <div class="text-center">
            <h1 class="text-4xl font-medium">404</h1>
            <p class="text-xl font-medium m-6">Sorry, the page you're looking for can't be found.</p>
            <RouterLink :to="{ name: 'home' }" class="btn btn-primary">Go
                Home
            </RouterLink>
        </div>
    </div>
</template>
