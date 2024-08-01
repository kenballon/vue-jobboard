<script setup>

defineProps({
    normalButton: {
        type: String,
        default: 'btn'
    },
    btnClass: {
        type: String,
        default: ''
    },
    buttonTitle: {
        type: String,
        default: 'Button title'
    }
})
</script>


<template>
    <button :class="`${normalButton} ${btnClass} capitalize`" type="button" :title="`${buttonTitle}`">
        <slot></slot>
    </button>
</template>

<style scoped></style>