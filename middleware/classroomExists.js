export default async function({ store, redirect, app, route }) {
  const { classroom, user } = store.state.auth

  if (user.classroom && user.classroom !== route.params.classroom) {
    return redirect(`/${user.classroom}`)
  }

  if (classroom || user.classroom) return

  await store.dispatch('auth/setClassroom', route.params.classroom)
  await store.dispatch('classroom/init')

  if (!store.state.classroom.subjects.length) {
    return redirect('/')
  }
}
