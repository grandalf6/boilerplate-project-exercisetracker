const getExistingUser = (users, usernameOrUserId) =>
  Object.values(users).find(
    (user) =>
      user.username === usernameOrUserId || user._id === usernameOrUserId
  )

module.exports = getExistingUser
