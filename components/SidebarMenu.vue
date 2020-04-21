<template>
  <nav class="mt-5 flex-1 px-2 bg-indigo-800">
    <nuxt-link
      :to="`/${classroom}/`"
      class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-indigo-300 rounded-md focus:outline-none focus:bg-indigo-700 transition ease-in-out duration-150"
      active-class="text-white bg-indigo-900"
      exact
      @click.native="$emit('click', {})"
    >
      <svg
        class="mr-3 h-6 w-6 text-indigo-400 group-focus:text-indigo-300 transition ease-in-out duration-150"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      Agrupado por días
    </nuxt-link>
    <nuxt-link
      v-for="subject in subjects"
      :key="subject.name"
      class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-indigo-300 rounded-md hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition ease-in-out duration-150"
      active-class="text-white bg-indigo-900"
      exact
      :to="`/${classroom}/${subject.slug}`"
      @click.native="$emit('click', subject)"
    >
      <svg
        class="mr-3 h-6 w-6 text-indigo-400 group-hover:text-indigo-300 group-focus:text-indigo-300 transition ease-in-out duration-150"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="subject.svg" />
      </svg>
      {{ subject.name }}
    </nuxt-link>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SidebarMenu',

  computed: {
    ...mapState({
      subjects: state => state.classroom.subjects,
      classroom: state => state.auth.classroom,
    }),
  },
}
</script>
