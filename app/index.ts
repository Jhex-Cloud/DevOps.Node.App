import express from 'express'
import RootController from './Controller'

const app = express()
const port = process.env.PORT || 5000
const apiRoutes = require('./Routes/api')

app.get('/', RootController)

app.use('/api', apiRoutes)

app.listen(port, () => {
  console.log(`App running at port: ${port}`)
})
