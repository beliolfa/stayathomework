export default function ({ store, redirect, app, route }) {
  const classroom = store.state.classroom
  if (classroom) return

  app.$fireStore.collection('subjects').where('classroom', '==', route.params.classroom).get()
  .then(data => {
    if (data.empty) {
      return redirect('/')
    }
    store.dispatch('setClassroom', route.params.classroom)
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
}
