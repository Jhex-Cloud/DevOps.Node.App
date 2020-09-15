const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const apiRoutes = require('./Routes/api')

app.get('/', (req, res) => { res.send('Go to /api to access the static api') })
app.use('/api', apiRoutes)

app.listen(port, () => { console.log(`App running at port: ${port}`) })


