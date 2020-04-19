<template>
  <div>
    <modal name="task-modal" height="auto">
      <TaskForm :task="task" />
    </modal>

    <DangerConfirm
      title="Eliminar Tarea"
      text="¿Estás seguro que quieres eliminar esta Tarea? Esta acción no se puede deshacer."
      :open="showConfirm"
      @confirm="removeTask"
      @cancel="showConfirm = false"
    />

    <AdminSectionHeader @click="createTask">Crear Tarea</AdminSectionHeader>

    <div class="flex flex-col">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Asignatura
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Descripción
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody>
            <TaskListItem
              v-for="taskItem in tasks"
              :key="taskItem.slug"
              :task="taskItem"
              :subject="getSubjectFromTask(taskItem)"
              @edit="editTask"
              @delete="openDeleteModal"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import AdminSectionHeader from '@/components/AdminSectionHeader'
import DangerConfirm from '@/components/DangerConfirm'
import TaskForm from '@/components/admin/TaskForm'
import TaskListItem from '@/components/tasks/TaskListItem'

export default {
  name: 'AdminTasks',

  components: {
    AdminSectionHeader,
    TaskForm,
    TaskListItem,
    DangerConfirm,
  },

  data() {
    return {
      task: null,
      showConfirm: false
    }
  },

  computed: {
      ...mapState({
        subjects: state => state.classroom.subjects,
        tasks: state => state.classroom.tasks,
      }),
    },

  methods: {
    ...mapActions({
      deleteTask: 'classroom/deleteTask'
    }),

    createTask() {
      this.task = null
      this.$modal.show('task-modal')
    },

    openDeleteModal(slug) {
      this.task = this.tasks.find(t => t.slug === slug)
      this.showConfirm = true
    },

    removeTask() {
      this.deleteTask(this.task.id)
      this.showConfirm = false
    },

    editTask(slug) {
      this.task = this.tasks.find(t => t.slug === slug)
      this.$modal.show('task-modal')
    },

    getSubjectFromTask(task) {
      return this.subjects.find(s => s.slug === task.subject)
    }
  }
}
</script>
