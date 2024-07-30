import './App.css';

import React, { useState } from 'react';

function App() {
  let blankCustomer = {"id": -1, "name": "", "email": "", "password": ""};
  const [currentFormSelection, setCurrentFormSelection] = useState(blankCustomer);

  var customers = [
    {
      name: "John Doe",
      email: "JohnDoe@gmail.com",
      password: "johnpassword"
    },
    {
      name: "Zaeem Zahid",
      email: "zaeemzahid@gmail.com",
      password: "zaeempassword"
    },
    {
      name: "Antoine Victor",
      email: "antoinevictor@gmail.com",
      password: "antoinepassword"
    }
  ];  

  function onDeleteClick() {
    console.log("in onDeleteClick()");
  }
  
  function onSaveClick() {
    console.log("in onSaveClick()");
  }
  
  function onCancelClick() {
    console.log("in onCancelClick()");
  }
  
  const handleListClick = function (customer) {
    console.log("in handleListClick()");

    const isAlreadySelected =
      currentFormSelection.name === customer.name &&
      currentFormSelection.email === customer.email &&
      currentFormSelection.password === customer.password;
    
    setCurrentFormSelection(isAlreadySelected ? blankCustomer : customer);

    for (let i = 1; i < customers.length + 1; i++) {
      document.getElementsByTagName("tr")[i].style.fontWeight = "normal";
    }
  
    if (!isAlreadySelected) {
      document.getElementsByTagName("tr")[customers.indexOf(customer) + 1].style.fontWeight = "bold";
    }
  }

  return (
    <div className="App">
      <table className="customer-table">
        <caption><b>Customer List</b></caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} onClick={() => handleListClick(customer)}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.password}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <table className="customer-table-editor">
        <caption><b>Update</b></caption>
          <tbody>
            <tr>
              <td>Name:</td>
              <td><input type="text" placeholder="Some Person" value={currentFormSelection.name} /></td>
            </tr>
            <tr>
              <td>Email:</td>
              <td><input type="email" placeholder="someone@email.com" value={currentFormSelection.email} /></td>
            </tr>
            <tr>
              <td>Pass:</td>
              <td><input type="text" placeholder="supersecurepassword" value={currentFormSelection.password} /></td>
            </tr>
            <tr>
              <td colSpan="2">
                <button onClick={onDeleteClick} className="button delete-button">Delete</button>
                <button onClick={onSaveClick} className="button save-button">Save</button>
                <button onClick={onCancelClick} className="button cancel-button">Cancel</button>
              </td>
            </tr>
          </tbody>
      </table>
    </div>
  );
}

export default App;
