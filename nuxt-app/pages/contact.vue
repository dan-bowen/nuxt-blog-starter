<script setup>
import ContactForm from '@/components/forms/ContactForm.vue'
</script>

<template>
    <main>
        <TheHero>Contact Me</TheHero>
        <ArticleContainer>
            <ArticlePanel>
                <section class="prose pt-10 pb-12">
                    <div class="p-4">
                        <div class="mx-24 my-0 text-lg">
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </ArticlePanel>
        </ArticleContainer>
    </main>
</template>