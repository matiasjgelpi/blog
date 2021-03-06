import 'dotenv/config'
import express from 'express'
import { connectDb } from './database/dbConnection'
import blogPostRoutes from './routes/BlogPostRoutes'

const cors = require('cors')

connectDb()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', blogPostRoutes)

app.use('/', (_, res) => {
  return res.status(404).send({ msg: 'Page not found' })
})

const PORT = ((process.env.PORT !== undefined) && process.env.PORT) || 3001

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
