<template>
  <nuxt-link :to="{ path: `/${subject.slug}`, hash: day }" class="mr-6 flex items-center text-sm leading-5 text-gray-500 mb-2">
    <svg class="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24">
      <path :d="subject.svg"/>
    </svg>
    {{ subject.name }}
  </nuxt-link>
</template>

<script>
  export default {
    name: 'IndexRowSubject',

    props: {
      subject: {
        type: Object,
        required: true
      },
      day: {
        type: String,
        required: true
      }
    }
  }
</script>
