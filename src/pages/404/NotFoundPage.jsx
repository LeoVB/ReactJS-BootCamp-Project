import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path)
  }
  return (
    <div>
      <h1>404 - Not Found Page</h1>
      <button onClick={()=>handleNavigate('/')}>Go back to Home</button>
    </div>
  )
}

export default NotFoundPage