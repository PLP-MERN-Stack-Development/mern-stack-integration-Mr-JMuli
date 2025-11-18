import { useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    if (image) formData.append('featuredImage', image)

    await api.post('/posts', formData)
    navigate('/')
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-6">Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          className="w-full p-4 border rounded mb-4 text-xl"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your content..."
          rows="12"
          className="w-full p-4 border rounded mb-4"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setImage(e.target.files[0])}
          className="mb-6"
        />
        {image && <p className="text-green-600 mb-4">Image selected: {image.name}</p>}
        <button type="submit" className="bg-indigo-600 text-white px-8 py-3 rounded hover:bg-indigo-700">
          Publish Post
        </button>
      </form>
    </div>
  )
}

export default CreatePost