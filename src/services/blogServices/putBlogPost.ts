import { parseIds } from '../../utils/blogValidators'
import { toUpdatePost } from '../../utils/parsePost'
import { toUpdateMovie } from '../../utils/parseMovie'
import BlogPostModel from '../../database/models/BlogpostModel'
import MovieModel from '../../database/models/MovieModel'

export const putBlogPost = (req: any, res: any): any => {
  void (async () => {
    try {
      parseIds(req.params.id)
      const parsedBody = toUpdatePost(req.body)

      let movie
      if (req.body.movie !== undefined) {
        const movieId = await BlogPostModel.findById(req.params.id)
        const parsedMovie = toUpdateMovie(req.body.movie)
        movie = await MovieModel.updateOne({ _id: movieId?.movie }, parsedMovie)
      }

      const blogPost = await BlogPostModel.updateOne({ _id: req.params.id }, parsedBody)
      return res.json({ post_moddified: blogPost.acknowledged, movie_moddified: movie?.acknowledged })
    } catch (err: any) {
      return res.status(400).json({ msg: err.toString() })
    }
  })()
}
