<template>
  <div class="flex-shrink-0 flex border-t border-indigo-700 p-4">
    <div class="flex-shrink-0 group block focus:outline-none">
      <div class="flex items-center">
        <div class="ml-3">
          <div class="text-sm leading-5 font-medium text-white">
            Clase de 3B
          </div>
          <div v-if="user.uid" class="text-xs leading-4 font-medium text-indigo-300 group-hover:text-indigo-100 group-focus:underline transition ease-in-out duration-150 cursor-pointer" @click="logout">
           Logout
          </div>
          <nuxt-link to="/login" v-else class="text-xs leading-4 font-medium text-indigo-300 group-hover:text-indigo-100 group-focus:underline transition ease-in-out duration-150 cursor-pointer" @click="logout">
           Login
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'SidebarFooter',

    computed: {
      ...mapState(['user'])
    },

    methods: {
      async logout() {
        await this.$fireAuth.signOut()
        this.$router.push('/')
      }
    }
  }
</script>
