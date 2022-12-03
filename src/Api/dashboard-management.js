import axios from 'axios';

export const fetchAllProducts = async (id) => {
    try {
        const url = `dashboard/products`
        const response = await axios({
            method: 'get',
            url,
            baseURL: 'https://vancommerceservces.onrender.com'
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchAllCollections = async (id) => {
    try {
        const url = `dashboard/collections`
        const response = await axios({
            method: 'get',
            url,
            baseURL: 'https://vancommerceservces.onrender.com'
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const patchCollection = async (collection) => {
    try {
        const url = `dashboard/create-collection`
        const response = await axios({
            method: 'post',
            url,
            baseURL: 'https://vancommerceservces.onrender.com',
            data: collection
        });
        console.log(response)
        return response.data
    } catch (error) {
        throw error;
    }
}

export const fetchAllUsers = async (id) => {
    try {
        const url = `dashboard/users`
        const response = await axios({
            method: 'get',
            url,
            baseURL: 'https://vancommerceservces.onrender.com'
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const patchProduct = async (product) => {
    try {
        const url = `dashboard/create-product`
        const response = await axios({
            method: 'post',
            url,
            baseURL: 'https://vancommerceservces.onrender.com',
            data: product
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteProduct = async (product) => {
    try {
        const url = `dashboard/delete-product`
        const response = await axios({
            method: 'post',
            url,
            baseURL: 'https://vancommerceservces.onrender.com',
            params: {
                product
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updatedProduct = async (product) => {
    try {
        const url = `dashboard/update-product`
        const response = await axios({
            method: 'post',
            url,
            baseURL: 'https://vancommerceservces.onrender.com',
            data: {
                product
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteUser = async (user) => {
    try {
        const url = `dashboard/delete-user`
        const response = await axios({
            method: 'post',
            url,
            baseURL: 'https://vancommerceservces.onrender.com',
            params: {
                user
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateUser = async (user) => {
    try {
        console.log(user);
        const url = `dashboard/update-user`
        const response = await axios({
            method: 'post',
            url,
            baseURL: 'https://vancommerceservces.onrender.com',
            data: user,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}