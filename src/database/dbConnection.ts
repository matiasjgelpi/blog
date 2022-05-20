
import mongoose from 'mongoose'

const uri = 'mongodb+srv://matiasjgelpi:oQGc8CVGnbh3k38i@cluster0.hmdmu.mongodb.net/?retryWrites=true&w=majority'

const options: mongoose.ConnectOptions = {
  dbName: 'blog_db'
}

export const connectDb = (): void => {
  mongoose.connect(uri, options).then(() => {
    console.log('Connected to database')
  }).catch(err => {
    console.log(err)
  })
}
