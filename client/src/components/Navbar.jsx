import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { LogOut, Plus, User } from 'lucide-react'

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">CARB0N COD3</Link>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/create" className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                <Plus size={20} /> New Post
              </Link>
              <span className="flex items-center gap-2">
                <User size={20} /> {user.username}
              </span>
              <button onClick={logout} className="flex items-center gap-2 text-red-600 hover:text-red-800">
                <LogOut size={20} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
              <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar