import { Movie, UpdateMovie } from '../types/types'
import { parseStrings, parseNumbers, parseArrays } from './blogValidators'

export const toNewMovie = (object: any): Movie => {
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

export const toUpdateMovie = (object: any): UpdateMovie => {
  const updateMovie: UpdateMovie = {}

  if (object.original_title !== undefined) updateMovie.original_title = parseStrings(object.original_title, 'original_title')
  if (object.country !== undefined) updateMovie.country = parseStrings(object.country, 'country')
  if (object.year !== undefined) updateMovie.year = parseNumbers(object.year, 'year')
  if (object.duration !== undefined) updateMovie.duration = parseNumbers(object.duration, 'duration')
  if (object.director !== undefined) updateMovie.director = parseStrings(object.director, 'director')
  if (object.cast !== undefined) updateMovie.cast = parseArrays(object.cast, 'cast')

  return updateMovie
}
