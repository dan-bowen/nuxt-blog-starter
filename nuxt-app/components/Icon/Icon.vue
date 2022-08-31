<script setup>
import { Icomoon } from "vue-icomoon";
import iconSet from "./selection.json";

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    size: {
        type: [Number, String],
        default: '20px'
    },
    color: {
        type: String,
        default: '#82899a'
    },
    style: {
        type: Object,
        default: {}
    },
    title: {
        type: String,
        default: null
    },
    class: {
        type: String,
        required: false
    },
    disableFill: {
        type: Boolean,
        default: false
    },
    removeInitialStyle: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <icomoon :iconSet="iconSet" v-bind="$props" />
</template>