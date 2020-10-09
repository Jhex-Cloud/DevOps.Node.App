import express from 'express'
import RootController from './Controller'

const path = require('path')

const app = express()
const port = process.env.PORT || 5000
const apiRoutes = require('./Routes/api')

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')
app.get('/', RootController)

app.use('/api', apiRoutes)

app.listen(port, () => {
  console.log(`App running at port: ${port}`)
})
