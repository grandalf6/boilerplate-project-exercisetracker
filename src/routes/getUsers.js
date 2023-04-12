const { USERS_JSON_PATH } = require('../config')
const { getAllUsers } = require("../utils")

const getUsers = async (_, res) => {
  const usersArray = getAllUsers()

  res.json(usersArray)
}

module.exports = getUsers
