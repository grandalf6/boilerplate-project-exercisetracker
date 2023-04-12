const { USERS_JSON_PATH } = require('../config')
const { saveElemToJson } = require("../utils")

const postUsers = async (req, res) => {
  const username = req.body.username
  console.log({username})
  const userId = await saveElemToJson(username, USERS_JSON_PATH)
  console.log({userId})
  
  res.json({
    username,
    _id: userId,
  })
}

module.exports = postUsers
