import axios from 'axios';
export const fetchUserLogin = async (user) => {
    try {
        const url = `/login`
        const response = await axios({
            method: 'post',
            url,
            baseURL: 'https://vancommerce.herokuapp.com',
            data: user,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchUserRegister = async (user) => {
    try {
        const url = `/register`
        const response = await axios({
            method: 'post',
            url,
            baseURL: 'https://vancommerce.herokuapp.com',
            data: user,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}