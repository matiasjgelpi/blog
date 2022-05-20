import { Movie } from '../types/types'
import { parseStrings, parseNumbers, parseArrays } from './blogValidators'

const toNewMovie = (object: any): Movie => {
  const newMovie: Movie = {
    original_title: parseStrings(object.original_title, 'original_title'),
    country: parseStrings(object.country, 'country'),
    year: parseNumbers(object.year, 'year'),
    duration: parseNumbers(object.duration, 'duration'),
    director: parseStrings(object.director, 'director'),
    cast: parseArrays(object.cast, 'cast')

  }

  return newMovie
}

export default toNewMovie
