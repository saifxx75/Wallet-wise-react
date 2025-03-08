import React from 'react'
import '../css/landing.css'

const Landing = () => {
  return (
   <>
    <div className="wrapper">
    <h1 className="text">"WELCOME TO WALLET WISE !!"</h1>
    <div>
      <p>Smart Spending Starts Here </p>
    </div>
    <button onclick="document.location='signup.html'">get started</button>
  </div>
   </>
  )
}

export default Landing
