<script setup>
import axios from 'axios';
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import Button from '../components/Button.vue';
import { useToast } from 'vue-toastification';

const route = useRoute();
const router = useRouter();
const toast = useToast();
const jobID = route.params.id;

const state = reactive({
    job: null,
    isLoading: true,
    error: null
})

const deleteJob = async () => {
    try {
        const confirmDelete = window.confirm('Are you sure you want to delete this job?')
        if (confirm) {
            await axios.delete(`/api/jobs/${jobID}`);
            toast.success(`${state.job.title} has been successfully deleted!`)
            router.push('/jobs')
        }

    } catch (error) {
        const msg = 'There have been an error occured during deletion of this particular job';
        console.error(msg, error)
        toast.error(msg)
    }
}

onMounted(async () => {
    try {
        const response = await axios.get(`/api/jobs/${jobID}`)
        state.job = response.data;

    } catch (error) {
        console.error('Error fetching job: ', error)
        state.error = 'Failed to load job details'
    } finally {
        state.isLoading = false
    }
});

</script>

<template>
    <main class="bg-green-50">
        <section class="container mx-auto p-10 h-screen max-w-7xl">
            <div v-if="state.loading">Loading...</div>
            <div v-else-if="state.error">{{ state.error }}</div>
            <div v-else-if="state.job" class="grid md:grid-cols-2 gap-4">
                <article class="p-8 bg-green-100 shadow-spread-lg shadow-green-500 border border-green-200 rounded-md">
                    <div class="job-heading mb-6">
                        <span class="mb-2 block opacity-60">{{ state.job.employmentType }}</span>
                        <h1 class="text-2xl font-semibold mb-2 text-green-800 capitalize text-pretty">{{ state.job.title
                            }}
                            - {{ state.job.salary }}/yr
                        </h1>
                        <h2 class="flex gap-2 opacity-60 mb-4">
                            <div><i class="pi pi-map-marker text-green-700"></i></div>
                            <div>{{
                                state.job.location
                                }}</div>
                        </h2>
                    </div>
                    <h3 class="text-lg font-semibold opacity-60 mb-2">About this job</h3>
                    <p class="opacity-60 mb-4 text-pretty">{{ state.job.description }}</p>
                    <div class="opacity-60 mb-4 text-pretty">
                        <h3 class="font-semibold text-lg mb-2">Requirements: </h3>
                        <ul class="list-disc pl-6">
                            <li v-for="req in state.job.requirements" :key="req">{{ req }}</li>
                        </ul>
                    </div>


                </article>
                <aside class="px-9">
                    <div class="company-wrapper mb-8">
                        <h2 class="">
                            <span class="block text-sm opacity-50 uppercase mb-1">Company</span>
                            <span class="block text-xl font-medium">{{ state.job.company.name }}</span>
                        </h2>
                    </div>
                    <div class="mb-8">
                        <h3 class="text-sm opacity-50 uppercase mb-2">About the company</h3>
                        <p class="opacity-70">{{ state.job.company.description }}</p>
                    </div>

                    <div class="contact-wrapper mb-4">
                        <h2 class="mb-3">
                            <span><i class="pi pi-envelope mr-2"></i></span>
                            <a :href="`mailto:${state.job.company.contactEmail}`">{{
                                state.job.company.contactEmail }}</a>
                        </h2>
                        <h2 class=""><span><i class="pi pi-mobile mr-2"></i></span><a
                                :href="`tel:${state.job.company.contactPhone}`">{{ state.job.company.contactPhone }}</a>
                        </h2>
                    </div>
                    <div class="manage-job-wrapper flex gap-4">
                        <RouterLink class="btn" :to="{ name: 'EditJob' }">Edit this job post</RouterLink>
                        <Button :btn-class="`btn-warning`" @click="deleteJob">Delete this job post</Button>
                    </div>
                </aside>
            </div>
            <div v-else>No job details available</div>
        </section>
    </main>
</template>

<style scoped>
.job-heading {
    border-bottom: 1px solid rgba(1, 67, 1, 0.169);
}
</style>
