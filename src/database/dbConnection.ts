import 'dotenv/config'
import mongoose from 'mongoose'

const uri = (): string => {
  if (process.env.MONGODB_URI !== undefined) return process.env.MONGODB_URI
  else {
    throw new Error('Error connecting to database, wrong URI')
  }
}

const options: mongoose.ConnectOptions = {
  dbName: 'blog_db'
}

export const connectDb = (): void => {
  mongoose.connect(uri(), options).then(() => {
    console.log('Connected to database')
  }).catch(err => {
    console.log(err)
  })
}
