const getHome = (_, res) => {
  res.sendFile(__dirname + "/views/index.html")
}

module.exports = getHome
