import { parseIds } from '../../utils/blogValidators'
import BlogPostModel from '../../database/models/BlogpostModel'
import MovieModel from '../../database/models/MovieModel'

export const getAllBlogPosts = (_req: any, res: any): any => {
  void (async () => {
    try {
      const blogPosts = await BlogPostModel.find({}, 'title rating date content').populate({ path: 'movie', model: MovieModel, select: ['original_title', 'country', 'year'] })
      return res.json(blogPosts)
    } catch (err: any) {
      return res.status(400).json({ msg: err.toString() })
    }
  })()
}

export const getBlogPost = (req: any, res: any): any => {
  void (async () => {
    try {
      parseIds(req.params.id)
      const blogPost = await BlogPostModel.findById(req.params.id).populate({ path: 'movie', model: MovieModel })
      return res.json(blogPost)
    } catch (err: any) {
      return res.status(400).json({ msg: err.toString() })
    }
  })()
}
