<script setup>
import JobListing from '@/components/JobListing.vue'
import { onMounted, reactive } from 'vue';
import axios from 'axios';

defineProps({
    limit: {
        type: Number,
        default: 4
    },
    showAllJobsBtn: {
        type: Boolean,
        default: false
    }
})

const state = reactive({
    jobs: [],
    isLoading: true
})

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:8000/jobs')
        state.jobs = response.data;
    } catch (error) {
        console.error('Error fetching jobs: ', error)
    } finally {
        state.isLoading = false;
    }
})

</script>

<template>
    <section class="job-listings-section py-10 px-5 max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-green-800 mb-4">Browse Jobs</h2>
        <div class="job-listings grid grid-cols-1 md:grid-cols-2 gap-4">
            <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
        </div>
    </section>
    <section class="m-auto max-w-7xl my-10 px-6" v-if="showAllJobsBtn">
        <a href="/jobs" class="block btn btn-primary text-center">View All Jobs</a>
    </section>
</template>
