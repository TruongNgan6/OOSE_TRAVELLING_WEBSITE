import { useEffect, useState } from "react";
import { getAllTours } from '../../Services/apiService';
import CreateNewTour from "./CreateNewTour";
import ModalUpdateTour from "./ModalUpdateTour";


const ManageTour = (props) => {
    const [listTours, setListTours] = useState([

        {
            title: 't',
            description: 'f',
            imageURL: 'f',
            price: 4,
            location: 'd',
            duration: 'd',
            quantity: 4,
            departureDate: '04/05/2024',
        },
        {
            title: 'r',
            description: 'f',
            imageURL: 'f',
            price: 4,
            location: 'd',
            duration: 'd',
            quantity: 4,
            departureDate: '04/05/2024',
        }
    ])


    //CONPONENT DID MOUNT
    useEffect(() => {
        fetchListTours();
    }, []);

    const fetchListTours = async () => {
        let res = await getAllTours();
        // if (res.EC === 0) {
        setListTours(res)
        // }

    }
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleClickBtnUpdateTour = () => {
        setShowModal(true)
    }
    return (
        <>
            <div className="container">
                <hr />
                <div className="add-new-title">ADD NEW TOUR</div>
                <CreateNewTour />
                <hr />
                <div className="table-title">TABLE TOURS</div>
                <table className="table table-hover table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">Tour ID</th>
                            <th scope="col">Tour Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Location</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Departure Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listTours && listTours.length > 0 &&
                            listTours.map((item, index) => {
                                return (
                                    <tr key={`table-users-${index}`}>
                                        <td>{item.tourId}</td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{item.location}</td>
                                        <td>{item.duration}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.departureDate}</td>
                                        <td>
                                            <button className="btn btn-warning mx-3"
                                                onClick={handleShow}
                                            >Update</button>
                                            <ModalUpdateTour
                                                show={showModal}
                                                handleClose={handleClose} />


                                            <button className="btn btn-danger mx-3">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        {listTours && listTours.length === 0 && <tr><td colSpan={7}>Not found data</td></tr>}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ManageTour;