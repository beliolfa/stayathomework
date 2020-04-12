<template>
  <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
    <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
      <div class="ml-4 mt-2"></div>
      <div class="ml-4 mt-2 flex-shrink-0">
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
            @click="$emit('click')"
          >
            <slot />
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdminSectionHeader'
  }
</script>
