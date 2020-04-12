<template>
  <div class="m-8">
    <R64Input
      v-model="form.name"
      label="Nombre"
    />
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
            {{ subject && subject.slug ? 'Actualizar' : 'Crear' }}
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  const emptySubject = {
    name: '',
    description: '',
    svg: '',
    slug: '',
  }
  export default {
    name: 'SubjectForm',

    props: {
      subject: {
        type: Object,
        default: null
      }
    },

    data() {
      return {
        form: this.subject ? { ...this.subject } : emptySubject
      }
    },

    methods: {
      ...mapActions({
        setSubject: 'classroom/setSubject'
      }),

      async submit() {
        await this.setSubject(this.form)
        this.close()
      },

      close() {
        this.$modal.hide('subject-modal')
      }
    }
  }
</script>
