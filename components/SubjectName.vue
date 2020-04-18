<template>
  <span>
    {{ name }}
  </span>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SubjectName',

    props: {
      slug: String,
      required: true
    },

    computed: {
      ... mapGetters({
        subjectBySlug: 'classroom/subjectBySlug',
      }),

      name() {
        return this.subjectBySlug(this.slug).name
      }
    }
  }
</script>
