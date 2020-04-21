<template>
  <span>{{ formattedDate }}</span>
</template>
<script>
import { format, parseISO } from 'date-fns'
import locale from 'date-fns/locale/es'

export default {
  name: 'FormattedDate',

  props: {
    date: {
      type: String,
      required: true,
    },
  },

  computed: {
    formattedDate() {
      const formattedDate = format(parseISO(this.date), "iiii, dd 'de' MMMM 'de' yyyy", { locale })
      return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
    },
  },
}
</script>
