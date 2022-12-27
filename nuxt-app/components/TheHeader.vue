<script setup>
import Icon from '~~/components/Icon/Icon.vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>

<template>
    <header class="bg-white py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav class="relative z-50 flex justify-between">
                <div class="flex items-center md:gap-x-12">
                    <nuxt-link to="/" class="text-2xl font-bold">My Nuxt 3 Blog</nuxt-link>
                    <div class="hidden md:flex md:gap-x-6">
                        <nuxt-link to="/"
                            class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                            Features</nuxt-link>
                        <nuxt-link to="/"
                            class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                            Testimonials</nuxt-link>
                        <nuxt-link to="/"
                            class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                            Pricing</nuxt-link>

                        <Popover class="relative" v-slot="{ open }">
                            <PopoverButton
                                :class="[open ? 'text-slate-900' : 'text-slate-700', 'inline-block items-center rounded-lg py-1 px-2 text-sm hover:bg-slate-100 hover:text-slate-900']">
                                <span>Solutions</span>
                                <Icon name="arrow-down2" size="14px"
                                    :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" />
                            </PopoverButton>
                            <transition enter-active-class="transition ease-out duration-200"
                                enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                                leave-active-class="transition ease-in duration-150"
                                leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                                <PopoverPanel
                                    class="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                                    <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            <nuxt-link to="/"
                                                class="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                                                <p class="text-base font-medium text-gray-900">Projects</p>
                                                <p class="mt-1 text-sm text-gray-500">Check out our portfolio</p>
                                            </nuxt-link>
                                            <nuxt-link to="/"
                                                class="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                                                <p class="text-base font-medium text-gray-900">Articles</p>
                                                <p class="mt-1 text-sm text-gray-500">Articles about our solutions</p>
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </PopoverPanel>
                            </transition>
                        </Popover>
                    </div>
                </div>

                <div class="flex items-center gap-x-5 md:gap-x-8">
                    <div class="hidden md:block">
                        <nuxt-link to="/contact"
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
                                class="flex relative z-10 h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
                                aria-label="Toggle Navigation" id="headlessui-popover-button-:R1p6:" type="button"
                                aria-expanded="false">
                                <Icon name="menu7" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>