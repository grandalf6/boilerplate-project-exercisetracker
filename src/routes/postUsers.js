const {
  USERS_JSON_PATH
} = require('../config')
const {
  getAllUsers,
  getExistingUser, 
  saveElemToJson 
} = require("../utils")

const postUsers = async ({body}, res) => {
  const { username } = body
  const allUsers = await getAllUsers()
  const existingUser = getExistingUser(allUsers, username)
  let userId = existingUser?._id
  if (!existingUser) {
    userId = await saveElemToJson(username, USERS_JSON_PATH)
  }

  res.json({
    username,
    _id: userId,
  })
}

module.exports = postUsers
