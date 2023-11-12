import axios from "../utils/axiosCustomize";

const postSignUp = (username, password, confirmPassword, firstName, lastName, birthDate, email, phone, country) => {
    //submit data
    return axios.post('api-post-signup', {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        email: email,
        phone: phone,
        country: country
    });
}

export { postSignUp }