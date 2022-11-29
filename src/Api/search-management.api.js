import axios from 'axios';
export const fetchSearchData = async (param) => {
    try {
        const url = `search?q=${param}`
        const response = await axios({
            method:'get',
            url,
            baseURL:'http://localhost:3001'
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}