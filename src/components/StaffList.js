import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';


export default function StaffList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    // Function to format ISO date to MM/DD/YYYY format
const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
    useEffect(() => {
        axios.get('http://localhost:3001/staffList')
            .then((result) => {
                setUsers(result.data);
                setLoading(false);
            })
            .catch((err) => setError(err.message)); // Handle errors
    }, []);
    
    const handelDelete = (id) => {
        // Use a custom confirmation dialog
        const confirmed = window.confirm("Are you sure you want to delete?");
        
        // If confirmed, proceed with deletion
        if (confirmed) {
            axios.delete('http://localhost:3001/deleteStaff/' + id)
                .then(res => {
                    console.log(res);
                    alert("Record Deleted successfully");
                    window.location.reload();
                })
                .catch(error => console.log(error));
        }
    }
    
    
    const navigate = useNavigate();
    // const handleAddStaff = () => {
    //     navigate('/staffAddForm');
    // }

    // const handleAddStaffError = (error) => {
    //     alert(error);
    //     navigate('/staffList');
    // }

    return (
        <div className="container-fluid whole">
        <Container className='mt-10'>
        
            <div className='text-end'>
                <Link to="/staffAddForm" className='btn btn-success'>Add Staff</Link>
            </div>
            {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
            {loading ? (
                <p>Loading...</p>
            ) : users.length === 0 ? (
                <p>No data available. Add data to see the staff list.</p>
            ) : (
                <div className="row">
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Job Title</th>
                        <th>Address</th>
                        <th>Zip</th>
                        <th>City</th>
                        <th>State</th>
                        <th>District</th>
                        <th>Phone</th>
                        <th>Birthday</th>
                        <th>Document</th>
                        <th>Department</th>
                        <th>Working Type</th>
                        <th>Start Date</th>
                        <th>Emergency Contact</th>
                        <th>Emergency Person</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                        <td>{ index+1}</td>
                            <td>{user.user_name}</td>
                            <td>{user.user_email}</td>
                            <td>{user.user_age}</td>
                            <td>{user.user_sex}</td>
                            <td>{user.user_jobtitle}</td>
                            <td>{user.user_address}</td>
                            <td>{user.user_zip}</td>
                            <td>{user.user_city}</td>
                            <td>{user.user_state}</td>
                            <td>{user.user_district}</td>
                            <td>{user.user_phone}</td>
                            <td>{formatDate(user.user_birthday)}</td>
                            <td>
                                <img src={user.user_docx} alt="UserPhoto" />
                            </td>
                            <td>{user.user_department}</td>
                            <td>{user.user_workingtype}</td>
                            <td>{formatDate(user.user_doj)}</td>
                            <td>{user.user_emergencyphneno}</td>
                            <td>{user.user_emergency_contact_name}</td>
                            <td>
                                <Button onClick={() => navigate(`/editStaff/${user._id}`)} variant='success'>Update</Button>
                                
                                    <Button variant='primary' onClick={(e)=>{
                                        handelDelete(user._id);
                                    }}>Delete</Button>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </div>
            )}
        </Container>
        </div>
    );
   }
  