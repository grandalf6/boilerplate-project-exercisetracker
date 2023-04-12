const {
  USERS_JSON_PATH
} = require("../config")
const readJson = require("./readJson")
const shapeUser = require("./shapeUser")

const getAllUsers = async () => {
  const users = await readJson(USERS_JSON_PATH)
  const usersArray = Object.entries(users).map(([_id, username]) =>
    shapeUser(_id, username)
  )

  return usersArray
}

module.exports = getAllUsers
