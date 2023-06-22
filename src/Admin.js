import React, { useState } from 'react';
import { useAddAdminByNameMutation, useDeleteAdminByIdMutation, useEditAdminByIdMutation, useGetAdminByNameQuery } from './Api/AdminSlice';
import './App.css';
import './assets/style.css';

function Admin() {
  const [id, setId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: ''
  });
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setFormData({
      name: '',
      email: '',
      age: '',
      gender: ''
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
    editData({ id: id, name: formData.name, email: formData.email, age: formData.age, gender: formData.gender })
    // Access the form data from the formData state object and perform further actions
    handleClose();
  };

  const Admindata = {
    name: 'sandeep sharma',
    email: 'fugiganiyar14@gmail.com',
    age: 25,
    gender: 'male'
  };

  const { data, error, isLoading } = useGetAdminByNameQuery();
  const [addData, addRes] = useAddAdminByNameMutation();
  const [deleteData, delRes] = useDeleteAdminByIdMutation();
  const [editData, editRes] = useEditAdminByIdMutation();
  console.log(data);

  if (error) {
    return (<p>error...</p>)
  }

  if (isLoading) {
    return (<p>Loading...</p>)
  }

  return (
    <div style={{ paddingBottom: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2a9df4' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome in redux toolkit Query</h1>
      <p style={{ textAlign: 'center' }}>Sandeep Sharma</p>
      <button style={{ margin: 20, height: 30, width: 100 }} onClick={() => addData(Admindata)}>Add Data</button>
      <div className="App">
        {data && data.map((item, id) => (
          <div className='card' key={id}>
            {/* <p>id: {item.id}</p> */}
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Age: {item.age}</p>
            <p>Gender: {item.gender}</p>
            {/* <button style={{ margin: 20 }} onClick={() => editData({id:item.id, name:formData.name, email:formData.email, age:formData.age, gender:formData.gender  })}>Edit Data</button> */}
            <button onClick={() => (handleOpen(), setId(item.id) )} style={{ margin: 20 }}>Edit data</button>
            {isOpen && (
              <div className="popup-container">
                <div className="popup-form">
                  <h2>Popup Form</h2>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder='enter name'
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <br />
                    <input
                      type="text"
                      name="email"
                      placeholder='enter email'
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <br />
                    <input
                      type="text"
                      name="age"
                      placeholder='enter age'
                      value={formData.age}
                      onChange={handleInputChange}
                    />
                    <br />
                    <input
                      type="text"
                      name="gender"
                      placeholder='enter gender'
                      value={formData.gender}
                      onChange={handleInputChange}
                    />
                    <button style={{ margin: 10 }} type="submit">Submit</button>
                    <button style={{ margin: 10 }} onClick={handleClose}>Close</button>
                  </form>
                </div>
              </div>
            )}
            <button style={{ margin: 20 }} onClick={() => deleteData(item.id)}>Delete Data</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
