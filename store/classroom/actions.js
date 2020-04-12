export default {
  async init({ dispatch }) {
    await dispatch('getSubjects')
    await dispatch('getTasks')
    await dispatch('getResources')
  },

  setShowPastDays({ commit }, value) {
    commit('SET_SHOW_PAST_DAYS', value)
  },

  getSubjects({ commit, rootState }) {
    return this.$fireStore.collection('subjects').where('classroom', '==', rootState.auth.classroom).get()
    .then(({ docs }) => {
      commit('SET_SUBJECTS', docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
    .catch(error => {
      console.log('Error getting subjects', error);
    });
  },

  getTasks({ commit, rootState }) {
    return this.$fireStore.collection('tasks').where('classroom', '==', rootState.auth.classroom).get()
    .then(({ docs }) => {
      commit('SET_TASKS', docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
    .catch(error => {
      console.log('Error getting tasks', error);
    });
  },

  getResources({ commit, rootState }) {
    return this.$fireStore.collection('resources').where('classroom', '==', rootState.auth.classroom).get()
    .then(({ docs }) => {
      commit('SET_RESOURCES', docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
    .catch(error => {
      console.log('Error getting resources', error);
    });
  }
}
