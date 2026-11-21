import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Login.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function Login() {

  // store the values
  const[formdata, setFormdata] = useState({
    username: "",
    password: ""
  });

  // store the error
  const [errorMessage, setErrorMessage] = useState('');

  // handle the input changes
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    // clear the previous error message
    setErrorMessage('');

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/student/login/",
          formdata
      )
      // show the success message
      alert(response.data.message);

      // clear the form data after successful login
      setFormdata({
        username: '',
        password: ''
      })

    } catch (error) {
      if(error.response){
        console.log(error.response.data);

        setErrorMessage(error.response.data.message || "Login Failed");
      }
      else{
        setErrorMessage("Unable to connect to the server");
      }
    }
  }

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

                  <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        name='username'
                        value={formdata.username}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your username"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        name='password'
                        value={formdata.password}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your password"
                        required
                      />
                    </div>

                    {/* display the error message */}
                    {errorMessage && (
                      <div className='alert alert-danger' role='alert'>
                        {errorMessage}
                      </div>
                    )}

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
