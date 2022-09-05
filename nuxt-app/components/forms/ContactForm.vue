<script setup>
import { ref } from 'vue'
import { reset } from '@formkit/core'
import SuccessAlert from '@/components/alerts/SuccessAlert.vue'
import ErrorAlert from '@/components/alerts/ErrorAlert.vue'

const isSuccess = ref(true)
const isServerError = ref(true)

const submitHandler = async (formData) => {
    isSuccess.value = false
    isServerError.value = false
    const submission = await $fetch('/api/form/contact', {
        method: 'post',
        body: formData
    })
    // .then(res => {
    //         const data = res.data.value
    //         const error = res.error.value
    //         if (error) {
    //             console.log(error)
    //         } else {
    //             console.log(data)
    //         }
    //     },
    //     error => {
    //         console.log('exception...')
    //         console.log(error)
    //     }
    // )
    .catch((error) => {
        isServerError.value = true
        console.log(error.data)
    })
    
    console.log(submission)
    if (submission) {
        isSuccess.value = true
        reset('contactMe')
    }
}
</script>
    
<template>
    <div>
        <h2 class="mb-4 text-3xl font-medium tracking-tight">How can I help?</h2>
        <p>
            I would love to hear about your project and how I can help.
        </p>
        <hr class="mt-6 mb-12" />
        <FormKit type="form" id="contactMe" submit-label="Send Message" @submit="submitHandler" :actions="false"
            #default="{ value }">

            <SuccessAlert v-if="isSuccess" title="Thanks for the message" class="mb-6">
                <p>I look forward to working with you.</p>
            </SuccessAlert>
            <ErrorAlert v-if="isServerError" title="The server couldn't process your request" class="mb-6">
                <p>If the problem persists please reach out on one of my social accounts.</p>
            </ErrorAlert>

            <FormKit type="text" name="name" label="Your name" validation="required" />
            <FormKit type="text" prefix-icon="email" name="email" label="Your email" validation="required|email" />
            <FormKit type="textarea" name="message" label="Message" validation="required|length:6" />
            <FormKit type="submit" label="Send Message" />
            <pre wrap>{{ value }}</pre>
        </FormKit>
    </div>
</template>
    