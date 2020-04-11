<template>
  <li v-show="shouldShow" :class="{'opacity-50': isPast }">
    <a href="#" class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
      <div class="px-4 py-4 sm:px-6">
        <div class="flex flex-col sm:flex-row items-center justify-between">
          <div class="flex text-sm leading-5 font-medium text-indigo-600 truncate mb-2">
            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
            </svg>
            <FormattedDate class="ml-2" :date="day" />
          </div>
          <div class="ml-2 flex-shrink-0 flex">
            <span
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
              :class="{
                'bg-red-100 text-red-800': isPast,
                'bg-green-100 text-green-800': isToday,
                'bg-yellow-100 text-yellow-800': isFuture,
              }"
            >
              {{ badgeText }}
            </span>
          </div>
        </div>
        <div class="mt-2 sm:flex sm:justify-between">
          <div class="sm:flex flex-wrap">
            <IndexRowSubject v-for="subject in subjects" :key="subject.slug" :subject="subject" :day="day" />
          </div>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import { isPast, parseISO, isToday, isFuture } from 'date-fns'
  import FormattedDate from '@/components/FormattedDate'
  import IndexRowSubject from '@/components/IndexRowSubject'

  export default {
    name: 'IndexRow',

    components: { FormattedDate, IndexRowSubject },

    props: {
      day: {
        type: String,
        required: true
      }
    },

    computed: {
      ...mapState({
        showPastDays: state => state.classroom.showPastDays
      }),

      ...mapGetters({
        subjectsByDate: 'classroom/subjectsByDate'
      }),

      subjects() {
        return this.subjectsByDate(this.day)
      },

      isoDate() {
        return parseISO(this.day)
      },

      isPast() {
        return isPast(this.isoDate) && !this.isToday
      },

      isToday() {
        return isToday(this.isoDate)
      },

      isFuture() {
        return isFuture(this.isoDate)
      },

      badgeText() {
        if(this.isPast) {
          return 'Pasado'
        }

        if(this.isFuture) {
          return 'Aún no toca :)'
        }

        return '¡Hoy!'
      },

      shouldShow() {
        if (this.showPastDays) {
          return true
        }
        return !this.isPast
      }
    }
  }
</script>
