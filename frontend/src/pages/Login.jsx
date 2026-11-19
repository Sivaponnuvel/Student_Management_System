
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Login.css'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <>
      <Navbar />

      <section className="login-section">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">

              <div className="card login-card shadow-sm">
                <div className="card-body p-5">

                  <div className="text-center mb-4">
                    <i className="bi bi-person-circle login-icon"></i>
                    <h2 className="mt-3">Welcome Back</h2>
                    <p className="text-secondary">
                      Login to your account
                    </p>
                  </div>

                  <form>

                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your username"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-3">
                      Login
                    </button>

                  </form>

                  <p className="text-center mt-4 mb-0">
                    Don't have an account? <NavLink to="/register">Register</NavLink>
                  </p>

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

export default Login
