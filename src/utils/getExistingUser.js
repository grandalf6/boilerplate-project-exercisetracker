const getExistingUser = (users, usernameOrUserId) => {
  const existingUser = Object.values(users).find(user => {
    return user.username === usernameOrUserId || user._id === usernameOrUserId
  })

  return existingUser
}

module.exports = getExistingUser