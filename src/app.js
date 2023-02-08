const express = require('express')
const morgan = require('morgan')
const taskRoutes = require('./routes/tasks.route')

const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to Server')
})

app.use('/api/tasks', taskRoutes)

module.exports = app