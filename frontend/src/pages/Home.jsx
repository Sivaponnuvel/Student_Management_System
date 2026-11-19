import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Features from '../components/Features'
import '../styles/Home.css'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
        <Navbar />

        <section className='hero-section'>
          <div className='container'>
            <div className='row align-items-center'>

              <div className='col-lg-7'>
                <span className='badge bg-primary mb-3'>STUDENT MANAGEMENT SYSTEM</span>
                <h2 className='hero-title'>Welcome to Student Management System</h2>
                <p className='hero-description'>A simple and smart platform to manage student
                information and connect students with teachers.
                Access your academic information in one place.</p>

                <div className='mt-4'>
                  <NavLink to="/register" className='btn btn-primary btn-lg me-3'>Get Started</NavLink>
                  <NavLink to="/login" className='btn btn-outline-primary btn-lg'>Login</NavLink>
                </div>
              </div>

              <div className='col-lg-5 text-center mt-4 mt-lg-0'>
                <i className="bi bi-mortarboard-fill hero-icon"></i>
              </div>

            </div>
          </div>
        </section>
        
        <Features />
        <Footer />
    </>
  )
}

export default Home