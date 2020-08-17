import React from 'react';

import "./UserTable.css"


function toTitleCase(s){
    return s[0].toUpperCase() + s.slice(1)
}


function TableRow (props){
    return (props.user && 
    <tr>
        <td>
            <div className="userCell">
                <img src={props.user.picture} alt="avatar"/>
                <span >
                    {(toTitleCase(props.user.title) + " " + props.user.firstName + " " + props.user.lastName)}
                </span>
            </div>

        </td>
        <td>{props.user.id}</td>
        <td><a href={"mailto:" + props.user.email}>{props.user.email}</a></td>
        <td><button onClick={props.deleteHandler} value={props.user.id} className="deleteBtn">
                <img src="trash.svg"></img>
            </button>
        </td>
    </tr>
)}

export default TableRow;
