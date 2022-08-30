<script setup>
const isMobileNavOpen = ref(false)
</script>

<template>
    <div>
        <header class="bg-white py-10">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav class="relative z-50 flex justify-between">
                    <div class="flex items-center md:gap-x-12">
                        <nuxt-link to="/">Logo</nuxt-link>
                    </div>
                    <div class="flex items-center gap-x-5 md:gap-x-8">
                        <div class="hidden md:block">
                            <nuxt-link to="/">Contact</nuxt-link>
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
                                    <!-- <svg aria-hidden="true" class="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                                    fill="none" stroke-width="2" stroke-linecap="round">
                                    <path d="M0 1H14M0 7H14M0 13H14" class="origin-center transition"></path>
                                    <path d="M2 2L12 12M12 2L2 12" class="origin-center transition scale-90 opacity-0">
                                    </path>
                                </svg> -->
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>