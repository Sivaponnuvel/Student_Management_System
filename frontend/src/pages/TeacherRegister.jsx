import React from 'react'
import '../styles/TeacherRegister.css'

function TeacherRegister() {
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

                <form>

                  <div className="row">

                    {/* Username */}
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        name="username"
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
                        className="form-control"
                        required
                      />
                    </div>

                    {/* Gender */}
                    <div className="col-6 mb-4">
                      <label className="form-label">Gender</label>
                      <select
                        name="gender"
                        className="form-select"
                        defaultValue=""
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
                        className="form-select"
                        defaultValue=""
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
                        className="form-control"
                        placeholder="Confirm password"
                        required
                      />
                    </div>

                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 mt-2"
                  >
                    Register
                  </button>

                  <p className="text-center mt-4 mb-0">
                    Already have an account? <a href="/login">Login</a>
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