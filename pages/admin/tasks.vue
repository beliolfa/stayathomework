<template>
<div>
  <modal name="task-modal" height="auto">
      Task Modal
    <!-- <SubjectForm :subject="subject" /> -->
  </modal>
  <DangerConfirm
    title="Eliminar Tarea"
    text="¿Estás seguro que quieres eliminar esta tarea? Esta acción no se puede deshacer."
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
                Asignatura
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Orden
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Descripción
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="task in tasks"
              :key="task.id"
              class="bg-white"
            >
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                <SubjectName :slug="task.subject" />
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                {{ task.date }}
                <!-- <svg
                  class="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="subject.svg"
                  />
                </svg> -->
              </td>
              <td class="px-6 py-4 .whitespace-no-wrap max-w-xs text-sm leading-5 text-gray-700 truncate">
                {{ task.order }}
              </td>
              <td class="px-6 py-4 .whitespace-no-wrap max-w-xs text-sm leading-5 text-gray-700 truncate">
                {{ task.description }}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a
                  href="#"
                  class="text-indigo-600 px-2 hover:text-indigo-900 focus:outline-none focus:underline"
                  @click="editTask(task.id)"
                >Editar</a>
                <a
                  href="#"
                  class="text-red-600 px-2 hover:text-red-900 focus:outline-none focus:underline"
                  @click="openDeleteModal(task.id)"
                >Delete</a>
              </td>
            </tr>
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
  import SubjectName from '@/components/SubjectName'

  export default {
    name: 'AdminTasks',

    middleware: 'authenticated',

    components: { AdminSectionHeader, DangerConfirm, SubjectName },

    data() {
      return {
        task: null,
        showConfirm: false
      }
    },

    computed: {
      ...mapState({
        tasks: state => state.classroom.tasks
      })
    },

    methods: {
      ...mapActions({
        deleteSubject: 'classroom/deleteSubject'
      }),

      openDeleteModal(id) {
        this.task = this.tasks.find(task => task.id === id)
        this.showConfirm = true
      },

      removeTask() {
        // this.deleteSubject(this.task.id)
        this.showConfirm = false
      },

      createTask() {
        this.task = null
        this.$modal.show('task-modal')
      },

      editTask(id) {
        this.task = this.tasks.find(task => task.id === id)
        this.$modal.show('task-modal')
      }
    }
  }
</script>
