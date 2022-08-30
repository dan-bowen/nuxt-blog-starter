<script setup>
const { path } = useRoute()

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
    <main>
        <TheHero>
            <template v-slot:default>{{ blogPost.title }}</template>
            <template v-slot:subtitle>
                <BlogPostMeta :author="blogPost.author" :date="blogPost.dates.published" color="dark" />
            </template>
        </TheHero>
        <ArticleContainer>
            <ArticlePanel>
                <section class="prose pt-10 pb-12">
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