<script setup>
useHead({
  meta: [
    {
      name: 'copyright',
      content: '© 2022 DanBuilds'
    }
  ],
  bodyAttrs: {
    class: 'bg-[#f0f2f4]'
  }
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>