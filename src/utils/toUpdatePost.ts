import { BlogPostUpdate } from '../types/types'
import { parseStrings, parseNumbers } from './blogValidators'

const toUpdatePost = (object: any): BlogPostUpdate => {
  const updatePost: BlogPostUpdate = {}

  if (object.title !== undefined) updatePost.title = parseStrings(object.title, 'title')
  if (object.content !== undefined) updatePost.content = parseStrings(object.content, 'content')
  if (object.rating !== undefined) updatePost.rating = parseNumbers(object.rating, 'rating')
  if (object.image !== undefined) updatePost.image = parseStrings(object.image, 'image')

  return updatePost
}

export default toUpdatePost
