import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ManageDepartment() {
  const tableStyle = {
    background: 'linear-gradient(135deg, #2980b9, #6dd5fa)', // Gradient background
    color: '#fff', // Text color
  };
  const navigate=useNavigate();

  const loaderStyle = {
    width: '60px',
    aspectRatio: '2',
    background: 'no-repeat radial-gradient(circle closest-side, #000 90%, #0000)',
    backgroundSize: 'calc(100%/3) 50%',
    animation: 'l3 1s infinite linear',
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/manageDepartment')
      .then((result) => {
        setUser(result.data);
        // Simulate loading time by setting loading to true for 2 seconds
        setTimeout(() => setLoading(false), 2000);
      })
      .catch((err) => setError(err.message)); // Handle errors
  }, []);

  const handleDelete = (id) => {
    // Implement delete functionality here
    // Use a custom confirmation dialog
    const confirmed = window.confirm("Are you sure you want to delete?");
        
    // If confirmed, proceed with deletion
    if (confirmed) {
        axios.delete('http://localhost:3001/deletedept/'+ id)
            .then(res => {
                console.log(res);
                alert("Record Deleted successfully");
                window.location.reload();
            })
            .catch(error => console.log(error));
    }
    console.log('Delete user with ID:', id);
  };

  return (
    <div className='container-fluid'>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <div style={loaderStyle}>Loading...</div>
      ) : user.length === 0 ? (
        <p>No data available. Add data to see the Department list.</p>
      ) : (
        <>
          <h1>Manage Department</h1>
          <table className="table" style={tableStyle}>
            <thead>
              <tr>
                <th>#</th>
                <th>Department Name</th>
                <th>Department ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((userData, index) => (
                <tr key={userData._id}>
                  <td>{index + 1}</td>
                  <td>{userData.deptName}</td>
                  <td>{userData.deptID}</td>
                  <td>
                    {/* Update button */}
                    <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-pencil-square " viewBox="0 0 16 16" onClick={() => navigate(`/editStaff/${user._id}`)} >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805
                                             2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 

                                             .196-.12l6.813-6.814z"
                                             style={{ cursor: 'pointer' }}
                                             />
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>

                                   

                    {/* Delete Button */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"
                                     onClick={() => handleDelete(userData._id)} >
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 
                                            1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1
                                            1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5
                                             8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 
                                             .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                                             style={{ cursor: 'pointer' }}
                                             />
                                            </svg>
                    {/* View details button */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye " viewBox="0 0 16 16">
                                             <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                                 <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                                                    onClick={() => navigate(`/viewStaff/${user._id}`)}
                                                 />
                                                </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
