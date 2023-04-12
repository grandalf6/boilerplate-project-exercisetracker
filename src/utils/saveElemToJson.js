const fs = require("fs")
const { uuid } = require("uuidv4")

const saveElemToJson = async (elem, path) =>
  await new Promise((resolve) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        const dataObj = JSON.parse(data)
        const elemId = uuid()
        console.log(elemId)
        const newDataObj = {
          ...dataObj,
          [elemId]: elem,
        }

        const newDataJson = JSON.stringify(newDataObj, null, 2)
        fs.writeFile(path, newDataJson, () => resolve(elemId))
      }
    })
  })

module.exports = saveElemToJson
