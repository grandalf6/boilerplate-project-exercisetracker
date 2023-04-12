const {
  formatDate,
  getAllUsers,
  getError,
  getExistingUser,
  getUserExercises,
} = require('../utils')

const getLogs = async ({ params }, res) => {
  const { id } = params

  // VERIFY USER
  const allUsers = await getAllUsers()
  const existingUser = getExistingUser(allUsers, id)
  if (!existingUser) {
    const error = getError('INVALID_USER')
    res.json(error)
    return
  }

  // GET EXERCISES
  const exercises = await getUserExercises(id)
  const shapedExercises = exercises.map(({ timestamp, description, duration }) => ({
    date: formatDate(timestamp),
    description,
    duration,
  }))
  
  const response = {
    ...existingUser,
    count:  exercises.length,
    log: shapedExercises,
  }
  console.log(response)
  res.json(response)
}

module.exports = getLogs