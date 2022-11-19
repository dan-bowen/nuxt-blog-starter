export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await readBody(event)
    const result = await $fetch(`${config.apiBaseUrl}/form/contact`, {
        method: 'post',
        body: body
    })

    return result
})