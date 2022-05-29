import { Router } from 'express'
import BlogServices from '../services/blogServices'
const router = Router()

router.post('/blog', BlogServices.postBlogPost)
router.get('/blogs', BlogServices.getBlogPosts)
router.get('/blog/:id', BlogServices.getBlogPostById)
router.put('/blog/:id', BlogServices.putBlogPost)
router.delete('/blog/:id', BlogServices.deleteBlogPost)

export default router
