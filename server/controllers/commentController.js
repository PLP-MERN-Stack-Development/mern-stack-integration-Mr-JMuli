import Comment from '../models/Comment.js';
import Post from '../models/Post.js';

// GET /api/comments/:postId → Get all comments for a post
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId })
      .sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/comments → Create a new comment
export const createComment = async (req, res) => {
  const { post: postId, author, content } = req.body;

  if (!postId || !author || !content || content.trim().length < 3) {
    return res.status(400).json({ message: 'All fields are required and content must be > 3 chars' });
  }

  try {
    // Verify post exists
    const postExists = await Post.findById(postId);
    if (!postExists) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const comment = await Comment.create({
      post: postId,
      author: author.trim(),
      content: content.trim()
    });

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};