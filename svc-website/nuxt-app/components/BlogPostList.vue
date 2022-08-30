<script setup>
const { data: blogPostList } = useAsyncData('blogPostList', () => {
    return queryContent('/blog').find()
})
</script>

<template>
    <ArticlePanel v-for="blogPost in blogPostList" :key="blogPost._path">
        <section class="pt-10 pb-12">
            <div class="text-center mb-6">
                <h3 class="text-2xl font-bold mb-4">
                    <NuxtLink :to="blogPost._path">{{ blogPost.title }}</NuxtLink>
                </h3>
                <BlogPostMeta :author="blogPost.author" :date="blogPost.dates.published" />
            </div>
            <div class="p-4">
                <div class="mx-24 my-0 text-lg">
                    {{ blogPost.description }}
                </div>
            </div>
        </section>
    </ArticlePanel>
</template>