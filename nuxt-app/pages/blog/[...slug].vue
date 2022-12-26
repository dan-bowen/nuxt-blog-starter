<script setup>
const { page } = useContent()
</script>

<template>
    <main>
        <TheHero>
            <template v-slot:default>{{ page.title }}</template>
            <template v-slot:subtitle>
                <BlogPostMeta :author="page.author" :date="page.dates.published" color="dark" />
            </template>
        </TheHero>
        <ArticleContainer>
            <ArticlePanel>
                <section class="prose max-w-none pt-10 pb-12">
                    <div class="p-4">
                        <div class="mx-24 my-0 text-lg">
                            <ContentDoc />
                        </div>
                    </div>
                </section>
            </ArticlePanel>
        </ArticleContainer>
    </main>
</template>