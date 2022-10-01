<script setup>
import { ref } from 'vue'
import { reset } from '@formkit/core'
import SuccessAlert from '@/components/alerts/SuccessAlert.vue'
import ErrorAlert from '@/components/alerts/ErrorAlert.vue'

let recaptcha = null
const isSuccess = ref(false)
const isServerError = ref(false)


onMounted(() => {
    recaptcha = useVueRecaptcha()
})

const submitHandler = async (formData) => {
    isSuccess.value = false
    isServerError.value = false

    // get recaptcha token and merge with post body
    const token = await recaptcha('contact_form')
    formData['_meta'] = {
        'recaptcha_token': token
    }

    await $fetch('/api/form/contact', {
        method: 'post',
        body: formData
    })
    .then(res => {
            const data = res.data
            const errors = res.errors
            // console.log('success', data)
            // console.log('success:errors', errors)

            isSuccess.value = true
            reset('contactMe')
        }
    )
    .catch((error) => {
        isServerError.value = true
        // console.log('catch', error.data)
    })
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
        </FormKit>
    </div>
</template>
    