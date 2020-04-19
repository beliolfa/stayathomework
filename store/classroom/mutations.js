export default {
  SET_SUBJECTS(state, subjects) {
    state.subjects = subjects
  },

  SET_SUBJECT(state, subject) {
    const index = state.subjects.findIndex(s => s.id === subject.id)
    if (index > -1) {
      return state.subjects.splice(index, 1, subject)
    }
    state.subjects.push(subject)
  },

  DELETE_SUBJECT(state, id) {
    state.subjects = state.subjects.filter(subject => subject.id !== id)
  },

  SET_TASKS(state, tasks) {
    state.tasks = tasks
  },

  SET_RESOURCES(state, resources) {
    state.resources = resources
  },

  SET_SHOW_PAST_DAYS(state, value) {
    state.showPastDays = value
  },

  SET_TASK(state, task) {
    const index = state.tasks.findIndex(t => t.id === task.id)

    if (index > -1) {
      return state.tasks.splice(index, 1, task)
    }

    return state.tasks.push(task)
  },

  DELETE_TASK(state, id) {
    state.tasks = state.tasks.filter(task => task.id !== id)
  }
}
