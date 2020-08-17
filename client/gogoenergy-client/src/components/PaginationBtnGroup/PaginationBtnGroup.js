import React from 'react'

import "./PaginationBtnGroup.css"


function PaginationBtnGroup (props) {
    const maxPages = Math.floor((props.numItems - 1) / props.pageSize) + 1;

    return (
    <div className="paginationBtnGroup">
        <button 
            className="prev"
            onClick={props.handlePageChange} 
            value={props.page - 1} 
            disabled={props.page === 1}
        >
            Prev
        </button>
        {Array(maxPages).fill().map((_, idx) => 
            <button 
                key={idx} 
                className={props.page === idx + 1 ? "selected" : ""}
                onClick={props.handlePageChange} 
                value={idx + 1}>{idx + 1}
            </button>
        )}
        <button 
            className="next"
            onClick={props.handlePageChange}
            value={props.page + 1}
            disabled={props.page >= maxPages}>
            Next
        </button>
    </div>)
}

export default PaginationBtnGroup;
