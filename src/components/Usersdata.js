// import React, { useState } from "react"
// import '../assets/style.css';
// import { useEditAdminByIdMutation } from "../Api/AdminSlice";

// function Usersdata() {

//     const [editData, editRes]=useEditAdminByIdMutation();
//     const [data, setData]=useState(
//         {
//             name:"",
//             email:"",
//             age:"",
//             gender:""
//         }
//     );
//     const handleChange=(event)=>{
//         setData({
//             ...data,
//             [event.target.name]:event.target.value
//         });
//     }
//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         editData({data})
//     }
//   return (
//     <>
//     <h1 style={{textAlign:"center"}}>Welcome!</h1>
//     <div className="form">
//         <form onSubmit={handleSubmit}>
//             <input type='text' value={data.name} name="name" id='name' placeholder='Enter Name Here...' onChange={handleChange} />
//             <input type='text' value={data.email} name="email" id='email' placeholder='Enter Email Here...' onChange={handleChange} />
//             <input type='text' value={data.age} name="age" id='age' placeholder='Enter Age Here...'  onChange={handleChange} />
//             <input type='text' value={data.gender} name="gender" id='gender' placeholder='Enter Gender Here...' onChange={handleChange} />
//             <button type='submit'>Submit</button>
//         </form>
//     </div>
//     </>
//   )
// }

// export default Usersdata

import React, { useState } from 'react';

function Usersdata() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setFormData({
      name: '',
      email: ''
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Access the form data from the formData state object and perform further actions
    console.log(formData);
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Form</button>
      {isOpen && (
        <div className="popup-container">
          <div className="popup-form">
            <h2>Popup Form</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <button type="submit">Submit</button>
              <button onClick={handleClose}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Usersdata;
