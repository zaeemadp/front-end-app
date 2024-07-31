import React, { useState } from 'react';

import { Pagination } from './Pagination';

export function CustomerList(parameters) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentCustomers = parameters.customers.slice(startIndex, startIndex + itemsPerPage);
    
    return (
        <div>
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
                    {currentCustomers.map((customer, index) => (
                        <tr key={index} onClick={() => parameters.handleListClick(customer)}>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <Pagination
                totalItems={parameters.customers.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}