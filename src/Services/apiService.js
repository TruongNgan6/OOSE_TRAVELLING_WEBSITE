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
    return axios.post('auth/signup', {
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

export {
    postSignUp, postLogin, getAllUsers, postCreateNewUser, postUpdatePassword,
    postCreateNewTour, getAllTours
}