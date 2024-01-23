import React, { useRef, useState } from 'react';
import { useToast, ChakraProvider } from '@chakra-ui/react';
import { addUser } from '../../service/api';

export default function StaffAddForm() {
  const toast = useToast();

  // Initial state for form data
  const [staff, setStaff] = useState({
    name: '',
    fname: '',
    mobile: '',
    mail: '',
    adhar: '',
    dob: '',
    doj: '',
    gender: '',
    rel: '',
    image: '',
  });

  // Additional state for number and file input
  const [number, setNumber] = useState('');

  const [file, setFile] = useState(null);

  // Handler for text input changes
  const onValueChange = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };

  // Handler for number input changes
  const onValueChangeNew = (e) => {
    // Get the input value from the event
    let inputValue = e.target.value;

    // Remove whitespaces from the input value
    inputValue = inputValue.replace(/\s/g, '');

    // Limit the input value to a maximum length of 12 characters
    inputValue = inputValue.slice(0, 12);

    // Insert a space after every 4 digits for better readability
    inputValue = inputValue.replace(/(\d{4})/g, '$1 ');

    // Update the state with the formatted input value
    setNumber(inputValue);
  };

   // Handler for file input changes
   const fileData = (e) => {
    // Spread the existing staff object and update the image property
    setStaff({ ...staff, image: e.target.files[0] });

    // Get the selected file from the input
    const selectedFile = e.target.files[0];

    // Check if the file size is less than or equal to 150 KB
    if (selectedFile.size <= 150 * 1024) {
      // Update the state with the selected file
      setFile(selectedFile);
    } else {
      // Display an alert and reset the input field
      alert('File size must be less than 150KB.');
      e.target.value = null; // Reset the input field
      setFile(null);
    }
  };
  const nameRef = useRef(null);
  const refFather = useRef(null);

  const submitData = async (e) => {
    e.preventDefault();
    const {
      name,
      fname,
      mobile,
      mail,
      adhar,
      dob,
      doj,
      gender,
      rel,
      image,
    } = staff;

    if (!name) {
      document.getElementById('nameValid').innerText =
        'Please Enter Your Name *';
      nameRef.current.focus();
    } else if (!fname) {
      alert("Enter Your Father's Name");
      refFather.current.focus();
    } else if (!mobile) {
      alert('Enter Your Mobile');
    } else if (mobile.length !== 10) {
      alert('Enter Your 10 Digit Mobile Number');
    } else if (!mail) {
      alert('Enter Your Email Id');
    } else if (!adhar) {
      alert('Enter Your Aadhar Number');
    } else if (adhar.length !== 14) {
      alert('Enter 12 Digit Aadhar Number');
    } else if (!dob) {
      alert('Enter Date Of Birth');
    } else if (!gender) {
      alert('Select Your Gender');
    } else if (!rel) {
      alert('Select Your Religion');
    } else if (!image) {
      alert('Upload Your Image');
    } else if (!doj) {
      alert('Enter your Date Of Joining');
    } else {
      const formData = new FormData();
      formData.append('image', staff.image);
      formData.append('name', staff.name);
      formData.append('fname', staff.fname);
      formData.append('mobile', staff.mobile);
      formData.append('mail', staff.mail);
      formData.append('adhar', staff.adhar);
      formData.append('dob', staff.dob);
      formData.append('doj', staff.doj);
      formData.append('gender', staff.gender);
      formData.append('rel', staff.rel);

      // addUser to API Application
      const res = await addUser(formData);

      if (res.status === 201) {
        toast({
          title: res.data,
          description: 'Data Successfully Added',
          status: 'success',
          duration: 9000,
          position: 'top',
          isClosable: true,
        });

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast({
          title: res.data,
          description: 'Something Went Wrong',
          status: 'danger',
          duration: 9000,
          position: 'top',
          isClosable: true,
        });
      }
    }
  };




return (
    <div>
      {/* ---------------------- Staff Add Form--------------------- */}
      <ChakraProvider>
        <form>
          {/* -------------------Dashboard--------------------------- */}
          <div className="container-fluid mt-4">
            <div className="row">
              <div className="col-12">
                <div className="body-title">
                  {/* -----------Heading------------- */}
                  <span className="pl-1">Add Staff</span>
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="student-form pl-4 pr-4">
                  <div className="student-form-top">
                    <h5>Staff Registration Form</h5>
                  </div>
                  {/* -------Form Starts------- */}
                  <div className="row mt-3">
                    <div className="col-12 col-md-4">
                      <div className="name">
                        <div class="form-group">
                          <label for="exampleInputEmail1">
                            Name <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            ref={nameRef}
                            class="form-control"
                            id="exampleInputEmail1"
                            onChange={(e) => onValueChange(e)}
                            aria-describedby="emailHelp"
                            placeholder="Enter Your Name"
                          />
                          <p id="nameValid">
                            <i>Please Enter Your Name *</i>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="name">
                        <div class="form-group">
                          <label for="exampleInputEmail1">
                            Father's/Guardian's Name{' '}
                            <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="fname"
                            ref={refFather}
                            onChange={(e) => onValueChange(e)}
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Your Father's Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="name">
                        <div class="form-group">
                          <label for="exampleInputEmail1">
                            Mobile Number{' '}
                            <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="mobile"
                            onChange={(e) => onValueChange(e)}
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Your Mobile Number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12 col-md-3">
                      <div className="name">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email Id</label>
                          <input
                            type="email"
                            name="mail"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => onValueChange(e)}
                            placeholder="Enter Your Email Id"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="name">
                        <div class="form-group">
                          <label for="exampleInputEmail1">
                            Aadhar Number{' '}
                            <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="adhar"
                            class="form-control"
                            id="exampleInputEmail1"
                            value={number}
                            aria-describedby="emailHelp"
                            placeholder="Enter Your Aadhar Number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="name">
                        <div class="form-group">
                          <label for="exampleInputEmail1">
                            Date Of Birth{' '}
                            <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                            type="date"
                            name="dob"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => onValueChange(e)}
                            placeholder="Enter Your Date Of Birth"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="name">
                        <div class="form-group">
                          <label for="exampleInputEmail1">
                            Date Of Joining{' '}
                            <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                            type="date"
                            name="doj"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => onValueChange(e)}
                            placeholder="Enter Your Date Of Joining"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12 col-md-4">
                      <div className="name">
                        <div class="form-group">
                          <label for="exampleFormControlSelect1">
                            Gender <span style={{ color: 'red' }}>*</span>
                          </label>
                          <select
                            name="gender"
                            class="form-control"
                            id="exampleFormControlSelect1"
                            onChange={(e) => onValueChange(e)}
                          >
                            <option disabled selected value={''}>
                              --Select Gender--
                            </option>
                            <option value={'male'}>Male</option>
                            <option value={'female'}>Female</option>
                            <option value={'other'}>Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="name">
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect1">
                            Religion <span style={{ color: 'red' }}>
                              <small>*</small>
                            </span>
                          </label>
                          <select
                            name="rel"
                            className="form-control"
                            id="exampleFormControlSelect1"
                            onChange={(e) => onValueChange(e)}
                          >
                            <option disabled selected value={''}>
                              --Select Religion--
                            </option>
                            <option value={'hindu'}>Hindu</option>
                            <option value={'islam'}>Islam</option>
                            <option value={'sikh'}>Sikh</option>
                            <option value={'other'}>Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="name">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Image{' '}
                            <span style={{ color: 'red' }}>
                              <small>*</small>
                            </span>
                          </label>
                          <input
                            type="file"
                            name="image"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Your Mobile Number"
                            onChange={fileData}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* -------Form Ends------- */}
                </div>
              </div>
            </div>
          </div>
        </form>
      </ChakraProvider>
    </div>
  );
}