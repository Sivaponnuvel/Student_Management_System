import React from 'react'
import '../styles/Features.css'

function Features() {
  return (
    <section className="features-section">
        <div className="container">

          <div className="text-center mb-5">
            <h2>Our Features</h2>
            <p className="text-secondary">
              Everything you need in one platform
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-6">
              <div className="card feature-card h-100 shadow-sm">
                <div className="card-body text-center p-4">

                  <i className="bi bi-mortarboard-fill feature-icon"></i>

                  <h4 className="mt-3">Student Portal</h4>

                  <p className="text-secondary">
                    Students can manage their profiles,
                    view department and group information
                    and access their academic details.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card feature-card h-100 shadow-sm">
                <div className="card-body text-center p-4">

                  <i className="bi bi-person-workspace feature-icon"></i>

                  <h4 className="mt-3">Teacher Portal</h4>

                  <p className="text-secondary">
                    Teachers can view student information,
                    manage their profiles and access
                    student details in one place.
                  </p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}

export default Features