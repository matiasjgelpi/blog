import { parseIds } from '../../utils/blogValidators'
import BlogPostModel from '../../database/models/BlogpostModel'
import MovieModel from '../../database/models/MovieModel'

export const getAllBlogPosts = (req: any, res: any): any => {
  console.log(req.query)
  void (async () => {
    try {
      let blogPosts = await BlogPostModel.find({}).populate({ path: 'movie', model: MovieModel, select: ['original_title', 'country', 'year'] })

      if (req.query.title !== undefined) {
        blogPosts = blogPosts.filter(post => post.title.toLowerCase().includes(req.query.title.toLowerCase()))
      }

      if (req.query.date !== undefined) {
        blogPosts = blogPosts.sort((a: any, b: any) => a.date - b.date)
        if (req.query.date === 'desc') {
          blogPosts = blogPosts.reverse()
        }
      }

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
