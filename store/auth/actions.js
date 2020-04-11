export default {
  setClassroom({ commit }, value) {
    commit('SET_CLASSROOM', value)
  },

  onAuthStateChangedAction({ commit, dispatch }, { authUser }) {
    if (!authUser) {
      return commit('SET_USER', {})
    }

    const { uid, email, displayName } = authUser

    commit('SET_USER', {
      uid,
      classroom: displayName,
      email,
    })

    commit('SET_CLASSROOM', displayName)
    dispatch('classroom/init', null, { root: true })
  }
}
