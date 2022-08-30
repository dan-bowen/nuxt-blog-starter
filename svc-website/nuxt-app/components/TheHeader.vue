<script setup>
import Icon from "~~/components/Icon/Icon.vue";
</script>

<template>
    <header class="bg-white py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav class="relative z-50 flex justify-between">
                <div class="flex items-center md:gap-x-12">
                    <nuxt-link to="/">Logo</nuxt-link>
                </div>
                <div class="flex items-center gap-x-5 md:gap-x-8">
                    <div class="hidden md:block">
                        <nuxt-link to="/"
                            class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                            Contact</nuxt-link>
                    </div>
                    <nuxt-link to="/"
                        class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600">
                        <span>Subscribe</span>
                    </nuxt-link>
                    <div class="-mr-1 md:hidden">
                        <div>
                            <button
                                class="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
                                aria-label="Toggle Navigation" id="headlessui-popover-button-:R1p6:" type="button"
                                aria-expanded="false">
                                <Icon name="menu" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>