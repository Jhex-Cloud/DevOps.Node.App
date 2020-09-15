const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const apiRoutes = require('./Routes/api')
const { RootController } = require('./Controller/')

app.get('/', RootController)

app.use('/api', apiRoutes)

app.listen(port, () => {
  console.log(`App running at port: ${port}`)
})
