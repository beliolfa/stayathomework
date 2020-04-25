<template>
  <tr class="bg-white">
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
      {{ task.name }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
      {{ subject.name }}
    </td>
    <td class="px-6 py-4 .whitespace-no-wrap max-w-xs text-sm leading-5 text-gray-700 truncate">
      {{ task.description }}
    </td>
    <td class="px-6 py-4 .whitespace-no-wrap max-w-xs text-sm leading-5 text-gray-700 truncate">
      <FormattedDate class="ml-2" :date="task.date" />
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
      <a
        href="#"
        class="text-indigo-600 px-2 hover:text-indigo-900 focus:outline-none focus:underline"
        @click="$emit('edit', task.slug)"
      >Editar</a>
      <a
        href="#"
        class="text-red-600 px-2 hover:text-red-900 focus:outline-none focus:underline"
        @click="$emit('delete', task.slug)"
      >Delete</a>
    </td>
  </tr>
</template>
<script>
import FormattedDate from '@/components/FormattedDate'

export default {
  name: 'TaskListItem',

  components: {
    FormattedDate,
  },

  props: {
    task:{
      type: Object,
      default: () => ({}),
    },
    subject: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {}
  },

  computed: {},

  methods: {},
}
</script>
