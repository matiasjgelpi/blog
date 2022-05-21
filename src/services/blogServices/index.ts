import { postBlogPost } from './postBlogPost'
import { putBlogPost } from './putBlogPost'
import { getAllBlogPosts, getBlogPost } from './getBlogPosts'
import { deleteBlogPost } from './deleteBlogPost'

const BlogServices = {
  postBlogPost,
  getAllBlogPosts,
  getBlogPost,
  putBlogPost,
  deleteBlogPost
}

export default BlogServices
