<script setup>
import { ref } from 'vue'
import { reset } from '@formkit/core'

const submitted = ref(false)

const submitHandler = async (formData) => {
    const { data, pending, error, refresh } = await useFetch('/api/form/contact', {
        method: 'post',
        body: formData
    })

    submitted.value = true
    reset('contactMe')
}
</script>
    
<template>
    <div>
        <h2 class="mb-4 text-3xl font-medium tracking-tight">How can I help?</h2>
        <p>
            I would love to hear about your project and how I can help.
        </p>
        <hr class="mt-6 mb-12" />
        <FormKit type="form" id="contactMe" :form-class="submitted ? 'hide' : 'show'" submit-label="Send Message"
            @submit="submitHandler" :actions="false" #default="{ value }">
            <FormKit type="text" name="name" label="Your name" validation="required" />
            <FormKit type="text" prefix-icon="email" name="email" label="Your email" validation="required|email" />
            <FormKit type="textarea" name="message" label="Message" validation="required|length:6" />
            <FormKit type="submit" label="Send Message" />
            <pre wrap>{{ value }}</pre>
        </FormKit>
    </div>
</template>
    