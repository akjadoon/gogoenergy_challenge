import React, { useState, useEffect } from 'react'

import UserTable from './UserTable/UserTable'
import PaginationBtnGroup from '../PaginationBtnGroup/PaginationBtnGroup'

import * as UserAPI from "../../api/UserAPI"

import "./UserTableContainer.css"


function UserTableContainer(props){
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    async function handleDeleteUser(e){
        const id = e.target.value;
        const result = await UserAPI.delete_user(id);

        const nextUsers = users.filter(u => u.id !== id);

        if (result.status === 200 && nextUsers.length < users.length){
            setUsers(nextUsers);
            if (nextUsers.length <= props.pageSize * (page - 1))
                setPage(Math.max(page - 1, 1));
        }
    }

    async function handlePageChange(e){
        setPage(parseInt(e.target.value));
    }

    useEffect(() => {
        const fetch = async () => {
            const result = await UserAPI.get_users();
            setUsers(result.data)
        }
        fetch();
    }, [])

    return users.length > 0 ? 
    (<div className="userTableContainer">

                <UserTable users={users} pageSize={props.pageSize} page={page} deleteHandler={handleDeleteUser}/>
                <PaginationBtnGroup 
                    page={page} 
                    numItems={users.length} 
                    pageSize={props.pageSize} 
                    handlePageChange={handlePageChange}
                />

    </div>) : <img src="spinner.gif" className="spinner"></img>
}


export default UserTableContainer;