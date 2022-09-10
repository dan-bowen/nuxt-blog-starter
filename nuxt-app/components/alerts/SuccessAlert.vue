<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="rounded-md bg-green-50 p-4">
        <div class="flex">
            <div class="flex-shrink-0">
                <Icon name="checkmark-circle" size="16px" class="text-green-400" aria-hidden="true" />
            </div>
            <div class="ml-3">
                <h3 class="font-medium text-green-800">
                    {{ title }}
                </h3>
                <div class="mt-2 text-green-700">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>