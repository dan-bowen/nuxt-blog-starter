<script setup>
definePageMeta({
    documentDriven: false
})
useHead({
    title: 'Homepage',
    meta: [
        {
            name: 'description',
            content: 'This is the homepage'
        }
    ]
})
</script>

<template>
    <main>
        <TheHero> A Nuxt Content v2 Blog with Tailwind </TheHero>
        <ArticleContainer>
            <BlogPostList />
        </ArticleContainer>
    </main>
</template>