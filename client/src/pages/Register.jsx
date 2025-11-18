import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await register(form.username, form.password)
      navigate('/')
    } catch (err) {
      setError('Registration failed')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 border rounded mb-4"
          value={form.username}
          onChange={e => setForm({...form, username: e.target.value})}
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          className="w-full p-3 border rounded mb-6"
          value={form.password}
          onChange={e => setForm({...form, password: e.target.value})}
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
          Register
        </button>
      </form>
      <p className="mt-4 text-center">
        Have account? <Link to="/login" className="text-indigo-600">Login</Link>
      </p>
    </div>
  )
}

export default Register