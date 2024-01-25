//View staff-> Staff lists

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { deleteUsers, getUsers } from "../../service/api";

const ViewStaff = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteButton = async (id) => {
    try {
      const res = await deleteUsers(id);
      if (res.status === 201) {
        alert("Successfully deleted");
        // Refresh the user list after deletion
        getAllUsers();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []); // Removed the dependency array since getAllUsers does not depend on any props or state
  return (
    <div>
      <div className="container-fluid">

        <form>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="svg-inline--fa fa-bars fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style={{
              height:"30px",
              width:"30px"
            }}
          >
            <path
              fill="currentColor"
              style={{
              height:"30px",
              width:"30px"
            }}
              d="M16 136C16 120.6 29.36 108 48 108H400C418.6 108 432 120.6 432 136S418.6 164 400 164H48C29.36 164 16 151.4 16 136zM48 236H400C418.6 236 432 248.6 432 264S418.6 292 400 292H48C29.36 292 16 279.4 16 264S29.36 236 48 236zM400 372H48C29.36 372 16 359.4 16 344S29.36 316 48 316H400C418.6 316 432 328.6 432 344S418.6 372 400 372zM400 444H48C29.36 444 16 431.4 16 416S29.36 388 48 388H400C418.6 388 432 400.6 432 416S418.6 444 400 444z
              "
            ></path>
            
          </svg>

          <NavLink to="/" className="top-nav">
            Home
          </NavLink>
          <NavLink to="" className="top-nav">
            Contact
          </NavLink>

        </form>
        {/* user icon */}
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="user"
          className="svg-inline--fa fa-user fa-w-14 float-right mr-3"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{
              height:"30px",
              width:"30px"
            }}
        >
          <path
            fill="currentColor"
            d="M224 48c66.74 0 121.28 54.23 121.72 120.92C346.83 174.34 290.19 230 224 230s-122.83-55.66-121.72-161.08C102.72 102.23 157.26 48 224 48zm0 32c-39.77 0-72 32.23-72 72s32.23 72 72 72 72-32.23 72-72-32.23-72-72-72zM16 464h416c8.84 0 16-7.16 16-16s-7.16-16-16-16H16C7.16 432 0 439.16 0 448s7.16 16 16 16z"
          ></path>
        </svg>
        {/* Bel icon */}
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="bell"
          className="svg-inline--fa fa-bell fa-w-14 float-right"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{
              height:"30px",
              width:"30px"
            }}
        >
          <path
            fill="currentColor"
            style={{
              height:"30px",
              width:"30px"
            }}
            d="M224 512c44.31 0 80-35.69 80-79.8H144c0 44.11 35.69 79.8 80 79.8zM397.48 359.7C353.71 319.3 336 282.7 336 232V144C336 89.63 290.4 45.37 236.2 44.31C232.1 39.17 224.7 36 224 36S215.9 39.17 211.8 44.31C157.6 45.37 112 89.63 112 144v88c0 50.7-17.71 87.34-61.48 127.7-13.37 12.17-13.25 32.63.32 45.09C63.57 416.77 78.77 432 96 432H352c17.23 0 32.43-15.23 35.16-24.21c13.57-12.47 13.69-33.93.32-46.09zM416 232c0 50.7-17.71 87.34-61.48 127.7-13.37 12.17-13.25 32.63.32 45.09C367.57 416.77 382.77 432 400 432H432c17.23 0 32.43-15.23 35.16-24.21c13.57-12.47 13.69-33.93.32-46.09C470.9 319.3 453.2 282.7 453.2 232v-8c0-61.87-50.13-112-112-112s-112 50.13-112 112v8zM224 8C99.85 8 0 107.85 0 232v8c0 32.69 14.12 63.78 38.6 89.24C36.55 345.42 32 388.37 32 432c0 53.02 43.16 96 96 96h288c52.84 0 96-43.16 96-96 0-43.63-4.55-86.58-6.6-104.76C393.88 303.78 408 272.69 408 240v-8C408 107.85 308.15 8 224 8z"
          ></path>
          
        </svg>
        {/* Envelp icon */}
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="envelope"
          className="svg-inline--fa fa-envelope fa-w-16 float-right"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style={{
              height:"30px",
              width:"30px"
            }}
        >
          <path
            fill="currentColor"
            d="M504 80H8C3.58 80 0 83.58 0 88v336c0 4.42 3.58 8 8 8h496c4.42 0 8-3.58 8-8V88c0-4.42-3.58-8-8-8zM256 275.16L35.64 131.28c-4.24-3.42-10.32-3.13-14.28.68-3.95 3.8-4.42 9.95-.74 14.2L64 172.8L224 289l160-102.72 42.68 26.6c3.69 2.31 8.32 1.94 11.96-.9 3.64-2.85 5.36-7.64 4.48-12.24L256 275.16z"
          ></path>
        </svg>


      </div>
      <div className="container-fluid whole">
        <div className="row">
          <div className="col-12">
            <div className="body-title">
              <h1>Welcome to Employee Manegment System</h1>
              <div className="service-heading">
                <NavLink to="/" className="servicenav">
                  Home /
                </NavLink>
                <span> View Staff Details</span>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-view">
              <h5>View Staff Details</h5>
              <hr></hr>

              <div className="row">
                <div className="col-12">
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th>Sno.</th>
                        <th>Staff Name</th>
                        <th>Mobile Number</th>
                        <th>D.O.B</th>
                        <th>Gender</th>
                        <th>Religion</th>
                        <th>Letter of joining Date</th>
                        <th>Department</th>
                        <th>Employee Ment Id</th>
                        <th>Joining Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={index + 1}>
                          <td>{index + 1}</td>
                          <td>{user.cname}</td>
                          <td>{user.mobile}</td>
                          <td>{user.dob}</td>

                          <td>{user.gender}</td>
                          <td>{user.rel}</td>
                          <td>{user.adate}</td>
                          <td>{user.dept}</td>
                          <td>{user.empid}</td>
                          <td>{user.doj}</td>
                          <td>
                            {user.image ? (
                              <img
                                src={`http://localhost:5001/uploads/${user.image}`}
                                alt={`Image of ${user.cname}`}
                                width="30px"
                                height="30px"
                              />
                            ) : (
                              <span>No Image Available</span>
                            )}
                          </td>


                          <td>
                            <NavLink
                              to={`/pages/EditStaff/${user._id}`}
                              className="action-btn"
                            >
                              {/* Edit image */}
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="edit"
                                className="svg-inline--fa fa-edit fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                style={{
              height:"30px",
              width:"30px"
            }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M563.1 126.2l-70.2-70.2c-9.3-9.3-24.5-9.3-33.8 0L150.2 400.8 67 437c-12.4 3.3-25.3-3.7-32.4-13.8L2.6 410.5c-2.2-4.3-2.3-9.6 0-14L89 64.2C96 54 105.8 44.3 116 35.9 124.1 28.3 134.2 24 144.2 24c3.7 0 7.3 0.6 10.9 1.8l315.2 88.7c9.9 2.8 18.4 11.2 21.2 21.2l88.7 315.2c0.6 2.1 0.8 4.2 0.8 6.3 0 13.7-11.1 24.9-24.9 24.9-2.1 0-4.2-0.3-6.3-0.8l-315.2-88.7c-9.9-2.8-18.4-11.2-21.2-21.2L6.3 109.1C5.5 105.7 5.2 102 5.2 98s0.3-7.7 0.8-11.5L28.5 44c6.2-23.5 29.3-40.5 55.1-40.5 9.8 0 19.3 3.2 27.1 9.2L563.1 92.4C572.4 101.7 572.4 116.9 563.1 126.2zM512 137.9L438.1 64 495 7.1 568.9 81 512 137.9zM77 460.9l-44.8-44.8 401.4-401.4 44.8 44.8L77 460.9z"
                                ></path>
                              </svg>
                            </NavLink>

                            <NavLink
                              to=""
                              className="action-btn ml-2"
                              style={{ backgroundColor: "#F94892" }}
                            >
                              {/* Eye icon  */}
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="eye"
                                className="svg-inline--fa fa-eye fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                style={{
              height:"30px",
              width:"30px"
            }}
                              >
                                <path
                                  fill="currentColor"
                                  style={{
              height:"30px",
              width:"30px"
            }}
                                  d="M0 256c0 99.5 61 184.9 147.6 220.6 7.8 1.8 16.2 2.8 24.4 2.8 68.4 0 124-55.6 124-124 0-8.2-1-16.5-2.8-24.4C313.1 60.9 160.4 0 0 0v256zm276.6 140.4C261.3 402.7 259.7 400 256 400s-5.3 2.7-20.6 96.4c-2.1 11-14.3 19.6-26.4 19.6-14.2 0-27.1-11.6-31.7-29.6-1.8-7.3.3-14.7 5.7-20.1l19.2-19.2c-31.5-12.2-54.2-41.8-54.2-77.3 0-47.4 38.6-86 86-86s86 38.6 86 86c0 38.5-24.9 71.6-59.6 83.6l23.6-23.6c5.4-5.4 12.8-7.5 20.1-5.7 17.8 4.6 29.4 18.5 29.4 35.7 0 13.4-8.8 26.3-23.6 33.4zM560 256c-67.3 0-122 54.7-122 122s54.7 122 122 122 122-54.7 122-122-54.7-122-122-122zm-6 176c-12.4 36.4-39.1 65.7-75.7 78.3C454.2 512 384 504 384 504s40.6-75.7 41.1-77.1c3.5-10.1 12.1-17.3 22.9-17.3 14.2 0 27.1 11.6 31.7 29.6 1.8 7.3-.3 14.7-5.7 20.1l-19.2 19.2c31.5 12.2 54.2 41.8 54.2 77.3 0 18.5-15.1 33.6-33.6 33.6-16.2 0-30-12.3-32.1-28.2z"
                                ></path>
                              </svg>

                            </NavLink>
                            <NavLink
                              to=""
                              onClick={() => {
                                deleteButton(user._id);
                              }}
                              className="action-btn ml-2"
                              style={{
                                backgroundColor: "#D2001A",
                                padding: "5px 9px",
                              }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                              </svg>
                            </NavLink>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default ViewStaff;


