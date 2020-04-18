<template>
  <div class="h-screen flex overflow-hidden bg-gray-100" @keydown.esc="sidebarOpen = false">
    <!-- Off-canvas menu for mobile -->
    <div v-show="sidebarOpen" class="md:hidden">
      <div
        v-show="sidebarOpen"
        class="fixed inset-0 z-30 transition-opacity ease-linear duration-300"
        @click="sidebarOpen = false"
      >
        <div class="absolute inset-0 bg-gray-600 opacity-75" />
      </div>
      <div class="fixed inset-0 flex z-40">
        <div
          v-show="sidebarOpen"
          x-transition:enter-start="-translate-x-full"
          x-transition:enter-end="translate-x-0"
          x-transition:leave-start="translate-x-0"
          x-transition:leave-end="-translate-x-full"
          class="flex-1 flex flex-col max-w-xs w-full bg-indigo-800 transform ease-in-out duration-300 "
        >
          <div class="absolute top-0 right-0 -mr-14 p-1">
            <button
              v-show="sidebarOpen"
              class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
              @click="sidebarOpen = false"
            >
              <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <SidebarHeader />
            <SidebarMenu @click="sidebarOpen = false" />
          </div>
          <SidebarFooter />
        </div>
        <div class="flex-shrink-0 w-14">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64 border-r border-gray-200 bg-indigo-800">
        <div class="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <SidebarHeader />
          <SidebarMenu />
        </div>
        <SidebarFooter />
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
        <button
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
          @click.stop="sidebarOpen = true"
        >
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <main
        class="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6"
        tabindex="0"
        x-data
        x-init="$el.focus()"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 v-if="$route.path.startsWith('/admin')" class="text-3xl">
            Admin
          </h1>
          <ShowPastDaysToggle v-else />
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <nuxt />
        </div>
      </main>
    </div>
  </div>
</template>
<script>
// import { mapState, mapActions } from 'vuex'
import SidebarHeader from '@/components/SidebarHeader'
import SidebarMenu from '@/components/SidebarMenu'
import SidebarFooter from '@/components/SidebarFooter'
import ShowPastDaysToggle from '@/components/ShowPastDaysToggle'

export default {
  components: { SidebarHeader, SidebarMenu, SidebarFooter, ShowPastDaysToggle },

  data() {
    return {
      sidebarOpen: false,
    }
  },

  // computed: {
  //   ...mapState['classroom']
  // },

  created() {
    // if (this.classroom) return
    // this.$fireStore.collection('subjects').where('classroom', '==', this.$route.params.classroom).get()
    // .then(data => {
    //   if (data.empty) {
    //     return this.$router.push('/')
    //   }
    //   this.setClassroom(this.$route.params.classroom)
    // })
    // .catch(err => {
    //   console.log('Error getting documents', err);
    // });
  },

  // methods: {
  //   ...mapActions(['setClassroom'])
  // }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
