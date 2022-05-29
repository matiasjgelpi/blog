import { postBlogPost } from './postBlogPost'
import { putBlogPost } from './putBlogPost'
import { getBlogPosts, getBlogPostById } from './getBlogPosts'
import { deleteBlogPost } from './deleteBlogPost'

const BlogServices = {
  postBlogPost,
  getBlogPosts,
  getBlogPostById,
  putBlogPost,
  deleteBlogPost
}

export default BlogServices
