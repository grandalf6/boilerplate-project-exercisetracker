const dateFns = require("date-fns")
const { EXERCISES_JSON_PATH } = require('../config')
const { readJson, saveElemToJson, shapeUser } = require("../utils")

const postExercises = async ({ body, params, query }, res) => {
  const { date, duration, description, ":_id": userId } = body
  console.log(body, params, query)

  // FIND USER
  const users = await readJson(USERS_JSON_PATH)
  const username = users[userId]
  if (!username) {
    res.json({
      error: "invalid user",
    })
    return
  }

  // DATE
  const usedDate = date || new Date()
  const formattedDate = dateFns.format(usedDate, "EEE MMM dd yyyy")

  // DURATION
  const durationParsed = parseInt(duration)

  // ADD EXERCISE
  const exercise = {
    date: formattedDate,
    description,
    duration: durationParsed,
  }
  const user = shapeUser(userId, username)
  const exerciseRecord = {
    ...exercise,
    userId,
  }
  await saveElemToJson(exerciseRecord, EXERCISES_JSON_PATH)

  res.json({
    ...exercise,
    ...user,
  })
}

module.exports = postExercises
