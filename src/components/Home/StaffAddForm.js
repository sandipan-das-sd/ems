import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { addUser } from "../../service/api";
import { useNavigate } from "react-router-dom";

const StaffAddForm = () => {

  const defaultValue = {
    cname: '',
    mobile: '',
    mail: '',
    dob: '',
    doj: '',
    gender: '',
    rel: '',
    address: '',
    adate: '',
    dept: '',
    empid: '',
    image: '',
  }

  const [user, setUser] = useState(defaultValue);


  const fileData = (e) => {
    // console.log(e.target.files[0])
    setUser({ ...user, image: e.target.files[0] });
  }

  const navigate = useNavigate();

  const onValueChange = (e) => {
    const name = e.target.name; // Use the name attribute of the input field
    const value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  }


  //Form Data storing to API

  const addUserDetails = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', user.image, user.image.name);
    formData.append('cname', user.cname);
    formData.append('mobile', user.mobile);
    formData.append('mail', user.mail);
    formData.append('dob', user.dob);
    formData.append('gender', user.gender);
    formData.append('rel', user.rel);
    formData.append('address', user.address);
    formData.append('adate', user.adate);
    formData.append('dept', user.dept);
    formData.append('empid', user.empid);
    formData.append('doj', user.doj);

    try {
      const res = await addUser(formData);

      if (res.status === 201) {
        alert('Staff Successfully Added');
        navigate('/pages/ViewStaff');
      } else {
        console.error('Error adding user:', res.statusText);
        alert('Error: ' + res.statusText);
      }
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Error: ' + error.message);
    }

    const logoPath = '../images/ems logo.png';
  };


  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/*Body Area start here*/}
          <div className="container-fluid whole
            "style={{
              backgroundColor: '#EAD196'
            }}>
            <div className="row">
              <div className="col-12">
                <div className="body-title">
                  <h1>
                    Welcome To Employee Management System
                    <img src="{logoPath}" alt="logo"
                      style={{ height: '50px', width: '50px' }}
                    />
                  </h1>
                  <div className="service-heading">
                    <NavLink to="/" className="servicenav" style={{
                      textDecoration: 'none',
                      fontSize: '20px'
                    }}
                    >Home /</NavLink>
                    <span><NavLink to="/staffAddForm"
                      style={{
                        textDecoration: 'none',
                        fontSize: '20px'
                      }}>Add Staff</NavLink></span>
                  </div>
                  <hr></hr>
                </div>
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col-12"
                  style={{
                    backgroundColor: '#FDE767'
                  }}>
                  <div className="serviceassign-form"
                  >
                    <h5 >Add Staff Details</h5><hr></hr>
                    <div className="row">
                      <div className="col-12 col-md-4">
                        <table className="table table-responsive">
                          <tr>
                            <td>Staff Name</td>
                          </tr>
                          <tr>
                            <td><input type="text"
                              name="cname"
                              className="form-control"
                              placeholder="Enter Staff's Name"
                              onChange={(e) => onValueChange(e)}>
                            </input></td>
                          </tr>
                        </table>
                      </div>
                      <div className="col-12 col-md-4">
                        <table className="table table-responsive">
                          <tr>
                            <td>Mobile Number</td>
                          </tr>
                          <tr>
                            <td><input type="text"
                              name="mobile"
                              className="form-control"
                              placeholder="Enter Mobile Number"

                              onChange={(e) => onValueChange(e)}>
                            </input>
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
                            <td><input type="email"
                              name="mail"
                              className="form-control"
                              placeholder="Enter Email Id"

                              onChange={(e) => onValueChange(e)}></input></td>
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
                            <td><input type="date"
                              name="dob"

                              className="form-control"
                              onChange={(e) => onValueChange(e)}>

                            </input></td>
                          </tr>
                        </table>
                      </div>
                      <div className="col-12 col-md-4">
                        <table className="table table-responsive">
                          <tr>
                            <td>Date Of Joining</td>
                          </tr>
                          <tr>
                            <td><input type="date" name="doj"
                              className="form-control"

                              onChange={(e) => onValueChange(e)}></input></td>
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
                              <select name="gender" className="form-control"
                                onChange={(e) => onValueChange(e)}
                              >
                                <option disabled selected value>--Select Gender--</option>
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
                              <select name="rel"
                                className="form-control"
                                onChange={(e) => onValueChange(e)}
                              >
                                <option disabled selected value>
                                  --Select Religion--</option>
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
                              <textarea name="address"
                                className="form-control" placeholder="Enter Full Address..."
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
                            <td>Letter of Joining Date</td>
                          </tr>
                          <tr>
                            <td><input type="date"
                              name="adate"
                              className="form-control"

                              onChange={(e) => onValueChange(e)}>

                            </input>
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
                            <td><input type="text"
                              name="dept" className="form-control"

                              placeholder="Enter Department
  " onChange={(e) => onValueChange(e)}>

                            </input>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <div className="col-12 col-md-4">
                        <table className="table table-responsive">
                          <tr>
                            <td>Employee ID </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="text"
                                name="empid" className="form-control"

                                placeholder="Enter Employee ID "
                                onChange={(e) => onValueChange(e)}></input>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-4">
                        <table className="table table-responsive">
                          <tr>
                            <td>Photo</td>
                          </tr>
                          <tr>
                            <td><input type="file"
                              name="image"
                              className="form-control"

                              onChange={fileData}></input></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="btn">
                          <NavLink to=""
                            onClick={addUserDetails}
                            className="btn btn-primary mr-2"
                            style={{ fontFamily: 'redo' }}>Submit Form</NavLink>
                          <button type="reset"
                            className="btn btn-danger mr-2">
                            Reset Details</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/*Body area end here*/}
        </div>
      </div>
    </div>

  )
}

export default StaffAddForm