<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import Navabar from '@/components/Navabar.vue';

const isMobileMenuHidden = ref(false)

const handleClickMenu = () => {
  isMobileMenuHidden.value = !isMobileMenuHidden.value
}
</script>

<template>
  <Navabar @clicked-hamburger-menu="handleClickMenu" :isMobileMenuHidden="isMobileMenuHidden" />
  <RouterView />
</template>
