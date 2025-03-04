/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from "react";
import {
  Medicalimg1,
  feature01,
  feature02,
  feature03,
  feature04,
  patient,
  patient1,
  patient2,
} from "../Pharmacy/image";
import { Link, useParams } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";
import { doctor_thumb_02 } from "../imagepath";
import { Phone, PhoneOff } from "feather-icons-react/build/IconComponents";
import Home10Header from "../home/home-10/header";
import Home10Footer from "../home/home-10/footer";
import { mockCourses } from "../../services/mock-data";
import parse from "html-react-parser";

const CourseDetails = (props) => {
  const { id } = useParams();
  const course = mockCourses[0] || {};
  const [show, setshow] = useState();
  const [selectedTab, setSelectedTab] = useState("overview");

  const handleTabClick = useCallback((tabId) => {
    setSelectedTab(tabId);
  }, []);

  const handleClose = () => {
    setshow(false);
  };

  const handleShow = () => {
    setshow(true);
  };

  return (
    <div className="main-wrapper">
      <Home10Header />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">{course.name}</h2>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="doctor-widget">
                <div className="doc-info-left">
                  <div className="doctor-img1">
                    <Link to={`/course/${id}`}>
                      <img
                        src={Medicalimg1}
                        className="img-fluid"
                        alt="User Image"
                      />
                    </Link>
                  </div>
                  <div className="doc-info-cont">
                    <h4 className="doc-name mb-2">{course.name}</h4>
                    <div className="clinic-details">
                      <div className="clini-infos pt-3">
                        <p className="doc-location mb-2 text-ellipse">
                          <i className="fas fa-map-marker-alt me-1" />
                          {course.place},&nbsp;{course.location}
                        </p>
                        <p className="doc-location mb-2">
                          <i className="fas fa-graduation-cap me-1" />
                          {course.professor}
                        </p>
                        <p className="doc-location mb-2">
                          <i className="fas fa-language me-1" />
                          {course.language}
                        </p>
                        <p className="doc-location mb-2">
                          <i className="fas fa-clock me-1" />
                          From&nbsp;<b>{course.startDate}</b>&nbsp;to&nbsp;
                          <b>{course.endDate}</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="doc-info-right d-flex align-items-center justify-content-center">
                  <div className="clinic-booking">
                    <Link
                      className="apt-btn"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#voice_call"
                      onClick={handleShow}
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Doctor Details Tab */}
          <div className="card">
            <div className="card-body pt-0">
              {/* Tab Menu */}
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        selectedTab === "overview" ? "active" : ""
                      }`}
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTabClick("overview");
                      }}
                    >
                      Course Overview
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        selectedTab === "professor" ? "active" : ""
                      }`}
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTabClick("professor");
                      }}
                    >
                      Professor
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        selectedTab === "location" ? "active" : ""
                      }`}
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTabClick("location");
                      }}
                    >
                      Location
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        selectedTab === "schedule" ? "active" : ""
                      }`}
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTabClick("schedule");
                      }}
                    >
                      Schedules
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* /Tab Menu */}
              {/* Tab Content */}
              <div className="tab-content pt-0">
                {/* Overview Content */}
                <div
                  role="tabpanel"
                  id="doc_overview"
                  className={`tab-pane fade ${
                    selectedTab === "overview" ? "show active" : ""
                  }`}
                >
                  <div className="row">
                    <div className="col-md-9">
                      <div className="widget about-widget">
                        {parse(course.description)}
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Overview Content */}

                {/* Professor Content */}
                <div
                  role="tabpanel"
                  id="doc_reviews"
                  className={`tab-pane fade ${
                    selectedTab === "professor" ? "show active" : ""
                  }`}
                >
                  <div className="row">
                    <div className="col-md-9">
                      <div className="widget about-widget">
                        {parse(course.professorDescription)}
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Professor Content */}

                {/* Location Content */}
                <div
                  role="tabpanel"
                  id="doc_locations"
                  className={`tab-pane fade ${
                    selectedTab === "location" ? "show active" : ""
                  }`}
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="widget location-widget">
                        <p>
                          <i className="fas fa-map-marker-alt me-2"></i>
                          {course.place},&nbsp;{course.location}
                        </p>
                        
                        <div className="location-map mt-4">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.7657813773635!2d19.8368578!3d41.3357062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350314129f40d67%3A0x5bb55f6094dc53ce!2sPhysio%20Zone!5e0!3m2!1ssq!2s!4v1741046745573!5m2!1ssq!2s"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title={course.place}
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Location Content */}

                {/* Schedule Content */}
                <div
                  role="tabpanel"
                  id="doc_business_hours"
                  className={`tab-pane fade ${
                    selectedTab === "schedule" ? "show active" : ""
                  }`}
                >
                  <div className="row">
                    <div className="col-md-9">
                      <div className="widget schedule-widget">
                        <h4 className="widget-title">Course Schedule</h4>
                        <div className="schedule-table table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Day</th>
                                <th>Time</th>
                                <th>Instructor</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Monday</td>
                                <td>9:00 AM - 12:00 PM</td>
                                <td>Dr. John Smith</td>
                              </tr>
                              <tr>
                                <td>Wednesday</td>
                                <td>9:00 AM - 12:00 PM</td>
                                <td>Dr. John Smith</td>
                              </tr>
                              <tr>
                                <td>Friday</td>
                                <td>9:00 AM - 12:00 PM</td>
                                <td>Dr. John Smith</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Schedule Content */}
              </div>
            </div>
          </div>
          {/* /Doctor Details Tab */}
        </div>
      </div>
      {/* /Page Content */}

      {/*view modal*/}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className="call-box incoming-box">
            <div className="call-wrapper">
              <div className="call-inner">
                <div className="call-user">
                  <img
                    alt="User Image"
                    src={doctor_thumb_02}
                    className="call-avatar"
                  />
                  <h4>Dr. Darren Elder</h4>
                  <span>Connecting...</span>
                </div>
                <div className="call-items">
                  <Link
                    to="#"
                    className="btn call-item call-end"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <PhoneOff />
                  </Link>
                  <Link
                    to="/pages/voicecall"
                    className="btn call-item call-start"
                  >
                    <Phone />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Home10Footer />
    </div>
  );
};

export default CourseDetails;
