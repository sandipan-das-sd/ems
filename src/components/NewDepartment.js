
// import React, { useState } from "react";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// export default function NewDepartment() {
//   const [formData, setFormData] = useState({
//     deptName: "",
//     deptID: "",
//   });
//   const navigate = useNavigate();
//   const [showSuccessAlert, setShowSuccessAlert] = useState(false);
//   const [showErrorAlert, setShowErrorAlert] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:3001/adddept', formData);
//       if (res.status === 201) {
//         setShowSuccessAlert(true);
//         setShowErrorAlert(false); // Reset the error alert state
//         setTimeout(() => {
//           setShowSuccessAlert(false);
//         }, 3000); // Hides the success alert after 3 seconds
//       } else {
//         setShowErrorAlert(true);
//         setErrorMessage('Failed to add department.');
//       }
//     } catch (error) {
//       console.error('Error adding Department Details:', error);
//       setShowErrorAlert(true);
//       setErrorMessage(`  Error adding Department Details: ${error.message}`);
//       setTimeout(() => {
//         setShowErrorAlert(false)
//       }, 3000);
//     }

//     setFormData({
//       deptName: '',
//       deptID: ''
//     });
//   };

//   return (
//     <>
//       {showSuccessAlert && (
//         <div className="alert alert-success d-flex align-items-center" role="alert" style={{ width: "185px" }}>
//           <span className="me-10" role="img" aria-label="Success">✅</span>
//           <div>
//             Department added Successfully!!!
//           </div>
//         </div>
//       )}

//       {showErrorAlert && (
//         <div className="alert alert-danger d-flex align-items-center" role="alert" style={{ width: "1285px" }}>
//           <span className="me-10" role="img" aria-label="Error">❌</span>
//           {errorMessage}
//         </div>
//       )}

//       <div className="container my-2" style={{ textAlign: "center" }}>
//         <h2 style={{ color: "#007bff", marginBottom: "20px", fontWeight: "bold" }}>Add Department</h2>
//         <hr style={{ borderTop: "2px solid #007bff" }} />
//       </div>

//       <div className="container-fluid pt-3" style={{ padding: "50px 100px", position: "relative" }}>
//         <form onSubmit={handleSubmit}>
//           <div className="row justify-content-center">
//             <div className="col-md-6">
//               <div className="mb-3">
//                 <b className="text-primary" style={{ fontSize: "24px", marginBottom: "15px", display: "block" }}>Add Department</b>
//                 <hr style={{ borderTop: "2px solid #007bff", width: "50px", margin: "0 auto 20px auto" }} />
//                 <div className="mb-3">
//                   <label htmlFor="deptName" className="form-label">Department Name</label>
//                   <input
//                     type="text"
//                     name="deptName"
//                     id="deptname"
//                     value={formData.deptName}
//                     placeholder="Enter department name in Caps"
//                     onChange={handleChange}
//                     className="form-control"
//                     style={{
//                       border: "1px solid #ced4da",
//                       borderRadius: "5px",
//                       transition: "border-color 0.3s",
//                     }}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="deptID" className="form-label">Department ID</label>
//                   <input
//                     type="text"
//                     name="deptID"
//                     id="deptid"
//                     value={formData.deptID}
//                     onChange={handleChange}
//                     className="form-control"
//                     style={{
//                       border: "1px solid #ced4da",
//                       borderRadius: "5px",
//                       transition: "border-color 0.3s",
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className="mb-3 text-center">
//                 <button type="submit" className="btn btn-primary btn-lg">Submit</button>
//                 <button type="button" className="btn btn-success btn-lg ms-3" onClick={() => navigate('/manageDepartment')}>
//                   Manage Department
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
// import React, { useState } from "react";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// export default function NewDepartment() {
//   const [formData, setFormData] = useState({
//     deptName: "",
//     deptID: "",
//   });
//   const navigate = useNavigate();
//   const [showSuccessAlert, setShowSuccessAlert] = useState(false);
//   const [showErrorAlert, setShowErrorAlert] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:3001/adddept', formData);
//       if (res.status === 201) {
//         setShowSuccessAlert(true);
//         setShowErrorAlert(false); // Reset the error alert state
//         setTimeout(() => {
//           setShowSuccessAlert(false);
//         }, 3000); // Hides the success alert after 3 seconds
//       } else {
//         setShowErrorAlert(true);
//         setErrorMessage('Failed to add department.');
//       }
//     } catch (error) {
//       console.error('Error adding Department Details:', error);
//       setShowErrorAlert(true);
//       setErrorMessage(`  Error adding Department Details: ${error.message}`);
//       setTimeout(() => {
//         setShowErrorAlert(false)
//       }, 3000);
//     }

//     setFormData({
//       deptName: '',
//       deptID: ''
//     });
//   };

//   return (
//     <>
//       {showSuccessAlert && (
//         <div className="alert alert-success d-flex align-items-center" role="alert" style={{ width: "185px" }}>
//           <span className="me-10" role="img" aria-label="Success">✅</span>
//           <div>
//             Department added Successfully!!!
//           </div>
//         </div>
//       )}

//       {showErrorAlert && (
//         <div className="alert alert-danger d-flex align-items-center" role="alert" style={{ width: "1285px" }}>
//           <span className="me-10" role="img" aria-label="Error">❌</span>
//           {errorMessage}
//         </div>
//       )}

//       <div className="container my-2" style={{ textAlign: "center" }}>
//         <h2 style={{ color: "#007bff", marginBottom: "20px", fontWeight: "bold" }}>Add Department</h2>
//         <hr style={{ borderTop: "2px solid #007bff" }} />
//       </div>

//       <div className="container-fluid pt-3" style={{ padding: "50px 100px", position: "relative" }}>
//         <form onSubmit={handleSubmit}>
//           <div className="row justify-content-center">
//             <div className="col-md-6">
//               <div className="mb-3" style={{ border: "2px solid #007bff", borderRadius: "10px", padding: "20px", transition: "border-color 0.3s" }}>
//                 <h3 style={{ color: "#007bff", marginBottom: "15px", borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>Add Department</h3>
//                 <div className="mb-3">
//                   <label htmlFor="deptName" className="form-label">Department Name</label>
//                   <input
//                     type="text"
//                     name="deptName"
//                     id="deptname"
//                     value={formData.deptName}
//                     placeholder="Enter department name in Caps"
//                     onChange={handleChange}
//                     className="form-control"
//                     style={{
//                       border: "1px solid #ced4da",
//                       borderRadius: "5px",
//                       transition: "border-color 0.3s",
//                     }}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="deptID" className="form-label">Department ID</label>
//                   <input
//                     type="text"
//                     name="deptID"
//                     id="deptid"
//                     value={formData.deptID}
//                     onChange={handleChange}
//                     className="form-control"
//                     style={{
//                       border: "1px solid #ced4da",
//                       borderRadius: "5px",
//                       transition: "border-color 0.3s",
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className="mb-3 text-center">
//                 <button type="submit" className="btn btn-primary btn-lg">Submit</button>
//                 <button type="button" className="btn btn-success btn-lg ms-3" onClick={() => navigate('/manageDepartment')}>
//                   Manage Department
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
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
    if (!formData.deptName || !formData.deptID) {
      alert("Please enter both department name and department ID");
      if (!formData.deptName) {
        document.getElementById("deptname").focus(); // Focus on department name input
      } else if (!formData.deptID) {
        document.getElementById("deptid").focus(); // Focus on department ID input
      }
      return; // Prevent further execution of the function
    }
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
          <span className="me-10" role="img" aria-label="Success">✅</span>
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

      <div className="container my-10" style={{ textAlign: "center" }}>
        <h2 style={{ color: "#007bff", marginBottom: "20px", fontWeight: "bold" }}>Add Department</h2>
        <hr style={{ borderTop: "3px solid #007bff" }} />
      </div>

      <div className="container-fluid py-5" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit} style={{ width: "600px", maxWidth: "90%" }}>
          <div className="mb-3" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)", border: "2px solid #80bdff", borderRadius: "10px", padding: "30px", transition: "border-color 0.3s" }}>
            <h3 style={{ color: "#007bff", marginBottom: "15px", borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>Add Department</h3>
            <div className="mb-3">
              <label htmlFor="deptName" className="form-label">Department Name</label>
              <input
                type="text"
                name="deptName"
                id="deptname"
                value={formData.deptName}
                placeholder="Enter department name in Caps"
                onChange={handleChange}
                className="form-control"
                style={{
                  border: "1px solid #ced4da",
                  borderRadius: "5px",
                  transition: "border-color 0.3s",
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="deptID" className="form-label">Department ID</label>
              <input
                type="text"
                name="deptID"
                id="deptid"
                value={formData.deptID}
                onChange={handleChange}
                className="form-control"
                style={{
                  border: "1px solid #ced4da",
                  borderRadius: "5px",
                  transition: "border-color 0.3s",
                }}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-lg">Submit</button>
              <button type="button" className="btn btn-success btn-lg ms-3" onClick={() => navigate('/manageDepartment')}>
                Manage Department
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
