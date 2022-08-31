<script setup>
const props = defineProps({
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: 'info'
    }
})

const colors = {
    'info': 'bg-[#3e8ed0] text-white',
    'dark': 'bg-[#363636] text-white'
}

const formattedDate = computed(() => {
    return new Date(props.date).toDateString()
})
</script>

<template>
    <div class="flex basis-auto flex-wrap flex-grow-0 flex-shrink-0 items-center justify-center">
        <span
            class="inline-flex rounded-l-full rounded-r-none px-3 h-8 justify-center items-center whitespace-nowrap bg-[#3e8ed0] text-white text-sm"
            :class="`${colors[color]}`">{{
                    author
            }}</span>
        <span
            class="inline-flex rounded-l-none rounded-r-full px-3 h-8 justify-center items-center whitespace-nowrap bg-[#f5f5f5] text-[#4a4a4a] text-sm">{{
                    formattedDate
            }}</span>
    </div>
</template>

<style>
</style>