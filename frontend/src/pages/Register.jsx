import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Register.css'
import { NavLink } from 'react-router-dom'

function Register() {
  return (
    <>
      <Navbar />

      <section className="register-section">
        <div className="container">

          <div className="text-center mb-5">
            <h2>Create Your Account</h2>
            <p className="text-secondary">
              Choose your account type to get started
            </p>
          </div>

          <div className="row justify-content-center g-4">

            {/* Student Registration */}
            <div className="col-md-5">
              <div className="card register-card text-center shadow-sm h-100">
                <div className="card-body p-5">
                  <i className="bi bi-mortarboard-fill register-icon"></i>

                  <h4 className="mt-4">Student</h4>

                  <p className="text-secondary">
                    Register as a student and access your
                    academic information.
                  </p>

                  <NavLink to="/student/register" className="btn btn-outline-primary mt-3">
                    Register as Student
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Teacher Registration */}
            <div className="col-md-5">
              <div className="card register-card text-center shadow-sm h-100">
                <div className="card-body p-5">
                  <i className="bi bi-person-workspace register-icon"></i>

                  <h4 className="mt-4">Teacher</h4>

                  <p className="text-secondary">
                    Register as a teacher and manage
                    student information.
                  </p>

                  <a href="/teacher/register" className="btn btn-outline-primary mt-3">
                    Register as Teacher
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Register