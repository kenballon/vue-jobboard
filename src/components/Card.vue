<script setup>

defineProps({
    bg: {
        type: String,
        default: 'bg-gray-100',
    },
    border: {
        type: String,
        default: 'border border-gray-200',
    }
})

</script>
<template>
    <article class="home-card p-4 rounded-md" :class="`${bg} ${border}`">
        <slot></slot>
    </article>
</template>
