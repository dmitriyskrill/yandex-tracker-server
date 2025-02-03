import express from 'express'

import cors from 'cors'
import bodyParser from 'body-parser'
import * as appRouter from './src/appRouter.js'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000
app.use(cors())

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

for (const routerData of appRouter.routers) {
  app.use(`/api` + routerData.key, routerData.router)
}
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})