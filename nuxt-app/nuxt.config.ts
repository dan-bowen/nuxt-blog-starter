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
        apiBaseUrl: '', // can be overridden by NUXT_API_BASE_URL environment variable

        // Keys within public, will be also exposed to the client-side
        // public: {
        //     apiBase: '' // can be overridden by NUXT_PUBLIC_API_BASE environment variable
        // }
    },
    content: {
        documentDriven: true,
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
