import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function NewDepartment() {
  const [formData, setFormData] = useState({
    deptName: "",
    deptID: "",
  });
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
        setShowErrorAlert(false); // Reset the error alert state
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 3000); // Hides the success alert after 3 seconds
      } else {
        setShowErrorAlert(true);
        setErrorMessage('Failed to add department.');
      }
    } catch (error) {
      console.error('Error adding Department Details:', error);
      setShowErrorAlert(true);
      setErrorMessage(`  Error adding Department Details: ${error.message}`);
      setTimeout(() => {
        setShowErrorAlert(false)
      }, 3000);
    }

    setFormData({
      deptName: '',
      deptID: ''
    });
  };


  return (
    <>
      {showSuccessAlert && (
        <div className="alert alert-success d-flex align-items-center" role="alert" style={{ width: "1285px" }}>
          <span className="me-20" role="img" aria-label="Success">✅</span>
          <div>
            Department added Successfully!!!
          </div>
        </div>
      )}

      {showErrorAlert && (
        <div className="alert alert-danger d-flex align-items-center" role="alert" style={{ width: "1285px" }}>
          <span className="me-10" role="img" aria-label="Error">❌</span>
          {errorMessage}
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
                    {/* <input
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
                    /> */}
                    <input
                      type="text"
                      name="deptName"
                      id="deptname"
                      value={formData.deptName}
                      placeholder="Enter department name in Caps"
                      onChange={handleChange}
                      style={{
                        border: "1px solid #ced4da",
                        borderRadius: "5px",
                        width: "100%",
                        height: "30px",
                        padding: "5px 10px",
                        transition: "border-color 0.3s",
                        outline: "none", // Remove outline on focus
                      }}
                      className="form-control"
                      onMouseEnter={(e) => e.target.style.borderColor = "#80bdff"} // Change border color on hover
                      onMouseLeave={(e) => e.target.style.borderColor = "#ced4da"} // Reset border color on mouse leave
                      onFocus={(e) => e.target.style.borderColor = "#007bff"} // Change border color on focus
                      onBlur={(e) => e.target.style.borderColor = "#ced4da"} // Reset border color on blur
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
                        border: "1px solid #ced4da",
                        borderRadius: "5px",
                        width: "100%",
                        height: "30px",
                        padding: "5px 10px",
                        transition: "border-color 0.3s",
                        outline: "none", // Remove outline on focus
                      }}
                      className="form-control"
                      onMouseEnter={(e) => e.target.style.borderColor = "#80bdff"} // Change border color on hover
                      onMouseLeave={(e) => e.target.style.borderColor = "#ced4da"} // Reset border color on mouse leave
                      onFocus={(e) => e.target.style.borderColor = "#007bff"} // Change border color on focus
                      onBlur={(e) => e.target.style.borderColor = "#ced4da"} // Reset border color on blur
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
