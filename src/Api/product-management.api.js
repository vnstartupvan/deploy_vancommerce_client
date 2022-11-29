import axios from 'axios';
export const fetchProductData = async (id) => {
    try {
        const url = `product/${id}`
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

