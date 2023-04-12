const fs = require("fs")
const { uuid } = require("uuidv4")
const path = require('path')

const saveElemToJson = async (elem, storagePath) =>
  await new Promise((resolve) => {
    const fullPath = path.join(__dirname, '', storagePath)
    
    fs.readFile(fullPath, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        const dataObj = JSON.parse(data)
        const elemId = uuid()
        const newDataObj = {
          ...dataObj,
          [elemId]: elem,
        }

        const newDataJson = JSON.stringify(newDataObj, null, 2)
        fs.writeFile(fullPath, newDataJson, () => resolve(elemId))
      }
    })
  })

module.exports = saveElemToJson
