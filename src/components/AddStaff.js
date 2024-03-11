import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'
export default function AddStaff() {
  
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_age: '',
    user_sex:'',
    user_jobtitle: '',
    user_address:'',
    user_zip:'',
    user_city:'',
    user_state:'',
    user_district:'',
    user_phone:'',
    user_birthday:'',
    user_docx:'',
    user_department:'',
    user_workingtype:'',
    user_doj:'',
    user_emergencyphneno:'',
    user_emergency_contact_name:'',
    index:'',
});
  //handelChange is a function where user can type the value and we can get the value of all the input fields 
 //on chnage and event are adding for this  here to type
 let [user,setUser]=useState(
 
    [

    ]

 )
 

  const handleChange = (event) => {
    let oldData={...formData}
    let inputName=event.target.name
    let inputValue=event.target.value
    oldData[inputName]=inputValue
    setFormData(oldData)
  };
  const navigate=useNavigate();
  const handleSubmit =async  (e) => {
    e.preventDefault();
     // API call to add staff member
     await axios.post('http://localhost:3001/addStaff', formData)
     .then(res => {
         console.log(res);
          if(res.status===201){

          
         // Navigate to the staff list page after successful addition
         alert("Data Succesfully added")
         navigate('/staffList');
          }
          else
          {
            alert("Error adding staff member");
          }
     })
     .catch(error => {
      // Handle error response
      if (error.response.status === 400) {
          alert(error.response.data.error); // Display the error message to the user
          alert("Error adding staffs for dublicate value.Try again with a updated Data");

      } else {
          console.error('Error adding staff:', error);
         
      }
  });

    // Handle form submission
    let currentUserFormData={
        user_name: formData.user_name,
        user_email: formData.user_email,
        user_sex:formData.user_sex,
        user_age: formData.user_age,
    
        user_jobtitle: formData.user_jobtitle,
    
        user_address:formData.user_address,
        user_zip:formData.user_zip,
        user_city:formData.user_city,
        user_state:formData.user_state,
        user_district:formData.user_district,
        user_phone:formData.user_phone,
        user_birthday:formData.user_birthday,
        user_docx:formData.user_docx,
        user_department:formData.user_department,
        user_workingtype:formData.user_workingtype,
        user_doj:formData.user_doj,
        user_emergencyphneno:formData.user_emergencyphneno,
        index:formData.index,



    }
    let oldUserdata=[...user,currentUserFormData]
    setUser(oldUserdata)
    console.log(formData);
    // if(setUser(oldUserdata)){

    
    // alert("Form Submitted ")
    // }
    // else
    // {
    //     alert("Please Fill the form before submitting")
    // }
    // To empty the input field after adding/getting the data
    setFormData
    (
        {
            user_name: '',
            user_email: '',
            
            user_age: '',
            
            user_jobtitle: '',
            user_sex:'',
            user_address:'',
            user_zip:'',
            user_city:'',
            user_state:'',
            user_district:'',
            user_phone:'',
            user_birthday:'',
            user_docx:'',
            user_department:'',
            user_workingtype:'',
            user_doj:'',
            user_emergencyphneno:'',
            index:'',
        
         
        }
    )
  
  };
 

  return (
    <div style={{
        backgroundColor:'green',
    }}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.heading}>Add New Employee</h1>
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>
            <span style={styles.number}>1</span> Your basic info
          </legend>
          <label style={styles.label} htmlFor="name">
           Full Name:
            <input
              type="text"
              id="name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label} htmlFor="name">
            Address:
            <input
              type="text"
              id="address"
              name="user_address"
              value={formData.user_address}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label} htmlFor="name">
            Sex:
            <select
            id="sex"
            name="user_sex"
            value={formData.user_sex}
            onChange={handleChange}
             style={styles.input}
            >
        <option disabled selected value="disablevalue">
        ---Choose your Sex ----
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        
        </select>

          </label>
          <label style={styles.label} htmlFor="name">
           City:
            <input
              type="text"
              id="city"
              name="user_city"
              value={formData.user_city}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label} htmlFor="name">
           PinCode:
            <input
              type="text"
              id="zip"
              name="user_zip"
              placeholder='Enter Number Only'
              value={formData.user_zip}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label} htmlFor="name">
           District:
            <input
              type="text"
              id="district"
              name="user_district"
              value={formData.user_district}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label} htmlFor="name">
           State:
            <input
              type="text"
              id="state"
              name="user_state"
              value={formData.user_state}
              onChange={handleChange}
              style={styles.input}
            />
          </label>

          <label style={styles.label} htmlFor="name">
            Phone Number:
            <input
              type="number"
              id="phone"
              name="user_phone"
              value={formData.user_phone}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label} htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label} htmlFor="name">
            Age:
            <input
              type="number"
              id="age"
              name="user_age"
              value={formData.user_age}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label} htmlFor="name">
           Birthday:
            <input
              type="date"
              id="birthday"
              name="user_birthday"
              value={formData.user_birthday}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label} htmlFor="name">
           Upload Your Photo:
            <input
              type="file"
              accept='image/png'
              id="user_docx"
              name="user_docx"
              value={formData.user_docx}
              onChange={handleChange}
              style={styles.input}
            />
          </label>

          <legend style={styles.legend}>
            <span style={styles.number}>2</span> Your Job Details

          </legend>
          <label style={styles.label} htmlFor="name">
            Title:
            <input
              type="text"
              id="jobtitle"
              name="user_jobtitle"
              value={formData.user_jobtitle}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label} htmlFor="name">
            Department:
            <input
              type="text"
              id="department"
              name="user_department"
              value={formData.user_department}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label} htmlFor="name">
            Working Type:
            <select
            id="workingtype"
            name="user_workingtype"
            value={formData.user_workingtype}
            onChange={handleChange}
             style={styles.input}
            >
        <option disabled selcted value="disablevalue">
        ---Select Your Working Type----
        </option>
        <option value="FullTime">Full Time</option>
        <option value="PartTime">Part Time</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
        </select>

          </label>
          <label style={styles.label} htmlFor="name">
            Start Date:
            <input
              type="date"
              id="doj"
              name="user_doj"
              value={formData.user_doj}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <legend style={styles.legend}>
            <span style={styles.number}>3</span> Emergency Contact Details
            <label style={styles.label} htmlFor="name">
            Contact Information:
            <input
              type="number"
              id="emergencyphoneno"
              name="user_emergencyphneno"
              value={formData.user_emergencyphneno}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label} htmlFor="name">
  Contact Perosn Name:
  <input
    type="text"
    id="name"
    name="user_emergency_contact_name" // Change the name attribute
    value={formData.user_emergency_contact_name} // Adjust value and onChange accordingly
    onChange={handleChange}
    style={styles.input}
  />
</label>



          </legend>
        </fieldset>
        
        <button 
        type="submit" 
        style={styles.button}
        
        onClick={handleSubmit}
        >Add Staff </button>
      </form>
    </div>
  );
}

const styles = {
  form: {
    maxWidth: '1000px',
    margin: '10px auto',
    marginBottom:'10px',
    padding: '10px 20px',
    background: '#f4f7f8',
    borderRadius: '8px',
  },
  heading: {
    margin: '0 0 30px 0',
    textAlign: 'center',
  },
  fieldset: {
    marginBottom: '30px',
    border: 'none',
  },
  legend: {
    fontSize: '1.4em',
    marginBottom: '10px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
  },
  input: {
    background: 'rgba(255,255,255,0.1)',
    border: 'none',
    fontSize: '16px',
    height: 'auto',
    margin: '0',
    outline: '0',
    padding: '15px',
    width: '100%',
    backgroundColor: '#e8eeef',
    color: '#8a97a0',
    boxShadow: '0 1px 0 rgba(0,0,0,0.03) inset',
    marginBottom: '30px',
  },
  button: {
    padding: '19px 39px 18px 39px',
    color: '#FFF',
    backgroundColor: '#4bc970',
    fontSize: '18px',
    textAlign: 'center',
    fontStyle: 'normal',
    borderRadius: '5px',
    width: '100%',
    border: '1px solid #3ac162',
    borderWidth: '1px 1px 3px',
    boxShadow: '0 -1px 0 rgba(255,255,255,0.1) inset',
    marginBottom: '10px',
  },
  number: {
    backgroundColor: '#5fcf80',
    color: '#fff',
    height: '30px',
    width: '30px',
    display: 'inline-block',
    fontSize: '0.8em',
    marginRight: '4px',
    lineHeight: '30px',
    textAlign: 'center',
    textShadow: '0 1px 0 rgba(255,255,255,0.2)',
    borderRadius: '100%',
  },
};