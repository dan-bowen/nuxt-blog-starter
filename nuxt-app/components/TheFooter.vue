<script setup>
import Icon from "@/components/Icon/Icon.vue";
</script>

<template>
    <footer>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="py-16">
                <nav class="mt-10 text-sm" aria-label="quick links">
                    <div class="-my-1 flex justify-center gap-x-6">
                        <nuxt-link
                            class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-900"
                            to="/">Features</nuxt-link>
                        <nuxt-link
                            class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-900"
                            to="/">Testimonials</nuxt-link>
                        <nuxt-link
                            class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-900"
                            to="/">Pricing</nuxt-link>
                    </div>
                </nav>
            </div>
            <div
                class="flex flex-col items-center border-t border-slate-200 py-10 sm:flex-row-reverse sm:justify-between">
                <div class="flex gap-x-6">
                    <a aria-label="Follow me on Twitter" target="_blank" href="https://twitter.com">
                        <Icon name="twitter" />
                    </a>
                    <a aria-label="Follow me on LinkedIn" target="_blank" href="https://linkedin.com">
                        <Icon name="linkedin" />
                    </a>
                    <a aria-label="Follow me on GitHub" target="_blank" href="https://github.com">
                        <Icon name="github" />
                    </a>
                </div>
                <p class="mt-6 text-sm text-slate-500 sm:mt-0">Copyright &copy; 2022 Nuxt Content Blog. All rights
                    reserved.
                </p>
            </div>
        </div>
    </footer>
</template>