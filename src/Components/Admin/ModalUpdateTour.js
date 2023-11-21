import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FcPlus } from "react-icons/fc";
import axios from 'axios';
const ModalUpdateTour = (props) => {
    const { show, handleClose } = props;
    //const [show, setShow] = useState(false);

    // const handleClose = () => {
    //     setShow(false);
    //     // setEmail("");
    //     // setPassword("");
    //     // setUsername("");
    //     // setRole("");
    //     // setImage("");
    //     // setPreviewImage("")
    // };
    // const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [price, setPrice] = useState();
    const [location, setLocation] = useState('');
    const [duration, setDuration] = useState('');
    const [quantity, setQuantity] = useState();
    const [departureDate, setDepartureDate] = useState('');

    // const handleUploadImage = (event) => {
    //     if (event.target && event.target.files && event.target.files[0]) {
    //         setPreviewImage(URL.createObjectURL(event.target.files[0]))
    //         setImage(event.target.files[0])
    //     } else {

    //     }


    // }

    // const handleSubmitCreateUser = async () => {


    //     //call apis

    //     const data = new FormData();
    //     data.append('email', email);
    //     data.append('password', password);
    //     data.append('username', username);
    //     data.append('role', role);
    //     data.append('userImage', image);

    //     let res = await axios.post('http://localhost:8081/api/v1/participant', data)
    //     console.log("check res", res)
    // }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Add new users
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop='static'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Tour</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container mt-5">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Title:</label>
                                <input type="text" className="form-control" value={title} onChange={(event) => setTitle(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description:</label>
                                <textarea className="form-control" value={description} onChange={(event) => setDescription(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image URL:</label>
                                <input type="text" className="form-control" value={imageURL} onChange={(event) => setImageURL(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={price}
                                    onChange={(event) => {
                                        const value = event.target.value.replace(/[^\d]/g, ''); // Lọc chỉ giữ lại các chữ số
                                        setPrice(value === '' ? 0 : parseInt(value, 10));
                                    }}
                                />
                            </div>


                            <div className="mb-3">
                                <label className="form-label">Location:</label>
                                <input type="text" className="form-control" value={location} onChange={(event) => setLocation(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Duration:</label>
                                <input type="text" className="form-control" value={duration} onChange={(event) => setDuration(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Quantity:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={quantity}
                                    onChange={(event) => {
                                        const value = event.target.value.replace(/[^\d]/g, ''); // Lọc chỉ giữ lại các chữ số
                                        setQuantity(value === '' ? 0 : parseInt(value, 10));
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Departure Date:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={departureDate}
                                    onChange={(event) => setDepartureDate(event.target.value)}
                                />
                            </div>

                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateTour;