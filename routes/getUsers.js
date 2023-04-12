const { readJson } = require("./utils")

const getUsers = async (_, res) => {
  const users = await readJson(USERS_JSON_PATH)
  const usersArray = Object.entries(users).map(([_id, username]) =>
    shapeUser(_id, username)
  )

  res.json(usersArray)
}

module.exports = getUsers
