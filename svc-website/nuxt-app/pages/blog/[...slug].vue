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
            <div class="mt-24 text-[#4a4a4a] bg-white shadow-gray-300 shadow-lg rounded-sm">
                <section class="prose pt-10 pb-12">
                    <div class="p-4">
                        <div class="mx-24 my-0 text-lg">
                            <ContentDoc />
                        </div>
                    </div>
                </section>
            </div>
        </ArticleContainer>
    </main>
</template>