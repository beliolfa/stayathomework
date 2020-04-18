<template>
  <div>
    <AdminHeader />
    <nuxt-child />
  </div>
</template>

<script>
import AdminHeader from '@/components/AdminHeader'

export default {
  name: 'AdminIndex',

  middleware: 'authenticated',

  components: { AdminHeader },
}
</script>
