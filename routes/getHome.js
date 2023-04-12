const getHome = (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
}

module.exports = getHome