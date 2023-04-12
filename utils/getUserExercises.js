const { EXERCISES_JSON_PATH } = require("../config")
const readJson = require("./readJson")

const getUserExercises = async (userId) => {
  const exercises = await readJson(EXERCISES_JSON_PATH)
  const exercisesArray = Object.entries(exercises).map(([_id, exercise]) => ({
    _id,
    ...exercise,
  }))
  const userExercises = exercisesArray.filter(
    (exericse) => exericse.userId === userId
  )

  return userExercises
}

module.exports = getUserExercises
