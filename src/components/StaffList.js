import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Button, Table } from 'react-bootstrap';


export default function StaffList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/staffList')
            .then(result => setUsers(result.data)) 
            .catch(err => setError(err.message)); // Handle errors
    }, []);

    const navigate = useNavigate();

    return (
        <Container className='mt-5'>
            <div className='text-end'>
                <Link to="/staffAddForm" className='btn btn-success'>Add Staff</Link>
            </div>
            {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Age</th>
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
                            <td>{user.user_name}</td>
                            <td>{user.user_email}</td>
                            <td>{user.user_age}</td>
                            <td>{user.user_jobtitle}</td>
                            <td>{user.user_address}</td>
                            <td>{user.user_zip}</td>
                            <td>{user.user_city}</td>
                            <td>{user.user_state}</td>
                            <td>{user.user_district}</td>
                            <td>{user.user_phone}</td>
                            <td>{user.user_birthday}</td>
                            <td>
                                <img src={user.user_docx} alt="UserPhoto" />
                            </td>
                            <td>{user.user_department}</td>
                            <td>{user.user_workingtype}</td>
                            <td>{user.user_doj}</td>
                            <td>{user.user_emergencyphneno}</td>
                            <td>{user.user_emergency_contact_name}</td>
                            <td>
                                <Button onClick={() => navigate(`/editStaff/${user._id}`)} variant='success'>Update</Button>
                                <Link to={`/delete`}>
                                    <Button variant='primary'>Delete</Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
