const fs = require("fs")

const readJson = async (path) =>
  await new Promise((resolve) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        const parsedData = JSON.parse(data)

        resolve(parsedData)
      }
    })
  })

module.exports = readJson
