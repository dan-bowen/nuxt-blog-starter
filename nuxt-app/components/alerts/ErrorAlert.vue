<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="rounded-md bg-red-50 p-4">
        <div class="flex">
            <div class="flex-shrink-0">
                <Icon name="cancel-circle2" size="16px" class="text-red-400" aria-hidden="true" />
            </div>
            <div class="ml-3">
                <h3 class="font-medium text-red-800">
                    {{ title }}
                </h3>
                <div class="mt-2 text-red-700">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>