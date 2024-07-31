import './App.css';

import React, { useEffect, useState } from 'react';
import { deleteById, get, getAll, post, put } from './memdb';

import { CustomerAddUpdateForm } from './CustomerAddUpdateForm';
import { CustomerList } from './CustomerList';

function App() {
  let blankCustomer = {"id": -1, "name": "", "email": "", "password": ""};
  const [customers, setCustomers] = useState([]);
  const [formObject, setformObject] = useState(blankCustomer);
  let mode = formObject.id === -1 ? "Add" : "Update";

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

  let onDeleteClick = function () {
    console.log("in onDeleteClick()");

    if (formObject.id === -1) {
      return;
    }

    deleteById(formObject.id);
    setformObject(blankCustomer);

    rowSelectionHandler();
  }
  
  let onSaveClick = function () {
    console.log("in onSaveClick()");

    if (formObject.id === -1) {
      post(formObject);
    } else {
      put(formObject.id, formObject);
    }

    setformObject(blankCustomer);
    rowSelectionHandler();
  }
  
  let onCancelClick = function () {
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

  const handleInputChange = function (event) {
    console.log("in handleInputChange()");
    const name = event.target.name;
    const value = event.target.value;
    let newFormObject = {...formObject}
    newFormObject[name] = value;
    setformObject(newFormObject);
  }

  return (
    <div className="App">
      <CustomerList 
        customers={customers} 
        handleListClick={handleListClick}
      />

      <br />

      <CustomerAddUpdateForm
        mode={mode}
        handleInputChange={handleInputChange}
        formObject={formObject}
        onDeleteClick={onDeleteClick}
        onSaveClick={onSaveClick}
        onCancelClick={onCancelClick}
      />

    </div>
  );
}

export default App;
