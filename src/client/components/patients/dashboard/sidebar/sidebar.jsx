import React from "react";
import { Link } from "react-router-dom";
import { doctordashboardprofile06 } from "../../../imagepath";

export const DashboardSidebar = () => {
  const pathnames = window.location.pathname;
  return (
    <>
    {/* Profile Sidebar */}
    <div className="profile-sidebar patient-sidebar profile-sidebar-new">
      <div className="widget-profile pro-widget-content">
        <div className="profile-info-widget">
          <Link to="/patient/profile" className="booking-doc-img">
            <img
              src={doctordashboardprofile06}
              alt="User Image"
            />
          </Link>
          <div className="profile-det-info">
            <h3>
              <Link to="/patient/profile">Hendrita</Link>
            </h3>
            <div className="patient-details">
              <h5 className="mb-0">Patient ID : PT254654</h5>
            </div>
            <span>
              Female <i className="fa-solid fa-circle" /> 32 years 03 Months
            </span>
          </div>
        </div>
      </div>
      <div className="dashboard-widget">
        <nav className="dashboard-menu">
          <ul>
            <li className={pathnames.includes('/patient/dashboard') ? 'active' : ''}>
              <Link to="/patient/dashboard">
                <i className="fa-solid fa-shapes me-2" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className={pathnames.includes('/patient/patient-appointments') || pathnames.includes('/patient/patient-cancelled-appointment') || pathnames.includes('/patient/patient-cancelled-appointment') || pathnames.includes('/patient/patient-completed-appointment') || pathnames.includes('/patient/upcoming-appointment') ? 'active' : ''}>

              <Link to="/patient/patient-appointments">
                <i className="fa-solid fa-calendar-days me-2" />
                <span>My Appointments</span>
              </Link>
            </li>
            <li className={pathnames.includes('/patient/favourites') ? 'active' : ''}>

              <Link to="/patient/favourites">
                <i className="fa-solid fa-user-doctor me-2" />
                <span>Favourites</span>
              </Link>
            </li>
            <li className={pathnames.includes('/patient/dependent') ? 'active' : ''}>

              <Link to="/patient/dependent">
                <i className="fa-solid fa-user-plus me-2" />
                <span>Dependants</span>
              </Link>
            </li>
            <li className={pathnames.includes('/patient/medicalrecords') ? 'active' : ''}>

              <Link to="/patient/medicalrecords">
                <i className="fa-solid fa-money-bill-1 me-2" />
                <span>Add Medical Records</span>
              </Link>
            </li>
            <li className={pathnames.includes('/patient/accounts') ? 'active' : ''}>

              <Link to="/patient/accounts">
                <i className="fa-solid fa-file-contract me-2" />
                <span>Accounts</span>
              </Link>
            </li>
            <li className={pathnames.includes('/patient/patient-invoice') ? 'active' : ''}>

              <Link to="/patient/patient-invoice">
                <i className="fa-solid fa-file-lines me-2" />
                <span>Invoices</span>
              </Link>
            </li>
            <li className={pathnames.includes('/patient/patient-chat') ? 'active' : ''}>

              <Link to="/patient/patient-chat">
                <i className="fa-solid fa-comments me-2" />
                <span>Message</span>
                <small className="unread-msg">7</small>
              </Link>
            </li>
            <li className={pathnames.includes('/patient/profile') ? 'active' : ''}>

              <Link to="/patient/profile">
                <i className="fa-solid fa-user-pen me-2" />
                <span>Profile Settings</span>
              </Link>
            </li>
            <li className={pathnames.includes('/patient/medicaldetail') ? 'active' : ''}>

              <Link to="/patient/medicaldetails">
                <i className="fa-solid fa-shield-halved me-2" />
                <span>Medical Details</span>
              </Link>
            </li>
            <li className={pathnames.includes('/patient/change-password') ? 'active' : ''}>

              <Link to="/patient/change-password">
                <i className="fa-solid fa-key me-2" />
                <span>Change Password</span>
              </Link>
            </li>
            <li>
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
export default DashboardSidebar;
