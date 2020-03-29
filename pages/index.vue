<template>
  <div class="p-8">
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Actividades agrupadas por días
        </h3>
        <p class="mt-1 text-sm leading-5 text-gray-500">
          Haz clic en la materia para ver las actividades de ese día.
        </p>
      </div>
      <ul>
        <IndexRow v-for="day in days" :key="day" :day="day" />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IndexRow from '@/components/IndexRow'

export default {
  name: 'IndexView',

  components: { IndexRow },

  computed: {
    ...mapGetters(['days'])
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
