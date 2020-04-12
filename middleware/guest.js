export default function ({ store, redirect }) {
  const { classroom } = store.state.auth.user
  if (classroom) {
    return redirect(`/${classroom}`)
  }
}
