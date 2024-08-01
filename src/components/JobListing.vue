<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';


const props = defineProps({
    job: Object,
});

const showFullDescription = ref(false);

const toggleFullDescription = () => {
    showFullDescription.value = !showFullDescription.value;
}

const truncatedDescription = computed(() => {
    let words = props.job.description.split(' ');
    if (words.length > 50 && !showFullDescription.value) {
        words = words.slice(0, 25);
        return words.join(' ') + '...'
    }

    return words.join(' ').replace(/\n/g, '<br>');
});

</script>
]
<template>
    <article
        class="job-listings__item p-4 bg-green-50 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-emerald-200 border border-green-200 shadow-spread-lg shadow-gray-500 rounded-md mb-8 flex flex-col"
        :id="`{job.id}`">
        <div class="job-text-details">
            <div class="flex flex-col md:flex-row gap-2 mb-2">
                <span class="work-type text-sm uppercase text-green-700 block order-2 md:order-1">Company: {{
                    job.company.name
                    }}</span>
                <span
                    class="work-type text-sm uppercase opacity-55 block md:ml-auto w-fit py-1 px-3 rounded-full bg-white border border-emerald-400 order-1 md:order-2">{{
                        job.employmentType
                    }}</span>
            </div>
            <h1 class="job-title text-2xl font-semibold mb-2 text-green-800 capitalize text-pretty">{{ job.title }}
            </h1>
            <div class="job-blurb opacity-60 mb-4 text-pretty">
                <div>
                    {{ truncatedDescription }}
                    <span class="text-green-600 hover:text-green-900 cursor-pointer" @click="toggleFullDescription">
                        {{ showFullDescription ? 'Less' : 'More' }}
                    </span>
                </div>

            </div>
            <p class="uppercase text-sm tracking-widest text-green-700">Salary Range: {{ job.salary }}</p>
        </div>
        <div class="mt-auto">
            <hr class="my-2">
            <div class="location flex flex-col items-center md:flex-row gap-2">
                <div class="uppercase text-sm tracking-widest text-green-700">
                    <span><i class="pi pi-map-marker text-green-700"></i></span>
                    Location: {{ job.location }}
                </div>
                <RouterLink :to="{ name: 'jobPostDetail', params: { id: job.id } }"
                    class="btn btn-primary text-center md:ms-auto">
                    Apply Now</RouterLink>
            </div>
        </div>
    </article>
</template>
