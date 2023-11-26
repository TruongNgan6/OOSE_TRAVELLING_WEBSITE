import axios from "../utils/axiosCustomize";


const postSignUp = (email, password, firstName, lastName, birthDate, phone, country) => {
    //submit data
    return axios.post('auth/signup', {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        phone: phone,
        country: country
    });
}

const postCreateNewUser = (email, password, firstName, lastName, birthDate, phone, country) => {
    //submit data
    return axios.post('auth/signup', {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        phone: phone,
        country: country
    });
}

const postLogin = (email, password) => {
    //submit data
    return axios.post('auth/signin', {
        email: email,
        password: password,
    });
}

const getAllUsers = () => {
    // Định nghĩa header với token
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    // Gửi yêu cầu GET với Axios và headers
    return axios.get('api/admin/user', { headers: headers })
}

const postUpdatePassword = (email, phone, password) => {
    return axios.put('forgotpasswd/verify', {
        email: email,
        phone: phone,
        newPassword: password
    }
    )
}

const postCreateNewTour = (title,
    description,
    imageURL,
    price,
    location,
    duration,
    quantity,
    departureDate) => {

    // Định nghĩa header với token
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    //submit data
    return axios.post('auth/create-new-tour', {
        title: title,
        description: description,
        imageURL: imageURL,
        price: price,
        location: location,
        duration: duration,
        quantity: quantity,
        departureDate: departureDate
    }, { headers: headers });
}

const getAllTours = () => {
    // Định nghĩa header với token
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    // Gửi yêu cầu GET với Axios và headers
    return axios.get('api/all-tour', { headers: headers })
}

const deleteUser = (userId) => {
    return axios.delete('fghj', { data: { userId: userId } })
}

const deleteTour = (tourId) => {
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };
    return axios.delete('fghj', { data: { tourId: tourId } }, { headers: headers })
}

const putUpdateTour = (tourId, title, description, imageURL, price, location, duration, quantity, departureDate) => {
    //submit data
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    return axios.put('auth/signup', { data: { tourId: tourId } }, {
        title: title,
        description: description,
        imageURL: imageURL,
        price: price,
        location: location,
        duration: duration,
        quantity: quantity,
        departureDate: departureDate
    }, { headers: headers });
}

const getTourInfoByName = (tourName) => {
    return axios.get(`/api/getInforTourByTourName/${tourName}`);
}

export {
    postSignUp, postLogin, getAllUsers, postCreateNewUser, postUpdatePassword,
    postCreateNewTour, getAllTours, deleteUser, deleteTour, putUpdateTour, getTourInfoByName
}