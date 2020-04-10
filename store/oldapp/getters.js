export default {
  subjects: state => state.subjects.map(subject => ({
    name: subject.name,
    svg: subject.svg,
    slug: subject.slug,
    description: subject.description || '',
    clasroom: 'anitaarnao3b',
  })),

  tasks: state => {
    const tasks = []
    state.subjects.forEach(subject => {
      Object.keys(subject.tasks).forEach(key => {
        subject.tasks[key].tasks.forEach(t => {
          tasks.push({
            classroom: 'anitaarnao3b',
            subject: subject.slug,
            date: key,
            ...t
          })
        })
      })
    })
    return tasks
  },

  resources: state => {
    const resources = []
    state.subjects.forEach(subject => {
      subject.resources.forEach(r => {
        resources.push({
          classroom: 'anitaarnao3b',
          subject: subject.slug,
          date: '',
          ...r
        })
      })

      Object.keys(subject.tasks).forEach(key => {
        const resourceArray = subject.tasks[key].resources
        if (!resourceArray) return
        resourceArray.forEach(r => {
          resources.push({
            classroom: 'anitaarnao3b',
            subject: subject.slug,
            date: key,
            ...r
          })
        })
      })
    })
    return resources
  }
}
