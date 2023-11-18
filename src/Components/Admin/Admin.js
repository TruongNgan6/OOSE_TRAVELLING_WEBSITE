import React from "react";
import "./Admin.css";
import TableUser from "./TableUser";
import CreateNewUser from "./CreateNewUser";
import { useState } from 'react';

const Admin = () => {
    const [isCreateUserVisible, setCreateUserVisible] = useState(false);

    const handleButtonClick = () => {
        setCreateUserVisible(!isCreateUserVisible);
    };
    const handleCloseCreateUser = () => {
        setCreateUserVisible(false);
    };
    const handleCreateUserSuccess = () => {
        handleCloseCreateUser(); // Đóng component khi tạo user thành công
    };
    return (
        <>
            <div className="container">
                <div className="title-manage-user">MANAGE USER</div>
                <div onClick={handleButtonClick}>
                    <button className="btn btn-primary ">Add new User</button>
                </div>
                {isCreateUserVisible && (
                    <CreateNewUser onClose={handleCloseCreateUser}
                        onSuccess={handleCreateUserSuccess} />
                )}

                <div className="table-user-title">Table User</div>
                <TableUser />
            </div>
        </>
    )
}
export default Admin;