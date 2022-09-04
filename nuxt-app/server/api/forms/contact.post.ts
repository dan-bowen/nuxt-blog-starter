export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await useBody(event)
    const result = await $fetch(`${config.public.apiBaseUrl}/forms/contact`, {
        method: 'post',
        body: body
    })

    return result
})