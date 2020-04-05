export default function ({ store, redirect }) {
  const { classroom } = store.state.user
  if (classroom) {
    return redirect(`/${classroom}`)
  }
}
