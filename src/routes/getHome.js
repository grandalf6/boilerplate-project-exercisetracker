const getHome = (_, res) => {
  res.sendFile("/src/views/index.html")
}

module.exports = getHome
