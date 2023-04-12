const {
  getAllUsers
} = require("../utils")

const getUsers = async (_, res) => {
  const usersArray = await getAllUsers()

  res.json(usersArray)
}

module.exports = getUsers
