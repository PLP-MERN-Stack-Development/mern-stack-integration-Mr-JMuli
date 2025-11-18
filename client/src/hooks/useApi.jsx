import { useState } from 'react'
import api from '../services/api'

export const useApi = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = async (callback) => {
    setLoading(true)
    setError(null)
    try {
      const res = await callback()
      return res.data
    } catch (err) {
      const msg = err.response?.data?.message || err.message
      setError(msg)
      throw new Error(msg)
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, request }
}