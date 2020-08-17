import React from 'react'

import UserTableRow from './UserTableRow'

import "./UserTable.css"


function UserTable(props){
    return( 
    <table className="userTable">
        <thead>
            <tr>
                <th>User</th>
                <th>ID</th>
                <th>Email</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {props.users.slice(
                (props.page-1) * props.pageSize, props.page * props.pageSize).map(u =>
                    <UserTableRow key={u.id} user={u} deleteHandler={props.deleteHandler}/>
            )}
        </tbody>
    </table>)
}


export default UserTable;
