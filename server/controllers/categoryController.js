import Category from '../models/Category.js';

// GET /api/categories → Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/categories → Create new category (you can protect with auth later if you want)
export const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name || name.trim().length < 2) {
    return res.status(400).json({ message: 'Category name must be at least 2 characters' });
  }

  try {
    const existing = await Category.findOne({ name: new RegExp(`^${name.trim()}$`, 'i') });
    if (existing) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const category = await Category.create({ name: name.trim() });
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};