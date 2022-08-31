<template>
    <section
        class="flex flex-col items-stretch justify-between bg-[#3e8ed0] bg-[linear-gradient(141deg, #208fbc 0, #3e8ed0 71%, #4d83db 100%)] text-white">
        <div class="h-[400px]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
                <h1 class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white">
                    <slot />
                </h1>
                <div v-if="!!$slots.subtitle" class="mt-4">
                    <slot name="subtitle" />
                </div>
            </div>
        </div>
    </section>
</template>