const path = require("path")

const getHome = (_, res) => {
  const pagePath = path.join(__dirname, "..", "views", "index.html")

  res.sendFile(pagePath)
}

module.exports = getHome
