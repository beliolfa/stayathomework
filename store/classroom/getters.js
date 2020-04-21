export default {
  days: state => {
    const days = new Set()
    state.tasks.forEach(task => {
      days.add(task.date)
    })
    return [...days].sort()
  },

  daysBySubject: (state, getters) => subject => {
    const days = new Set()
    getters.tasksBySubject(subject).forEach(task => {
      days.add(task.date)
    })
    return [...days].sort()
  },

  tasksBySubject: state => subject => state.tasks.filter(task => task.subject === subject),

  resourcesBySubject: state => subject =>
    state.resources.filter(resource => resource.subject === subject),

  tasksByDate: state => date => state.tasks.filter(task => task.date === date),

  resourcesByDate: state => date => state.resources.filter(resource => resource.date === date),

  tasksBySubjectAndDate: (state, getters) => (subject, date) =>
    getters.tasksBySubject(subject).filter(task => task.date === date),

  resourcesBySubjectAndDate: (state, getters) => (subject, date) =>
    getters.resourcesBySubject(subject).filter(resource => resource.date === date),

  generalResourceBySlug: (state, getters) => (subject, date) =>
    getters.resourcesBySubject(subject).filter(resource => !resource.date),

  subjectsByDate: (state, getters) => date => {
    const days = new Set()
    getters.tasksByDate(date).forEach(task => {
      days.add(task.subject)
    })
    return [...days].sort()
  },

  subjectBySlug: state => slug => state.subjects.find(subject => subject.slug === slug) || {},
}
