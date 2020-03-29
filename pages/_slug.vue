<template>
  <div class="p-8">
    <h1 class="text-3xl leading-6 font-medium text-gray-900 mb-8">
      {{ subject.name }}
    </h1>
    <div>{{ subject.description }}</div>
    <SubjectDay
      v-for="(day, index) in subject.tasks"
      :key="index"
      :date="index"
      :day="day"
    />

    <div v-if="subject.resources.length">
      <h2 class="text-2xl leading-6 font-medium text-gray-900 my-8">
        Material Adicional
      </h2>
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <ul>
          <li v-for="(resource, resourceIndex) in subject.resources" :key="`resource-${resourceIndex}`" class="px-4 py-5 sm:p-6">
            <div class="my-2">{{ resource.description }}</div>
            <img v-if="resource.image" :src="resource.image" />
            <iframe v-if="resource.video" width="560" height="315" :src="resource.video" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div v-if="resource.links" class="ml-8 font-bold text-blue-500">
              <ul>
                <li v-for="link in resource.links" :key="link.title">
                  <a :href="link.url" target="_blank">{{ link.title }}</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import SubjectDay from '@/components/SubjectDay'

  export default {
    name: 'PageSubject',

    head: {
      title: 'Actividades para 3B. Colegio Anita Arnao'
    },

    components: { SubjectDay },

    computed: {
      ...mapState(['subjects']),

      subject() {
        return this.subjects.find(subject => subject.slug === this.$route.params.slug) || {}
      },
    },

    async mounted() {
      if (this.$route.hash) {
        var day = document.getElementById(`date-${this.$route.hash.slice(1)}`);
        day.scrollIntoView();
      }
    }
  }
</script>
