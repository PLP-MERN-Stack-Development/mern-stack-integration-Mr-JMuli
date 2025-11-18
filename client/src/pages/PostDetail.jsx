import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'

const PostDetail = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState({ author: '', content: '' })

  useEffect(() => {
    const fetchPost = async () => {
      const res = await api.get(`/posts/${id}`)
      setPost(res.data)
    }
    const fetchComments = async () => {
      const res = await api.get(`/comments/${id}`)
      setComments(res.data)
    }
    fetchPost()
    fetchComments()
  }, [id])

  const addComment = async (e) => {
    e.preventDefault()
    const res = await api.post('/comments', { ...newComment, post: id })
    setComments([...comments, res.data])
    setNewComment({ author: '', content: '' })
  }

  if (!post) return <div className="text-center py-20">Loading...</div>

  return (
    <div className="max-w-4xl mx-auto">
      {post.featuredImage && <img src={post.featuredImage} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">by {post.author?.username}</p>
      <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />

      <div className="bg-white p-8 rounded-lg shadow">
        <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>
        <form onSubmit={addComment} className="mb-8">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 border rounded mb-4"
            value={newComment.author}
            onChange={e => setNewComment({...newComment, author: e.target.value})}
            required
          />
          <textarea
            placeholder="Write a comment..."
            className="w-full p-3 border rounded mb-4"
            value={newComment.content}
            onChange={e => setNewComment({...newComment, content: e.target.value})}
            required
          />
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded">
            Post Comment
          </button>
        </form>
        {comments.map(c => (
          <div key={c._id} className="border-b py-4">
            <p className="font-bold">{c.author}</p>
            <p>{c.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostDetail