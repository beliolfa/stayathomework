<template>
  <div class="m-8">
    <R64Input
      v-model="form.name"
      label="Nombre"
    />
    <div class="mb-1 h-24">
      <label for="date">Fecha</label>
      <input type="date" class="leading-snug outline-none mt-1 px-3 py-2 block w-full text-gray-900 rounded-md focus:shadow-outline focus:border-blue-400 border border-gray-400 placeholder-gray-600" id="date" v-model="form.date" />

    </div>
    <R64Select label="Asignatura" :options="subjectOptions" v-model="form.subject" />
    <R64Textarea
      v-model="form.description"
      label="Descripción"
    />
    <div class="mt-8 border-t border-gray-200 pt-5">
      <div class="flex justify-end">
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
            @click="close"
          >
            Cancelar
          </button>
        </span>
        <span class="ml-3 inline-flex rounded-md shadow-sm">
          <button
            type="button"
            class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            @click="submit"
          >
            {{ task && task.slug ? 'Actualizar' : 'Crear' }}
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  const emptyTask = {
    name: '',
    description: '',
    date: '',
    subject: null,
    slug: '',
  }
  export default {
    name: 'TaskForm',

    props: {
      task: {
        type: Object,
        default: null
      }
    },

    data() {
      return {
        form: this.task ? { ...this.task } : emptyTask
      }
    },

    computed: {
      ...mapState({
        subjects: state => state.classroom.subjects
      }),

      subjectOptions() {
        return this.subjects.map(subject => ({ value: subject.slug, label: subject.name }))
      },
    },

    methods: {
      ...mapActions({
        setTask: 'classroom/setTask'
      }),

      async submit() {
        await this.setTask(this.form)
        this.close()
      },

      close() {
        this.$modal.hide('task-modal')
      }
    }
  }
</script>
