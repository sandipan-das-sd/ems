import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ManageDepartment() {
  const tableStyle = {
    background: 'linear-gradient(135deg, #2980b9, #6dd5fa)', // Gradient background
    color: '#fff', // Text color
  };

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

  const handleDelete = (userId) => {
    // Implement delete functionality here
    console.log('Delete user with ID:', userId);
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
                    {/* Delete Button */}
                    {/* View details button */}
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
