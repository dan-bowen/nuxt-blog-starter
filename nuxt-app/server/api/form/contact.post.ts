export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await useBody(event)
    const result = await $fetch(`${config.public.apiBaseUrl}/form/contact`, {
        method: 'post',
        body: body
    })

    return result
})