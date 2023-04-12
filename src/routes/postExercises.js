const {
  EXERCISES_JSON_PATH
} = require('../config')
const {
  formatDate,
  getAllUsers,
  getError,
  getExistingUser,
  saveElemToJson,
  shapeUser
} = require("../utils")

const postExercises = async ({ body, params, query }, res) => {
  const { date, duration, description, ":_id": bodyUserId } = body
  const { id } = params

  // FIND USER
  const userId = bodyUserId || id
  const allUsers = await getAllUsers()
  const existingUser = getExistingUser(allUsers, userId)
  if (!existingUser) {
    const error = getError('INVALID_USER')
    res.json(error)
    return
  }

  // DATE
  const parsedDate = new Date(date || null)

  // ADD EXERCISE
  const exercise = {
    description,
    timestamp: parsedDate.getTime(),
    duration: parseInt(duration),
  }
  const user = shapeUser(userId, existingUser.username)
  const exerciseRecord = {
    ...exercise,
    userId,
  }

  await saveElemToJson(exerciseRecord, EXERCISES_JSON_PATH)

  res.json({
    ...exercise,
    ...user,
    date: formatDate(parsedDate)
  })
}

module.exports = postExercises
