import { BlogPost, BlogPostUpdate } from '../types/types'
import { parseStrings, parseNumbers } from './blogValidators'

export const toNewPost = (object: any): BlogPost => {
  const newPost: BlogPost = {
    title: parseStrings(object.title, 'title'),
    content: parseStrings(object.content, 'content'),
    rating: parseNumbers(object.rating, 'rating'),
    image: parseStrings(object.image, 'image'),
    date: new Date()
  }

  return newPost
}

export const toUpdatePost = (object: any): BlogPostUpdate => {
  const updatePost: BlogPostUpdate = {}

  if (object.title !== undefined) updatePost.title = parseStrings(object.title, 'title')
  if (object.content !== undefined) updatePost.content = parseStrings(object.content, 'content')
  if (object.rating !== undefined) updatePost.rating = parseNumbers(object.rating, 'rating')
  if (object.image !== undefined) updatePost.image = parseStrings(object.image, 'image')

  return updatePost
}
