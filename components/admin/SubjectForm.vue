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
            @click="$modal.hide('subject-create-modal')"
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
            Añadir
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SubjectForm',

    data() {
      return {
        form: {
          name: '',
          description: '',
          svg: '',
          classroom: 'test',
          slug: 'lengua',
        }
      }
    },

    methods: {
      submit() {
        this.$fireStore.collection('subjects').add(this.form).then(ref => {
          console.log('Added document with ID: ', ref.id);
        });
      }
    }
  }
</script>
