import { useEffect, useState } from "react";
import { getAllUsers } from '../../Services/apiService';

const TableUser = (props) => {
    const [listUsers, setListUsers] = useState([])

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
            <table className="table table-hover table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
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
                                    <td>
                                        <button className="btn btn-danger mx-3">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    {listUsers && listUsers.length === 0 && <tr><td colSpan={5}>Not found data</td></tr>}
                </tbody>
            </table>
        </>
    )
}

export default TableUser;