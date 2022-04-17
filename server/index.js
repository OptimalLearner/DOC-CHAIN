const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 4000

const connect = require('./config/db')
connect()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/users', require('./routes/users'))
app.use('/students', require('./routes/students'))



app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})