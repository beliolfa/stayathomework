<template>
  <nuxt-link :to="{ path: `/${classroom}/${subjectObject.slug}`, hash: day }" class="mr-6 flex items-center text-sm leading-5 text-gray-500 mb-2">
    <svg class="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24">
      <path :d="subjectObject.svg"/>
    </svg>
    {{ subjectObject.name }}
  </nuxt-link>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'IndexRowSubject',

    props: {
      subject: {
        type: String,
        required: true
      },
      day: {
        type: String,
        required: true
      }
    },

    computed: {
      ...mapState({
        classroom: state => state.auth.classroom,
      }),

      ...mapGetters({
        subjectBySlug: 'classroom/subjectBySlug',
      }),

      subjectObject() {
        return this.subjectBySlug(this.subject)
      },
    }
  }
</script>
