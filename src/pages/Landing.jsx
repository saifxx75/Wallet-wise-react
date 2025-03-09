import React from 'react'
import '../css/landing.css'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/signup')
  }
  return (
   <div className='main-dev'>
    <div className="wrapper">
      <h1 className="text">WELCOME TO WALLET WISE !!</h1>
      <div>
        <p>Smart Spending Starts Here</p>
      </div>
      <button onClick={handleClick}>Get Started</button>
    </div>
   </div>
  )
}

export default Landing;
