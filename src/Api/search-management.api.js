import axios from 'axios';
export const fetchSearchData = async (param) => {
    try {
        const url = `search?q=${param}`
        const response = await axios({
            method:'get',
            url,
            baseURL:process.env.REACT_APP_BASE_URL
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}