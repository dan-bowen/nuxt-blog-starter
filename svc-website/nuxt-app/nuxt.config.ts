import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@pinia/nuxt'
    ],
    // content: {
    //     highlight: {
    //         theme: 'github-light'
    //     }
    // },
    typescript: {
        shim: false
    },
    // vite: {
    //     server: {
    //         hmr: {
    //             overlay: false
    //         }
    //     }
    // },
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
