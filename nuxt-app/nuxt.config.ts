import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@formkit/nuxt',
        '@pinia/nuxt'
    ],
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: '',
        // Keys within public, will be also exposed to the client-side
        public: {
            apiBaseUrl: ''
        }
    },
    content: {
        documentDriven: true
    },
    typescript: {
        shim: false
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {}
                }
            }
        }
    },
    css: [
        "~/assets/css/tailwind.css"
    ]
})
