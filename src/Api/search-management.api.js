import axios from 'axios';
export const fetchSearchData = async (param) => {
    try {
        const url = `search?q=${param}`
        const response = await axios({
            method:'get',
            url,
            baseURL:'https://vancommerceservces.onrender.com'
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}