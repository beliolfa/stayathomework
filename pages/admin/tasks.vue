<template>
  <div>
    <AdminSectionHeader @click="createTask">Crear Tarea</AdminSectionHeader>

    <modal name="task-modal" height="auto">
      <TaskForm :task="task" />
    </modal>
  </div>
</template>
<script>
import AdminSectionHeader from '@/components/AdminSectionHeader'
import TaskForm from '@/components/admin/TaskForm'

export default {
  name: 'AdminTasks',

  components: {
    AdminSectionHeader,
    TaskForm,
  },

  data() {
    return {
      task: null,
      showConfirm: false
    }
  },

  methods: {
    createTask() {
      this.subject = null
      this.$modal.show('task-modal')
    },
  }
}
</script>
