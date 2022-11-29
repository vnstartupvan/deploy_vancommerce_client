import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';

function Test() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/');
                setData(response.data);
            } catch (error) {
                throw (error);
            }
        }
        fetchData()
    }, [])
    const renderData = () => {
        return data.map(product => {
            return <h1 key={product.id}> {product.title}</h1>
        })
    }
    return (
        <div>{renderData()}</div>
    )
}

export default Test