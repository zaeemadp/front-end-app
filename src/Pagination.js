import './App.css';

import React, { useEffect, useState } from 'react';

export function Pagination(parameters) {
    const {
        totalItems,
        itemsPerPage,
        currentPage,
        onPageChange,
    } = parameters;

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [inputPage, setInputPage] = useState(currentPage);

    useEffect(() => {
        setInputPage(currentPage);
    }, [currentPage]);

    const handlePageChange = (event) => {
        const page = Number(event.target.value);
        setInputPage(page);
    };

    const getShowingRange = () => {
        const startItem = (currentPage - 1) * itemsPerPage + 1;
        const endItem = currentPage === totalPages ? totalItems : currentPage * itemsPerPage;
        return `Showing ${startItem} to ${endItem} of ${totalItems} entries`;
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const page = Number(event.target.value);
            if (page < 1) {
                onPageChange(1);
                setInputPage(1);
            }

            if (page > totalPages) {
                onPageChange(totalPages);
                setInputPage(totalPages);
            }
            
            if (page >= 1 && page <= totalPages && page !== currentPage) {
                onPageChange(page);
            }
        }
    };

    return (
        <div>
            <div className="pagination">
                <button
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                >
                    ❮❮
                </button>

                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ❮
                </button>

                <input
                    type="number"
                    value={inputPage}
                    classname="page-input"
                    onChange={handlePageChange}
                    onKeyDown={handleKeyDown}
                    className="page-input"
                /> 
                <span>of {totalPages}</span>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    ❯
                </button>

                <button
                    onClick={() => onPageChange(totalPages)}
                    disabled={currentPage === totalPages}
                >
                    ❯❯
                </button>
            </div>

            <span className="count-range">
                {getShowingRange()}
            </span>
        </div>
    );
}