import express from 'express'
import { connectDb } from './database/dbConnection'
import blogPostRoutes from './routes/BlogPostRoutes'

connectDb()

const app = express()
app.use(express.json())

app.use('/', blogPostRoutes)

app.use('/', (_, res) => {
  return res.status(404).send({ msg: 'Page not found' })
})

app.listen(3001, () => {
  console.log('Server started on port 3001')
})
