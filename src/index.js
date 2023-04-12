require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dateFns = require('date-fns')

const { 
  getUserExercises, 
  readJson, 
  saveElemToJson, 
  shapeUser
} = require('./utils')
const {
  USERS_JSON_PATH, 
  EXERCISES_JSON_PATH
} = require('./config')
const {
  getExercises, 
  getHome,
  getLogs,
  getUsers, 
  postExercises, 
  postUsers
} = require('./routes')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', getHome);

app.get('/api/users', getUsers)
app.post('/api/users', postUsers)

app.get('/api/users/:id/exercises', getExercises)
app.post('/api/users/:id/exercises', postExercises)

app.get('/api/users/:id/logs', getLogs)

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

module.exports = listener