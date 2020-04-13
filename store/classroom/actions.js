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

  async setSubject({ commit, rootState }, formData) {
    const { classroom } = rootState.auth
    const slug = formData.slug || slugify(formData.name)
    const data = { ...formData, classroom, slug }
    const id = `${classroom}-${slug}`

    await this.$fireStore.collection('subjects').doc(id).set(data)
    commit('SET_SUBJECT', { id, ...data })
  },

  async deleteSubject({ commit }, id) {
    await this.$fireStore.collection('subjects').doc(id).delete()
    commit('DELETE_SUBJECT', id)
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

function slugify(text) {
  return text
    .toString()                     // Cast to string
    .toLowerCase()                  // Convert the string to lowercase letters
    .normalize('NFD')       // The normalize() method returns the Unicode Normalization Form of a given string.
    .trim()                         // Remove whitespace from both sides of a string
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-');        // Replace multiple - with single -
}
