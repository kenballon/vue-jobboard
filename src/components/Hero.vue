<script setup>
import Card from './Card.vue';
import Button from './Button.vue';

</script>
<template>
    <section class="hero-container grid place-content-center py-8 px-4 bg-gradient-to-br from-green-400 to-sky-600">
        <div class="flex items-center gap-4 flex-wrap">
            <Card>
                <div class="text-card-content mb-5">
                    <h1 class="text-3xl font-semibold mb-2">For Developers</h1>
                    <p>Browser our Vue Jobs and start your career today</p>
                </div>
                <Button btnClass="btn-primary">View available jobs</Button>
            </Card>
            <Card bg="bg-green-200" border="border border-green-400">
                <div class="text-card-content mb-5">
                    <h1 class="text-3xl font-semibold mb-2">For Employers</h1>
                    <p>List your job to find perfect developer for the role</p>
                </div>
                <Button>Add available job</Button>
            </Card>
        </div>
    </section>
</template>

<style scoped>
.hero-container {
    min-height: calc(100dvh - 20rem);
}
</style>