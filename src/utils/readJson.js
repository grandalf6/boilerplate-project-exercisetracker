const fs = require("fs")
const path = require('path')

const readJson = async (storagePath) =>
  await new Promise((resolve) => {
    const fullPath = path.join(__dirname, '', storagePath)
    
    fs.readFile(fullPath, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        const parsedData = JSON.parse(data)
        
        resolve(parsedData)
      }
    })
  })

module.exports = readJson
