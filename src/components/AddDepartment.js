import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import NewDepartment from './NewDepartment';

export default function AddDepartment() {
  const navStyle = {
    backgroundColor: '#4b6cb7',
    backgroundImage: 'linear-gradient(to right, #ff6b6b, #556270)',
    color: '#fff',
    padding: '10px',
  };

  const linkStyle = {
    fontSize: '1.5rem',
    color: '#fff',
    cursor: 'pointer',
    marginLeft: '20px',
  };

  return (
    <>
      <Navbar expand="lg" style={navStyle}>
        <Navbar.Brand style={{ fontSize: '25px' }}>Department</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={linkStyle}>
              <span className="ms-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                </svg>
              </span>
              Home
              <span className='ms-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                </svg>
              </span>
            </Nav.Link>
            <Nav.Link href="/addDepartment" style={linkStyle}>Add Department
              <span className='ms-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                </svg>
              </span>
            </Nav.Link>
            <Nav.Link href="/departments" style={linkStyle}>Departments</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
<NewDepartment></NewDepartment>
      </div>
      {/* Make sure to use Footer if needed */}
    </>
  );
}