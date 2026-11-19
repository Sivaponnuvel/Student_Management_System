import React from 'react'
import '../styles/Footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer bg-dark text-white'>

      <div className='container py-4'>
      
        <div className='row'>

          <div className='col-md-6 mb-3'>
            <h5><i className="bi bi-mortarboard-fill me-2"></i>Student Management</h5>
            <p className='text-secondary'>A platform to connect students and teachers and manage academic information</p>
          </div>

          <div className='col-md-3 mb-3'>
            <h5>Quick Links</h5>
            <ul className='list-unstyled'>
              <li>
                <NavLink className='footer-link' to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className='footer-link' to="/register">Register</NavLink>
              </li>
              <li>
                <a className='footer-link' href="/login">Login</a>
              </li>
            </ul>
          </div>

          <div className='col-md-3 mb-3'>
            <h5>Contact</h5>
            <p className='text-secondary'><i className="bi bi-envelope me-2"></i>support@gmail.com</p>
            <p className='text-secondary'><i className="bi bi-telephone me-2"></i>+91 9876543210</p>
          </div>

        </div>

        <hr className='border-secondary'/>

        <div className='text-center text-secondary'>
          <p className='mb-0'>© 2026 Student Management System. All Rights Reserved.</p>
        </div>

      </div>
    
    </footer>
  )
}

export default Footer