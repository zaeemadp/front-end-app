import './App.css';

import React, { useEffect, useState } from 'react';
import { deleteById, get, getAll, post, put } from './memdb';

function App() {
  let blankCustomer = {"id": -1, "name": "", "email": "", "password": ""};
  const [customers, setCustomers] = useState([]);
  const [formObject, setformObject] = useState(blankCustomer);

  useEffect(() => { getCustomers(); }, []);

  const getCustomers = function () {
    console.log("in getCustomers()");
    setCustomers(getAll());
  }

  function rowSelectionHandler(customer = null) {
    for (let i = 1; i < customers.length + 1; i++) {
      document.getElementsByTagName("tr")[i].style.fontWeight = "normal";
    }
    
    if (customer !== null) {
      document.getElementsByTagName("tr")[customers.indexOf(customer) + 1].style.fontWeight = "bold";
    }
  }

  function onDeleteClick() {
    console.log("in onDeleteClick()");

    if (formObject.id === -1) {
      return;
    }

    deleteById(formObject.id);
    setformObject(blankCustomer);

    rowSelectionHandler();
  }
  
  function onSaveClick() {
    console.log("in onSaveClick()");
  }
  
  function onCancelClick() {
    console.log("in onCancelClick()");
    
    setformObject(blankCustomer);
    rowSelectionHandler();
  }
  
  const handleListClick = function (customer) {
    console.log("in handleListClick()");

    const isAlreadySelected = formObject.id === customer.id;

    setformObject(isAlreadySelected ? blankCustomer : customer);
    rowSelectionHandler(isAlreadySelected ? null : customer);
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
              <td><input type="text" placeholder="Some Person" value={formObject.name} /></td>
            </tr>
            <tr>
              <td>Email:</td>
              <td><input type="email" placeholder="someone@email.com" value={formObject.email} /></td>
            </tr>
            <tr>
              <td>Pass:</td>
              <td><input type="text" placeholder="supersecurepassword" value={formObject.password} /></td>
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
