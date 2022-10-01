import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'

// following along with this issue:
// https://github.com/AurityLab/vue-recaptcha-v3/issues/609#issuecomment-1255015920
export function useVueRecaptcha() {
    const { vueApp } = useNuxtApp()
    const config = useRuntimeConfig()

    // TODO: How to set this up globally? Make a plugin?
    vueApp.use(VueReCaptcha, {
        siteKey: config.recaptchaSiteKey,
        // TODO: load these options from config
        loaderOptions: {
            autoHideBadge: true,
            useEnterprise: true
        },
    })
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
    return async (action) => {
        // TODO: load recaptcha JS on every page, but only execute on specific actions
        await recaptchaLoaded()
        return await executeRecaptcha(action)
    }
}
