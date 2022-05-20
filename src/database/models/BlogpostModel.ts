import { model, Schema } from 'mongoose'
import { BlogPost } from '../../types/types'

const blogPostSchema = new Schema<BlogPost>({
  title: { type: String, required: true },
  movie: { type: Schema.Types.ObjectId, ref: 'MovieModel', required: false },
  content: { type: String, required: true },
  rating: { type: Number, required: true },
  image: String,
  date: { type: Date, required: true }
})
const BlogPostModel = model<BlogPost>('BlogPost', blogPostSchema)

export default BlogPostModel
