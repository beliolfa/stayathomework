<template>
<div>
  <modal name="subject-modal" height="auto">
    <SubjectForm :subject="subject" />
  </modal>
  <DangerConfirm
    title="Eliminar Asignatura"
    text="¿Estás seguro que quieres eliminar esta asignatura? Todas las tareas y recursos asociados a esta asignatura quedarán inaccesibles. Esta acción no se puede deshacer."
    :open="showConfirm"
    @confirm="removeSubject"
    @cancel="showConfirm = false"
  />
  <AdminSectionHeader @click="createSubject">Crear Asignatura</AdminSectionHeader>
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
                Icono
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Descripción
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="subject in subjects"
              :key="subject.slug"
              class="bg-white"
            >
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                {{ subject.name }}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                <svg
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
                </svg>
              </td>
              <td class="px-6 py-4 .whitespace-no-wrap max-w-xs text-sm leading-5 text-gray-700 truncate">
                {{ subject.description }}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a
                  href="#"
                  class="text-indigo-600 px-2 hover:text-indigo-900 focus:outline-none focus:underline"
                  @click="editSubject(subject.slug)"
                >Editar</a>
                <a
                  href="#"
                  class="text-red-600 px-2 hover:text-red-900 focus:outline-none focus:underline"
                  @click="openDeleteModal(subject.slug)"
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
  import SubjectForm from '@/components/admin/SubjectForm'

  export default {
    name: 'AdminSubjects',

    middleware: 'authenticated',

    components: { AdminSectionHeader, SubjectForm, DangerConfirm },

    data() {
      return {
        subject: null,
        showConfirm: false
      }
    },

    computed: {
      ...mapState({
        subjects: state => state.classroom.subjects
      })
    },

    methods: {
      ...mapActions({
        deleteSubject: 'classroom/deleteSubject'
      }),
      openDeleteModal(slug) {
        this.subject = this.subjects.find(subject => subject.slug === slug)
        this.showConfirm = true
      },
      removeSubject() {
        this.deleteSubject(this.subject.id)
        this.showConfirm = false
      },

      createSubject() {
        this.subject = null
        this.$modal.show('subject-modal')
      },
      editSubject(slug) {
        this.subject = this.subjects.find(subject => subject.slug === slug)
        this.$modal.show('subject-modal')
      }
    }
  }
</script>
