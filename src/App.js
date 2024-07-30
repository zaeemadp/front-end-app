import './App.css';

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
    email: "antoinevictor@was.com",
    password: "wasadmin"
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

function handleListClick() {
  console.log("in handleListClick()");
}

function App() {
  return (
    <div className="App">
      <table className="customer-table" onClick={handleListClick}>
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
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
        
      <table className="customer-table-editor">
        <caption><b>Update</b></caption>
          <tbody>
            <tr>
              <td><input type="text" placeholder="Name" /></td>
            </tr>
            <tr>
              <td><input type="email" placeholder="Email" /></td>
            </tr>
            <tr>
              <td><input type="password" placeholder="Password" /></td>
            </tr>
            <tr>
              <button onClick={onDeleteClick}>Delete</button>
              <button onClick={onSaveClick}>Save</button>
              <button onClick={onCancelClick}>Cancel</button>
            </tr>
          </tbody>
      </table>
    </div>
  );
}

export default App;
