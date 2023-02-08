const mongoose = require('mongoose')
const { MONGODB_URI } = require('./config')

const connectMongoDBAtlas = async () => {
  try {
    mongoose.set('strictQuery', false)
    const db = await mongoose.connect(MONGODB_URI)
    console.log(`Connect DB: ${db.connection.name}`)
  } catch (error) {
    console.error(error)
  }
}

module.exports = { connectMongoDBAtlas }