import React, { useState } from 'react';

import { Pagination } from './Pagination';

export function CustomerList(parameters) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const onItemsPerPageChange = (newItemsPerPage) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentCustomers = parameters.customers.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            <table className="customer-table">
                <caption><b>Zaeem Zahid Project - Customer List</b></caption>
                
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
                onItemsPerPageChange={onItemsPerPageChange}
            />
        </div>
    );
}