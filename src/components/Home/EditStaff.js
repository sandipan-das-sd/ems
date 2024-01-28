import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getUsersData, updateUser } from "../../service/api";
import { useNavigate } from "react-router-dom";

export default function EditStudent() {
  const navigate = useNavigate();
  const { id }= useParams();

  const getData = async () => {
    const res = await getUsersData(id);
    console.log(res.data);
    setUser(res.data);
  };

  useEffect(() => {
    getData();
  }, [id]);
  
  const [user, setUser] = useState({
    _id: "",
    cname: "",
    mobile: "",
    mail: "",
    dob: "",
    gender: "",
    rel: "",
    address: "",
    adate: "",
    dept: "",
    empid: "",
    doj: "",
  });

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
}
  

  const addUserDetails = async (e) => {
    e.preventDefault();
    const res = await updateUser(user);
    if (res.status === 201) {
      alert("Staff Successfully Updated");
      navigate("/pages/Viewstaff");
    } else {
      alert("Something is wrong");
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-10 body m-0 p-0">
            <div className="top-header">
              <form>
                {/* Bar Icon */}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bars"
                  className="svg-inline--fa fa-bars fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 136C16 120.6 29.36 108 48 108H400C418.6 108 432 120.6 432 136S418.6 164 400 164H48C29.36 164 16 151.4 16 136zM48 236H400C418.6 236 432 248.6 432 264S418.6 292 400 292H48C29.36 292 16 279.4 16 264S29.36 236 48 236zM400 372H48C29.36 372 16 359.4 16 344S29.36 316 48 316H400C418.6 316 432 328.6 432 344S418.6 372 400 372zM400 444H48C29.36 444 16 431.4 16 416S29.36 388 48 388H400C418.6 388 432 400.6 432 416S418.6 444 400 444z"
                  ></path>
                </svg>

                <NavLink to="/" className="top-nav">
                  Home
                </NavLink>
                <NavLink to="/contact" className="top-nav">
                  Contact
                </NavLink>
                {/* User Icon */}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="user"
                  className="svg-inline--fa fa-user fa-w-14 float-right mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224 48c66.74 0 121.28 54.23 121.72 120.92C346.83 174.34 290.19 230 224 230s-122.83-55.66-121.72-161.08C102.72 102.23 157.26 48 224 48zm0 32c-39.77 0-72 32.23-72 72s32.23 72 72 72 72-32.23 72-72-32.23-72-72-72zM16 464h416c8.84 0 16-7.16 16-16s-7.16-16-16-16H16C7.16 432 0 439.16 0 448s7.16 16 16 16z"
                  ></path>
                </svg>
                {/* Bell Icon */}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="bell"
                  className="svg-inline--fa fa-bell fa-w-14 float-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224 512c44.31 0 80-35.69 80-79.8H144c0 44.11 35.69 79.8 80 79.8zM397.48 359.7C353.71 319.3 336 282.7 336 232V144C336 89.63 290.4 45.37 236.2 44.31C232.1 39.17 224.7 36 224 36S215.9 39.17 211.8 44.31C157.6 45.37 112 89.63 112 144v88c0 50.7-17.71 87.34-61.48 127.7-13.37 12.17-13.25 32.63.32 45.09C63.57 416.77 78.77 432 96 432H352c17.23 0 32.43-15.23 35.16-24.21c13.57-12.47 13.69-33.93.32-46.09zM416 232c0 50.7-17.71 87.34-61.48 127.7-13.37 12.17-13.25 32.63.32 45.09C367.57 416.77 382.77 432 400 432H432c17.23 0 32.43-15.23 35.16-24.21c13.57-12.47 13.69-33.93.32-46.09C470.9 319.3 453.2 282.7 453.2 232v-8c0-61.87-50.13-112-112-112s-112 50.13-112 112v8zM224 8C99.85 8 0 107.85 0 232v8c0 32.69 14.12 63.78 38.6 89.24C36.55 345.42 32 388.37 32 432c0 53.02 43.16 96 96 96h288c52.84 0 96-43.16 96-96 0-43.63-4.55-86.58-6.6-104.76C393.88 303.78 408 272.69 408 240v-8C408 107.85 308.15 8 224 8z"
                  ></path>
                </svg>
                {/* Envelope Icon: */}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="envelope"
                  className="svg-inline--fa fa-envelope fa-w-16 float-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M504 80H8C3.58 80 0 83.58 0 88v336c0 4.42 3.58 8 8 8h496c4.42 0 8-3.58 8-8V88c0-4.42-3.58-8-8-8zM256 275.16L35.64 131.28c-4.24-3.42-10.32-3.13-14.28.68-3.95 3.8-4.42 9.95-.74 14.2L64 172.8L224 289l160-102.72 42.68 26.6c3.69 2.31 8.32 1.94 11.96-.9 3.64-2.85 5.36-7.64 4.48-12.24L256 275.16z"
                  ></path>
                </svg>
              </form>
            </div>

            {/* Body Area start here */}
            <div className="container-fluid whole">
              <div className="row">
                <div className="col-12">
                  <div className="body-title">
                    <h1>Welcome To Employee Manegment System</h1>
                    <div className="service-heading">
                      <NavLink to="/" className="servicenav">
                        Home /
                      </NavLink>
                      <span> Edit Staff</span>
                    </div>
                    <hr></hr>
                  </div>
                </div>
              </div>
              <form>
                <div className="row">
                  <div className="col-12">
                    <div className="serviceassign-form">
                      <h5>Add Staff Details</h5>
                      <hr></hr>
                      <div className="row">
                        <div className="col-12 col-md-4">
                          <table className="table table-responsive">
                            <tr>
                              <td>Staff Name</td>
                            </tr>
                            
                            <tr>
                              <td>
                                <input
                                  value={user.cname}
                                  type="text"
                                  name="cname"
                                  className="form-control"
                                  placeholder="Enter Staff Name"
                                  onChange={(e) => onValueChange(e)}
                                ></input>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div className="col-12 col-md-4">
                          <table className="table table-responsive">
                            <tr>
                              <td>Mobile Number</td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  value={user.mobile}
                                  type="text"
                                  name="mobile"
                                  className="form-control"
                                  placeholder="Enter Mobile Number"
                                  onChange={(e) => onValueChange(e)}
                                ></input>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div className="col-12 col-md-4">
                          <table className="table table-responsive">
                            <tr>
                              <td>Email Id</td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="email"
                                  value={user.mail}
                                  name="mail"
                                  className="form-control"
                                  placeholder="Enter Email Id"
                                  onChange={(e) => onValueChange(e)}
                                ></input>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-4">
                          <table className="table table-responsive">
                            <tr>
                              <td>Date Of Birth</td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="date"
                                  value={user.dob}
                                  name="dob"
                                  className="form-control"
                                  onChange={(e) => onValueChange(e)}
                                ></input>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div className="col-12 col-md-4">
                          <table className="table table-responsive">
                            <tr>
                              <td>Date Of Joining</td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="date"
                                  value={user.doj}
                                  name="doj"
                                  className="form-control"
                                  onChange={(e) => onValueChange(e)}
                                ></input>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div className="col-12 col-md-4">
                          <table className="table table-responsive">
                            <tr>
                              <td>Gender</td>
                            </tr>
                            <tr>
                              <td>
                                <select
                                  value={user.gender}
                                  name="gender"
                                  className="form-control"
                                  onChange={(e) => onValueChange(e)}
                                >
                                  <option disabled selected value>
                                    --Select Gender--
                                  </option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                  <option value="other">Other</option>
                                </select>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div className="col-12 col-md-4">
                          <table className="table table-responsive">
                            <tr>
                              <td>Religion</td>
                            </tr>
                            <tr>
                              <td>
                                <select
                                  value={user.rel}
                                  name="rel"
                                  className="form-control"
                                  onChange={(e) => onValueChange(e)}
                                >
                                  <option disabled selected value>
                                    --Select Religion--
                                  </option>
                                  <option value="hindu">Hindu</option>
                                  <option value="islam">Islam</option>
                                  <option value="sikh">Sikh</option>
                                  <option value="other">Other</option>
                                </select>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <table className="table table-responsive">
                            <tr>
                              <td>Address</td>
                            </tr>
                            <tr>
                              <td>
                                <textarea
                                  value={user.address}
                                  name="address"
                                  className="form-control"
                                  placeholder="Enter Full Address..."
                                  onChange={(e) => onValueChange(e)}
                                ></textarea>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 col-md-4">
                          <table className="table table-responsive">
                            <tr>
                              <td>Letter of Joining</td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  value={user.adate}
                                  type="date"
                                  name="adate"
                                  className="form-control"
                                  onChange={(e) => onValueChange(e)}
                                ></input>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div className="col-12 col-md-4">
                          <table className="table table-responsive">
                            <tr>
                              <td>Department</td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  value={user.dept}
                                  type="text"
                                  name="dept"
                                  className="form-control"
                                  placeholder="Enter Class"
                                  onChange={(e) => onValueChange(e)}
                                ></input>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div className="col-12 col-md-4">
                          <table className="table table-responsive">
                            <tr>
                              <td>Employee ID</td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="text"
                                  value={user.empid}
                                  name="empid"
                                  className="form-control"
                                  placeholder="Enter Roll Number"
                                  onChange={(e) => onValueChange(e)}
                                ></input>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <div className="btn">
                            <button
                              onClick={addUserDetails}
                              className="btn btn-primary mr-2"
                              style={{ fontFamily: "redo" }}
                            >
                              Update
                            </button>
                            <NavLink
                              to="/pages/Viewstaff"
                              className="btn btn-danger mr-2"
                            >
                              Cancel
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* Body area end here */}
          </div>
        </div>
      </div>
    </div>
  );
}
