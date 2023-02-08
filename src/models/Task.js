const { Schema, model } = require('mongoose')

const taskSchema = new Schema(
  {
    title: String,
    body: String
  },
  {
    timeseries: true,
    versionKey: false
  }
)

module.exports = model('Task', taskSchema)