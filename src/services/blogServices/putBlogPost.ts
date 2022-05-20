import { parseIds } from '../../utils/blogValidators'
import BlogPostModel from '../../database/models/BlogpostModel'

export const putBlogPost = (req: any, res: any): any => {
  void (async () => {
    try {
      parseIds(req.params.id)
      const blogPost = await BlogPostModel.updateOne({ _id: req.params.id }, { title: 'new title' })
      return res.json({ post_moddified: blogPost.acknowledged })
    } catch (err: any) {
      return res.status(400).json({ msg: err.toString() })
    }
  })()
}
