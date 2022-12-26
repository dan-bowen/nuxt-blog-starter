// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@formkit/nuxt',
        '@pinia/nuxt'
    ],
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiBaseUrl: '', // env: by NUXT_API_BASE_URL

        // Keys within public, will be also exposed to the client-side
        public: {
            recaptchaSiteKey: '' // env: NUXT_PUBLIC_RECAPTCHA_SITE_KEY
        }
    },
    content: {
        documentDriven: {
            injectPage: false // turn off injectPage because we are using our own [...slug].vue
        },
        highlight: {
            theme: 'github-dark',
            preload: [
                'py'
            ]
        }
    },
    typescript: {
        shim: false
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    css: [
        "~/assets/css/tailwind.css"
    ]
})
