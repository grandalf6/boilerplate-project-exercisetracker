const { saveElemToJson } = require("../utils")

const postUsers = async (req, res) => {
  const username = req.body.username
  const userId = await saveElemToJson(username, USERS_JSON_PATH)

  res.json({
    username,
    _id: userId,
  })
}

module.exports = postUsers
