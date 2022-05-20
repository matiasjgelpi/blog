import { BlogPost } from '../types/types'
import { parseStrings, parseNumbers } from './blogValidators'

const toNewPost = (object: any): BlogPost => {
  const newPost: BlogPost = {
    title: parseStrings(object.title, 'title'),
    content: parseStrings(object.content, 'content'),
    rating: parseNumbers(object.rating, 'rating'),
    image: parseStrings(object.image, 'image'),
    date: new Date()
  }

  return newPost
}

export default toNewPost
