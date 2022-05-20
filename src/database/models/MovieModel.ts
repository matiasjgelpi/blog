import { model, Schema } from 'mongoose'
import { Movie } from '../../types/types'

export const MovieSchema = new Schema<Movie>({
  original_title: { type: String, required: true },
  country: { type: String, required: true },
  year: { type: Number, required: true },
  duration: { type: Number, required: true },
  director: { type: String, required: true },
  cast: Array
})
const MovieModel = model<Movie>('Movie', MovieSchema)

export default MovieModel
