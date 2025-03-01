import React from "react";
import { Link } from "react-router-dom";
import { doctorprofileimg } from "../../imagepath";
import Select from 'react-select'
const DoctorSidebar = () => {
  let pathnames = window.location.pathname;

  const availablity = [
    { value: 'I am Available Now', label: 'I am Available Now' },
    { value: 'Not Available', label: 'Not Available' },
  ]

  return (
    <>
      {/* Profile Sidebar */}
      <div className="profile-sidebar doctor-sidebar profile-sidebar-new">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <Link to="/patient/doctor-profile" className="booking-doc-img">
              <img
                src={doctorprofileimg}
                alt="User Image"
              />
            </Link>
            <div className="profile-det-info">
              <h3>
                <Link to="/patient/doctor-profile">Dr Edalin Hendry</Link>
              </h3>
              <div className="patient-details">
                <h5 className="mb-0">
                  BDS, MDS - Oral &amp; Maxillofacial Surgery
                </h5>
              </div>
              <span className="badge doctor-role-badge">
                <i className="fa-solid fa-circle" />
                Dentist
              </span>
            </div>
          </div>
        </div>
        <div className="doctor-available-head">
          <div className="input-block input-block-new">
            <label className="form-label">
              Availability <span className="text-danger">*</span>
            </label>

            <Select
              className='select'
              options={availablity}
              defaultValue={availablity[0]} />

          </div>
        </div>
        <div className="dashboard-widget">
          <nav className="dashboard-menu">
            <ul>
              <li className={pathnames.includes("/doctor/doctor-dashboard") ? "active" : ""}>

                <Link to="/doctor/doctor-dashboard">
                  <i className="fa-solid fa-shapes me-2" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className={pathnames.includes("/doctor/doctor-request") ? "active" : ""}>
                <Link to="/doctor/doctor-request">
                  <i className="fa-solid fa-calendar-check me-2" />
                  <span>Requests</span>
                  <small className="unread-msg">2</small>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/doctor/doctor-appointments-grid") || pathnames.includes('/doctor/appointments') || pathnames.includes('/doctor/doctor-appointment-start') || pathnames.includes('/doctor/doctor-upcoming-appointment') || pathnames.includes("/doctor/doctor-cancelled-appointment-2") || pathnames.includes('/doctor/doctor-cancelled-appointment') ? "active" : ""
                }
              >
                <Link to="/doctor/appointments">
                  <i className="fa-solid fa-calendar-days me-2" />
                  <span>Appointments</span>
                </Link>
              </li>

              <li className={pathnames.includes('/doctor/available-timings') ? 'active' : ''}>
                <Link to="/doctor/available-timings">
                  <i className="fa-solid fa-calendar-day me-2" />
                  <span>Available Timings</span>
                </Link>
              </li>
              <li className={pathnames.includes('/doctor/my-patients') || pathnames.includes('/doctor/patient-profile') ? "active" : ''}>
                <Link to="/doctor/my-patients">
                  <i className="fa-solid fa-user-injured me-2" />
                  <span>My Patients</span>
                </Link>
              </li>
              <li className={pathnames.includes('/doctor/doctor-specialities') ? 'active' : ''}>
                <Link to="/doctor/doctor-specialities">
                  <i className="fa-solid fa-clock me-2" />
                  <span>Specialties &amp; Services</span>
                </Link>
              </li>
              <li className={pathnames.includes('/doctor/review') ? 'active' : ''}>
                <Link to="/doctor/review">
                  <i className="fas fa-star me-2" />
                  <span>Reviews</span>
                </Link>
              </li>
              <li className={pathnames.includes('/doctor/account') ? 'active' : ''}>

                <Link to="/doctor/account">
                  <i className="fa-solid fa-file-contract me-2" />
                  <span>Accounts</span>
                </Link>
              </li>
              <li className={pathnames.includes('/doctor/invoices') ? 'active' : ''}>
                <Link to="/doctor/invoices">
                  <i className="fa-solid fa-file-lines me-2" />
                  <span>Invoices</span>
                </Link>
              </li>
              <li className={pathnames.includes('/doctor/doctor-payment') ? 'active' : ''}>
                <Link to="/doctor/doctor-payment">
                  <i className="fa-solid fa-money-bill-1 me-2" />
                  <span>Payout Settings</span>
                </Link>
              </li>
              <li>
                <Link to="/doctor/chat-doctor">
                  <i className="fa-solid fa-comments me-2" />
                  <span>Message</span>
                  <small className="unread-msg">7</small>
                </Link>
              </li>
              <li className={pathnames.includes('/doctor/profile-setting') || pathnames.includes('/doctor/doctor-experience') || pathnames.includes('/doctor/doctor-awards-settings') || pathnames.includes('/doctor/doctor-insurance-settings') || pathnames.includes('/doctor/doctor-clinics-settings') || pathnames.includes('/doctor/doctor-business-setting') ? 'active' : ''}>
                <Link to="/doctor/profile-setting">
                  <i className="fa-solid fa-user-pen me-2" />
                  <span>Profile Settings</span>
                </Link>
              </li>
              <li className={pathnames.includes('/doctor/social-media') ? 'active' : ''}>
                <Link to="/doctor/social-media">
                  <i className="fa-solid fa-shield me-2" />
                  <span>Social Media</span>
                </Link>
              </li>
              <li className={pathnames.includes('/doctor/doctor-change-password') ? 'active' : ''}>
                <Link to="/doctor/doctor-change-password">
                  <i className="fa-solid fa-key me-2" />
                  <span>Change Password</span>
                </Link>
              </li>
              <li className={pathnames.includes("/login") ? 'active' : ''}>
                <Link to="/login">
                  <i className="fa-solid fa-calendar-check me-2" />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* /Profile Sidebar */}
    </>
  );
};

export default DoctorSidebar;
