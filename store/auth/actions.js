export default {
  setClassroom({ commit }, value) {
    commit('SET_CLASSROOM', value)
  },

  onAuthStateChangedAction({ commit, dispatch }, { authUser }) {
    if (!authUser) {
      return commit('SET_USER', {})
    }

    const { uid, email } = authUser
    const classroom = email.replace('@stayathomework.app','');

    commit('SET_USER', {
      uid,
      classroom,
      email,
    })

    commit('SET_CLASSROOM', classroom)
    dispatch('classroom/init', null, { root: true })
  }
}
