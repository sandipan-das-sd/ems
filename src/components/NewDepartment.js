import React, { useState } from "react";
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";

export default function NewDepartment() {
  const [formData, setFormData] = useState({
    deptName: "",
    deptID: "", 
  });
  const navigate=useNavigate()
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/adddept', formData);
      if (res.status === 201) {
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 3000); // Hides the success alert after 3 seconds
      } else {
        setShowErrorAlert(true);
      }
    } catch (error) {
      console.error('Error adding Department Details:', error);
      setShowErrorAlert(true);
    }

    setFormData({
      deptName:'',
      deptID:''
    });
  };

  return (
    <>
      {showSuccessAlert && (
        <div className="alert alert-success d-flex align-items-center" role="alert">
          <span className="me-10" role="img" aria-label="Success">✅</span>
          <div>
            Successfully Added Department Details
          </div>
        </div>
      )}

      {showErrorAlert && (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          <span className="me-10" role="img" aria-label="Error">❌</span>
          Error adding Department Details
        </div>
      )}

      <div className="container my-2">
        <h2>Add Department</h2>
      </div>

      <div className="container-fluid pt-3" style={{ padding: "100px" }}>
        <form onSubmit={handleSubmit}>
          <div className="row d-flex justify-content-evenly">
            <h5 style={{ fontSize: "20px" }} className="px-2">
              Add Department
            </h5>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <b className="">Department Name</b>
                    <input
                      type="text"
                      name="deptName"
                      id="deptname"
                      value={formData.deptName}
                      placeholder="Enter department name in Caps"
                      onChange={handleChange}
                      style={{
                        border: "1px solid",
                        width: "100%",
                        height: "30px",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <b className="">Department ID</b>
                    <input
                      type="text"
                      name="deptID"
                      id="deptid"
                      value={formData.deptID}
                      onChange={handleChange}
                      style={{
                        border: "1px solid",
                        width: "100%",
                        height: "30px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <button type="submit" className="btn btn-success float-end">
                Submit
              </button>
              <button type="button" className="btn btn-success float-right" onClick={() => navigate('/manageDepartment')}>
                Manage Department
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
