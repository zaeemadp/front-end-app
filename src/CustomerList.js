export function CustomerList(parameters) {
    return (
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
            {parameters.customers.map((customer, index) => (
            <tr key={index} onClick={() => parameters.handleListClick(customer)}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.password}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
}