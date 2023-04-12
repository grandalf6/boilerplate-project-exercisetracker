const { getUserExercises } = require("../utils")

const getExercises = async (req, res) => {
  const userId = req.params.id
  const userExercises = await getUserExercises(userId)

  res.json(userExercises)
}

module.exports = getExercises
