const app = require('./app')
const { PORT } = require('./config')
const { connectMongoDBAtlas } = require('./db')

connectMongoDBAtlas()
app.listen(PORT)
console.log(`Server on port ${PORT}`)