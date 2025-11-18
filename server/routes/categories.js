import express from 'express';
import Category from '../models/Category.js';
const router = express.Router();

router.get('/', async (req, res) => res.json(await Category.find()));
router.post('/', async (req, res) => {
  const cat = await Category.create(req.body);
  res.json(cat);
});

export default router;