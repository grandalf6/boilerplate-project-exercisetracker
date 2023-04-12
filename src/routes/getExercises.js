const { 
  getAllUsers,
  getError,
  getExistingUser,
  getUserExercises
} = require("../utils")

const getExercises = async (req, res) => {
  const userId = req.params.id
  const allUsers = await getAllUsers()
  const userExercises = await getUserExercises(userId)
  const existingUser = getExistingUser(allUsers, userId)
  
  if (!existingUser) {
    const error = getError('INVALID_USER')
    res.json(error)
    return
  }
  
  res.json(userExercises)
}

module.exports = getExercises
