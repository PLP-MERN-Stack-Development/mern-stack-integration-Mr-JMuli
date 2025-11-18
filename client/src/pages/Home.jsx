import { useState, useEffect } from 'react'
import api from '../services/api'
import { Link } from 'react-router-dom'

const Home = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    api.get(`/posts?page=${page}&search=${search}`)
      .then(res => setPosts(res.data.posts))
  }, [page, search])

  return (
    <div>
      {/* Hero Search */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Where technology meets climate reality</h1>
        <input
          type="text"
          placeholder=" Search posts..."
          className="input max-w-2xl text-lg"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <Link key={post._id} to={`/post/${post._id}`} className="card">
            {post.featuredImage ? (
              <img src={post.featuredImage} alt={post.title} className="w-full h-64 object-cover" />
            ) : (
              <div className="bg-gradient-to-br from-indigo-400 to-purple-600 h-64" />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 line-clamp-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.content.replace(/<[^>]*>/g, '').substring(0, 120)}...</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span> {post.author?.username || 'Anonymous'}</span>
                <span> {new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-12">
        <button onClick={() => setPage(p => Math.max(1, p-1))} className="btn-primary px-8">
          ← Previous
        </button>
        <button onClick={() => setPage(p => p+1)} className="btn-primary px-8">
          Next →
        </button>
      </div>
    </div>
  )
}

export default Home