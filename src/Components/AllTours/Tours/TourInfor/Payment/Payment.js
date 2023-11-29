import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { createOrder } from "../../../../../Services/apiService";
import { toast } from 'react-toastify';

const Payment = () => {
    const location = useLocation();
    const [title, setTitle] = useState('')
    const [numberOfPeople, setNumberOfPeople] = useState()
    const [numberOfRooms, setNumberOfRooms] = useState()
    const [tourId, setTourId] = useState()
    const [travellerDetails, setTravellerDetails] = useState([])
    const [contactDetail, setContactDetail] = useState({})
    const [billingDetail, setBillingDetail] = useState({})
    const [notes, setNotes] = useState('')
    // const {
    //     state: {
    //         title,
    //         numberOfPeople,
    //         numberOfRooms,
    //         tourId,
    //         travellerDetails,
    //         contactDetail,
    //         billingDetail,
    //         notes

    //     }
    // } = location;

    useEffect(() => {
        if (location.state) {
            setTitle(location.state.title)
            setTourId(location.state.tourId)
            setNumberOfPeople(location.state.numberOfPeople)
            setNumberOfRooms(location.state.numberOfRooms)
            setTravellerDetails(location.state.travellerDetails)
            setContactDetail(location.state.contactDetail)
            setBillingDetail(location.state.billingDetail)
            setNotes(location.state.notes)
            setTourId(location.state.tourId)
        }
    }, [location.state])
    console.log("check state numberOfPeople", location.state.numberOfPeople)
    console.log("check state numberOfRooms", location.state.numberOfRooms)
    console.log("check state travellerDetails", location.state.travellerDetails)

    const handleSubmit = async () => {
        let data = await createOrder(numberOfPeople, numberOfRooms, travellerDetails, contactDetail, billingDetail, notes, tourId

            // location.state.numberOfPeople,
            // location.state.numberOfRooms,
            // location.state.travellerDetails,
            // location.state.contactDetail,
            // location.state.billingDetail,
            // location.state.notes,
            // location.state.tourId
        );

        if (data && data.message === "Create order successfully") {
            toast.success(data.message);
            // handleSuccess();


        }
        if (data && data.errCode === 0) {
            toast.error(data.errMessage);
        }
    }
    return (
        <>
            <button type="button"
                className="btn btn-primary"
                onClick={() => {
                    handleSubmit();
                }}
            >Book</button>

        </>
    );
}



export default Payment;