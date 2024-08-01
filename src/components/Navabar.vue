<script setup>
import logo from '@/assets/vuejobs-logo.svg'
import { RouterLink, useRoute } from 'vue-router';

const props = defineProps({
    isMobileMenuHidden: Boolean,
});

const emit = defineEmits(["clickedHamburgerMenu"])

const toggleMobileMenu = () => {
    emit("clickedHamburgerMenu")
}

const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
}

</script>

<template>
    <div class="header-wrapper bg-green-100 shadow-lg shadow-green-950/10 sticky top-0 z-40">
        <header class="container mx-auto relative">
            <div class="flex items-center justify-between p-4 relative z-30">
                <div class="site-logo-wrapper max-w-40">
                    <RouterLink :to="{ name: 'home' }" class="normal-link"><img class="site-logo" :src="logo"
                            alt="logo" /></RouterLink>
                </div>
                <nav>
                    <ul class="hidden md:flex items-center gap-1">
                        <li>
                            <RouterLink :to="{ name: 'home' }"
                                class="hover:bg-green-950 hover:text-green-100  py-2 px-4 cursor-pointer rounded-md"
                                :class="[isActiveLink('/') ? 'bg-green-950 text-green-100' : '']">
                                Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'allJobs' }"
                                class="hover:bg-green-950 hover:text-green-100  py-2 px-4 cursor-pointer rounded-md"
                                :class="[isActiveLink('/jobs/') ? 'bg-green-950 text-green-100' : '']">
                                Jobs</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'addjob' }"
                                class="hover:bg-green-950 hover:text-green-100  py-2 px-4 cursor-pointer rounded-md"
                                :class="[isActiveLink('/jobs/addjob') ? 'bg-green-950 text-green-100' : '']">
                                Add a Job</RouterLink>
                        </li>

                    </ul>

                    <button id="menu-toggle"
                        class="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        @click="toggleMobileMenu" title="Open Menu List">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                    </button>
                </nav>
            </div>

            <nav class="mobile-view bg-green-400 z-20"
                :class="{ hidden: !props.isMobileMenuHidden, 'show': props.isMobileMenuHidden }">
                <ul class="mobile-nav-links flex flex-col justify-center items-center gap-4 h-screen text-gray-950">
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>Add Jobs</li>
                </ul>
            </nav>
        </header>
    </div>

</template>

<style scoped>
.mobile-view.show {
    position: absolute;
    width: 100%;
    height: calc(100svh - 65.26px);
    right: 0;
    animation: revealFromTop .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes revealFromTop {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0);
    }
}
</style>
