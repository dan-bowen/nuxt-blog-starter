<script setup>
const { data: blogPostList } = useAsyncData('blogPostList', () => {
    return queryContent('/blog').find()
})
</script>

<template>
    <div v-for="blogPost in blogPostList" :key="blogPost._path"
        class="mt-24 text-[#4a4a4a] bg-white shadow-gray-500/50 shadow-lg rounded-sm">
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
    </div>
</template>