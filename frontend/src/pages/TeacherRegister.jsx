import React, { useState } from 'react'
import '../styles/TeacherRegister.css'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TeacherRegister() {

    // Navigation hook
    const navigate = useNavigate();

    // store the all form values
    const [formdata, setFormdata] = useState({
        username: "",
        fullname: "",
        email: "",
        dob: "",
        gender: "",
        subject: "",
        password: "",
        confirm_password: ""
    });

    // store the error message
    const [errorMessage, setErrorMessage] = useState('');

    // handle the input changes
    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    // handle the submission
    const handleSubmit = async (e) => {
        e.preventDefault()

        // clear the error message
        setErrorMessage('');

        // check the password and confirm password
        if(formdata.password !== formdata.confirm_password){
            setErrorMessage("Passwords do not match");
            return
        }

        try {
            // send data to backend
            const response = await axios.post(
                "http://127.0.0.1:8000/api/teacher/register/",
                {
                    username: formdata.username,
                    fullname: formdata.fullname,
                    email: formdata.email,
                    dob: formdata.dob,
                    gender: formdata.gender,
                    subject: formdata.subject,
                    password: formdata.password
                }
            )
            // show the success message
            alert(response.data.message);
            // navigate the login page
            navigate('/login')

            // clear the formdata after successful registration
            setFormdata({
                username: "",
                fullname: "",
                email: "",
                dob: "",
                gender: "",
                subject: "",
                password: "",
                confirm_password: ""
            })

        } catch (error) {
            if(error.response){
                console.log(error.response.data);

                const errors = Object.values(error.response.data).flat().join("\n");

                setErrorMessage(errors || "Registration failed")
            }
            else{
                // server connection error
                setErrorMessage("unable to connect to the server")
            }
        }
    }

  return (
    <section className="student-register-section">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-lg-9">

            <div className="card student-register-card shadow-sm">
              <div className="card-body p-4 p-md-5">

                <div className="text-center mb-4">
                  <i className="bi bi-mortarboard-fill register-icon"></i>
                  <h2 className="mt-3">Teacher Registration</h2>
                  <p className="text-secondary">
                    Create your teacher account
                  </p>
                </div>

                <form onSubmit={handleSubmit}>

                  <div className="row">

                    {/* Username */}
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        name="username"
                        value={formdata.username}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter username"
                        required
                      />
                    </div>

                    {/* Full Name */}
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="fullname"
                        value={formdata.fullname}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter full name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formdata.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter email address"
                        required
                      />
                    </div>

                    {/* Date of Birth */}
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        value={formdata.dob}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>

                    {/* Gender */}
                    <div className="col-6 mb-4">
                      <label className="form-label">Gender</label>
                      <select
                        name="gender"
                        value={formdata.gender}
                        onChange={handleChange}
                        className="form-select"
                        required
                      >
                        <option value="" disabled>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                      </select>
                    </div>

                    {/* Subjects */}

                    <div className="col-6 mb-4">
                      <label className="form-label">Subjects</label>
                      <select
                        name="subject"
                        value={formdata.subject}
                        onChange={handleChange}
                        className="form-select"
                        required
                      >
                        <option value="" disabled>Select Subject</option>
                        <option value="tamil">Tamil</option>
                        <option value="english">English</option>
                        <option value="maths">Maths</option>
                        <option value="science">Science</option>
                        <option value="social">Social</option>
                      </select>
                    </div>

                    {/* Password */}
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={formdata.password}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter password"
                        required
                      />
                    </div>

                    {/* Confirm Password */}
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        name="confirm_password"
                        value={formdata.confirm_password}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Confirm password"
                        required
                      />
                    </div>

                  </div>

                  {/* display the error message */}
                  {errorMessage &&(
                    <div className='alert alert-danger' role='alert'>
                        {errorMessage.split('\n').map((message, index) => (
                            <div key={index}>{message}</div>
                        ))}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary w-100 mt-2"
                  >
                    Register
                  </button>

                  <p className="text-center mt-4 mb-0">
                    Already have an account? <NavLink to="/login">Login</NavLink>
                  </p>

                </form>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default TeacherRegister