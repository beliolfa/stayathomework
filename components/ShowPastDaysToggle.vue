<template>
  <div class="my-2 flex items-center">
    <span class="mr-2">Mostrar días pasados</span>
    <span
      @focus="focused = true"
      @blur="focused = false"
      class="relative inline-flex items-center justify-center flex-shrink-0 h-5 w-10 cursor-pointer focus:outline-none"
      role="checkbox"
      tabindex="0"
      @click="value = !value"
      @keydown.space.prevent="toggle"
      :aria-checked="value.toString()"
    >
      <span
        aria-hidden="true"
        :class="{ 'bg-indigo-600': value, 'bg-gray-200': !value }"
        class="absolute h-4 w-8 mx-auto rounded-full transition-colors ease-in-out duration-200"
      />
      <span
        aria-hidden="true"
        :class="{ 'translate-x-5': value, 'translate-x-0': !value, 'shadow-outline border-blue-300': focused }"
        class="absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform transition-transform ease-in-out duration-200"
      />
    </span>
  </div>
</template>

<script>
  export default {
    name: 'ShowPastDaysToggle',

    data() {
      return {
        focused: false,
      }
    },

    computed: {
      value: {
        get() {
          return this.$store.state.showPastDays
        },
        set(value) {
          this.$store.dispatch('setShowPastDays', value)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
