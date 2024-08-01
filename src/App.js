import './App.css';

import React, { useEffect, useState } from 'react';
import { deleteById, getAll, post, put } from './restdb';

import { CustomerAddUpdateForm } from './CustomerAddUpdateForm';
import { CustomerList } from './CustomerList';

function App() {
  let blankCustomer = {"id": -1, "name": "", "email": "", "password": ""};
  const [customers, setCustomers] = useState([]);
  const [formObject, setFormObject] = useState(blankCustomer);
  let mode = formObject.id === -1 ? "Add" : "Update";

  useEffect(() => { getCustomers() }, [formObject]);

  const getCustomers = function () {
    console.log("in getCustomers()");
    getAll(setCustomers);
  }

  function rowSelectionHandler(customer = null) {
    for (let i = 1; i < document.getElementsByTagName("tr").length; i++) {
      document.getElementsByTagName("tr")[i].style.fontWeight = "normal";
    }
    
    if (customer) {
      const numRecords = document.getElementsByTagName("tr").length;
      const index = customer.id % numRecords === 0 ? numRecords : customer.id % numRecords;
      document.getElementsByTagName("tr")[index].style.fontWeight = "bold";
    }
  }

  let onDeleteClick = function () {
    console.log("in onDeleteClick()");
    let postOpCallback = () => { setFormObject(blankCustomer); }

    if (formObject.id >= 0) {
      deleteById(formObject.id, postOpCallback);
    } else {
      setFormObject(blankCustomer);
    } 
        
    rowSelectionHandler();
  }
  
  let onSaveClick = function () {
    console.log("in onSaveClick()");
    let postOpCallback = () => { setFormObject(blankCustomer); }

    if (formObject.id === -1) {
      post(formObject, postOpCallback);
    } else {
      put(formObject, postOpCallback);
    }

    rowSelectionHandler();
  }
  
  let onCancelClick = function () {
    console.log("in onCancelClick()");
    
    setFormObject(blankCustomer);
    rowSelectionHandler();
  }
  
  const handleListClick = function (customer) {
    console.log("in handleListClick()");

    const isAlreadySelected = formObject.id === customer.id;

    setFormObject(isAlreadySelected ? blankCustomer : customer);
    rowSelectionHandler(isAlreadySelected ? null : customer);
  }

  const handleInputChange = function (event) {
    console.log("in handleInputChange()");
    const name = event.target.name;
    const value = event.target.value;
    let newFormObject = {...formObject}
    newFormObject[name] = value;
    setFormObject(newFormObject);
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
