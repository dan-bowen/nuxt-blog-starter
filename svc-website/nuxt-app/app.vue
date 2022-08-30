<script setup>
import ContactModal from './components/modals/ContactModal.vue'

useHead({
  title: 'Nuxt Blog Starter',
  meta: [
    { name: 'description', content: 'Nuxt Blog Starter.' }
  ],
  bodyAttrs: {
    class: 'bg-[#f0f2f4]'
  }
})
</script>

<template>
  <nuxt-layout>
    <nuxt-page></nuxt-page>
    <contact-modal></contact-modal>
  </nuxt-layout>
</template>

<style>
</style>