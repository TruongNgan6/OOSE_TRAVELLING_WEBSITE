import { useEffect, useState } from "react";
import { getAllUsers } from '../../Services/apiService';
import CreateNewUser from "./CreateNewUser";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = (props) => {
    const [listUsers, setListUsers] = useState([
        {
            userId: '1',
            firstName: 'e',
            lastName: 'r',
            email: 'fd',
            role: 'we'
        },
        {
            userId: '2',
            firstName: 'e',
            lastName: 'r',
            email: 'fd',
            role: 'werd'
        }

    ])


    const [dataDelete, setdataDelete] = useState({})
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);



    //CONPONENT DID MOUNT
    useEffect(() => {
        fetchListUsesrs();
    }, []);

    const fetchListUsesrs = async () => {
        let res = await getAllUsers();
        // if (res.EC === 0) {
        setListUsers(res)
        // }

    }
    return (
        <>
            <div className="container">

                {/* <button onClick={handleShow}>thanh</button>

                <ModalDeleteUser show={showModal} handleClose={handleClose} /> */}
                <hr />
                <div className="add-new-title">ADD NEW USER</div>
                <CreateNewUser />
                <hr />
                <div className="table-title">TABLE USERS</div>

                <table className="table table-hover table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Email</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                    <tr key={`table-users-${index}`}>
                                        <td>{item.userId}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            <button className="btn btn-danger mx-3"
                                                onClick={handleShow}
                                            >Delete</button>
                                            <ModalDeleteUser
                                                show={showModal}
                                                handleClose={handleClose} />

                                        </td>
                                    </tr>
                                )
                            })}
                        {listUsers && listUsers.length === 0 && <tr><td colSpan={5}>Not found data</td></tr>}
                    </tbody>
                </table>

                {/* <ModalDeleteUser /> */}
            </div>

        </>
    )
}

export default ManageUser;