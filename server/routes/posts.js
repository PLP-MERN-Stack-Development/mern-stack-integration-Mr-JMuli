import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/postController.js';
import auth from '../middleware/auth.js';
import { validatePost } from '../middleware/validate.js';

const router = express.Router();
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, validatePost, createPost);
router.put('/:id', auth, validatePost, updatePost);
router.delete('/:id', auth, deletePost);
export default router;