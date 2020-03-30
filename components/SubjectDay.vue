<template>
  <div v-show="shouldShow" class="bg-white overflow-hidden shadow rounded-lg mt-4">
    <div class="border-b border-gray-200 px-4 py-5 sm:px-6 font-bold text-blue-500">
      <a :id="`date-${date}`"><FormattedDate :date="date" /></a>
    </div>
    <ol v-if="day.tasks.length">
      <li v-for="(task, taskIndex) in day.tasks" :key="`task-${taskIndex}`" class="px-4 py-5 sm:p-6">
        <span class="font-bold mr-2">{{ taskIndex + 1 }}.</span>
        <span>{{ task.description }}</span>
        <img v-if="task.image" :src="task.image">
      </li>
    </ol>
    <div v-if="day.resources" class="border-t border-gray-200 px-4 py-4 sm:px-6">
      <dt class="text-sm leading-5 font-medium text-gray-500 mb-2">
        Recursos Relacionados
      </dt>
      <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
        <ul class="border border-gray-200 rounded-md">
          <li
            v-for="(resource, index) in day.resources"
            :key="index"
            class="border-t border-gray-200 pl-3 pr-4 py-3 flex flex-col sm:flex-row items-center justify-between text-sm leading-5"
          >
            <div class="w-full sm:w-0 flex-1 flex items-center">
              <svg class="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"/>
              </svg>
              <span class="ml-2 flex-1 w-0 sm:truncate">
                {{ resource.title }}
              </span>
            </div>
            <div class="mt-2 ml-0 sm:mt-0 sm:ml-4 flex-shrink-0">
              <a :href="resource.url" target="_blank" class="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
                Descarga
              </a>
            </div>
          </li>
        </ul>
      </dd>
    </div>
  </div>
</template>

<script>
  import { isPast, isToday, parseISO } from 'date-fns'
  import { mapState } from 'vuex'
  import FormattedDate from '@/components/FormattedDate'

  export default {
    name: 'SubjectDay',

    components: { FormattedDate },

    props: {
      day: {
        type: Object,
        required: true,
      },

      date: {
        type: String,
        required: true
      }
    },

    computed: {
      ...mapState(['showPastDays']),

      isPast() {
        const date = parseISO(this.date)
        return isPast(date) && !isToday(date)
      },

      shouldShow() {
        if (this.showPastDays) {
          return true
        }
        return !this.isPast
      }
    },
  }
</script>
