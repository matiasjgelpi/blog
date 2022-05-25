import BlogPostModel from '../../database/models/BlogpostModel'
import MovieModel from '../../database/models/MovieModel'
import { toNewPost } from '../../utils/parsePost'
import { toNewMovie } from '../../utils/parseMovie'

export const postBlogPost = (req: any, res: any): any => {
  void (async () => {
    try {
      const verificatedMovie = toNewMovie(req.body.movie)
      const isInDbMovie = await MovieModel.findOne({ original_title: verificatedMovie.original_title })
      const blogPost = toNewPost(req.body)
      const addBlogPost = new BlogPostModel(blogPost)

      if (isInDbMovie !== null) {
        addBlogPost.movie = isInDbMovie
      } else {
        const addMovie = new MovieModel(verificatedMovie)
        await addMovie.save()
        addBlogPost.movie = addMovie
      }
      await addBlogPost.save()
      return res.json(addBlogPost)
    } catch (err: any) {
      return res.status(400).json({ msg: err.toString() })
    }
  })()
}
