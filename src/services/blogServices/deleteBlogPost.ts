import { parseIds } from '../../utils/blogValidators'
import BlogPostModel from '../../database/models/BlogpostModel'

export const deleteBlogPost = (req: any, res: any): any => {
  void (async () => {
    try {
      parseIds(req.params.id)
      const detedBlogPost = await BlogPostModel.deleteOne({ _id: req.params.id })
      return res.json({ msg: `${detedBlogPost.deletedCount} document deleted` })
    } catch (err: any) {
      return res.status(400).json({ msg: err.toString() })
    }
  })()
}
