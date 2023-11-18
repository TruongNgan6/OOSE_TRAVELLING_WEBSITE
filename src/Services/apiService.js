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

export { postSignUp, postLogin, getAllUsers, postCreateNewUser }