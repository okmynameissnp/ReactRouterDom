import React from 'react'
import { Link } from 'react-router-dom'

export const About= () => {
  return (
    <div className='Container'>
        <div className='Nav-bar'>
         
                <Link to="/" className='li'>Home</Link>
                <Link to="/About" className='li'>About</Link>
                <Link to="/Service" className='li'>Service</Link>
                <Link to="/Gallery" className='li'>Gallery</Link>
                <Link to="/Contact" className='li'>Contact</Link>
                <Link to="/Signin" className='li1'>Signin</Link>
                <Link to="/Signup" className='li1'>Signup</Link>
        </div>
        
    </div>
  )
}