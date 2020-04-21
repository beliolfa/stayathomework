<template>
  <div class="my-4">
    <div class="sm:hidden">
      <select class="form-select block w-full" @change="event => $router.push(event.target.value)">
        <option
          v-for="(navItem, index) in navItems"
          :key="index"
          :value="navItem.path"
          :selected="$route.path === navItem.path"
        >
          {{ navItem.text }}
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="flex -mb-px">
          <nuxt-link
            v-for="(navItem, index) in navItems"
            :key="index"
            class="group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
            :class="{ 'ml-8': index > 0 }"
            :to="navItem.path"
            exact-active-class="border-indigo-500 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
          >
            <svg
              class="-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600"
              :class="{
                'text-indigo-500 group-focus:text-indigo-600': $route.path === navItem.path,
              }"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" :d="navItem.svg" clip-rule="evenodd" />
            </svg>
            <span>{{ navItem.text }}</span>
          </nuxt-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminHeader',

  data() {
    return {
      navItems: [
        {
          text: 'Asignaturas',
          path: '/admin/',
          svg:
            'M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z',
        },
        {
          text: 'Tareas',
          path: '/admin/tasks',
          svg:
            'M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z',
        },
        {
          text: 'Recursos',
          path: '/admin/resources',
          svg:
            'M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z',
        },
      ],
    }
  },
}
</script>
