import React from 'react'
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
            <a className='navbar-brand' href="/"><i className="bi bi-mortarboard-fill me-2"></i>Student Management</a>
            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to="/">Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to="/register">Register</NavLink>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar