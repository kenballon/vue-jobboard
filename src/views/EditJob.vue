<script setup>
import axios from 'axios';
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
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

const form = reactive({
    title: '',
    employmentType: '',
    description: '',
    location: '',
    salary: '',
    requirements: [],
    company: {
        name: '',
        description: '',
        contactEmail: '',
        contactPhone: ''
    }
})

const handleSubmit = async () => {
    const updatedJobPost = {
        title: form.title,
        employmentType: form.employmentType,
        description: form.description,
        location: form.location,
        salary: form.salary,
        requirements: form.requirements,
        company: {
            name: form.company.name,
            description: form.company.description,
            contactEmail: form.company.contactEmail,
            contactPhone: form.company.contactPhone
        }
    }

    try {
        const response = await axios.put(`/api/jobs/${jobID}`, updatedJobPost);
        toast.success('Job has been updated successfully');
        router.push(`/job/${response.data.id}`)
    } catch (error) {
        console.error('Error fetching job: ', error)
        toast.error('There is an error while adding a new job post')
    }
}

onMounted(async () => {
    try {
        const response = await axios.get(`/api/jobs/${jobID}`)
        state.job = response.data;

        form.title = state.job.title;
        form.employmentType = state.job.employmentType;
        form.description = state.job.description;
        form.location = state.job.location;
        form.salary = state.job.salary;
        form.requirements = state.job.requirements;
        form.company.name = state.job.company.name;
        form.company.description = state.job.company.description;
        form.company.contactEmail = state.job.company.contactEmail;
        form.company.contactPhone = state.job.company.contactPhone;

        console.log(state.job);

    } catch (error) {
        console.error('Error fetching job: ', error)
        state.error = 'Failed to load job details'
    } finally {
        state.isLoading = false
    }
});
</script>


<template>
    <section class="bg-green-50">
        <div class="container m-auto max-w-2xl py-24">
            <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <form @submit.prevent="handleSubmit">
                    <h2 class="text-3xl text-center font-semibold mb-6">Add Job</h2>

                    <div class="mb-4">
                        <label for="employmentType" class="block text-gray-700 font-bold mb-2">Job Type</label>
                        <input type="text" name="employmentType" id="employmentType"
                            class="border rounded w-full py-2 px-3 mb-2" v-model="form.employmentType">
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2">Job Listing Name</label>
                        <input type="text" id="name" name="name" class="border rounded w-full py-2 px-3 mb-2"
                            placeholder="eg. Beautiful Apartment In Miami" required v-model="form.title" />
                    </div>
                    <div class="mb-4">
                        <label for="description" class="block text-gray-700 font-bold mb-2">Description</label>
                        <textarea id="description" name="description" class="border rounded w-full py-2 px-3" rows="4"
                            placeholder="Add any job duties, expectations, requirements, etc"
                            v-model="form.description"></textarea>
                    </div>
                    <div class="mb-4">
                        <label for="salary" class="block text-gray-700 font-bold mb-2">Salary</label>
                        <input type="text" id="salary" name="salary" class="border rounded w-full py-2 px-3 mb-2"
                            required v-model="form.salary" />
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2">
                            Location
                        </label>
                        <input type="text" id="location" name="location" class="border rounded w-full py-2 px-3 mb-2"
                            placeholder="Company Location" required v-model="form.location" />
                    </div>

                    <h3 class="text-2xl mb-5">Company Info</h3>

                    <div class="mb-4">
                        <label for="company" class="block text-gray-700 font-bold mb-2">Company Name</label>
                        <input type="text" id="company" name="company" class="border rounded w-full py-2 px-3"
                            placeholder="Company Name" v-model="form.company.name" />
                    </div>

                    <div class="mb-4">
                        <label for="company_description" class="block text-gray-700 font-bold mb-2">Company
                            Description</label>
                        <textarea id="company_description" name="company_description"
                            class="border rounded w-full py-2 px-3" rows="4" placeholder="What does your company do?"
                            v-model="form.company.description"></textarea>
                    </div>

                    <div class="mb-4">
                        <label for="contact_email" class="block text-gray-700 font-bold mb-2">Contact Email</label>
                        <input type="email" id="contact_email" name="contact_email"
                            class="border rounded w-full py-2 px-3" placeholder="Email address for applicants" required
                            v-model="form.company.contactEmail" />
                    </div>
                    <div class="mb-4">
                        <label for="contact_phone" class="block text-gray-700 font-bold mb-2">Contact Phone</label>
                        <input type="tel" id="contact_phone" name="contact_phone"
                            class="border rounded w-full py-2 px-3" placeholder="Optional phone for applicants"
                            v-model="form.company.contactPhone" />
                    </div>

                    <div class="flex">
                        <button class="btn btn-primary ms-auto" type="submit">
                            Save Edit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
