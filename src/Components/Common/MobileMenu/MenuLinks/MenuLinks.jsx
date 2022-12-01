import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../../Api';
import '../MenuLinks/MenuLinks.css';

function MenuLinks({ toggleEvent }) {
    const [collections, setCollections] = useState(null);

    useEffect(() => {
        const fetchCollections = async () => {
            const data = await api.dashboard.collections();
            setCollections(data);
        }
        fetchCollections();
    }, []);
    const renderMenuLink = () => {
        if (!collections) return;
        return collections.map(collection => {
            return <Link onClick={() => toggleEvent()} key={collection.title} className='menu-link' to={`/collections/${collection.slug}`}>{collection.title}</Link>
        })
    }
    return (
        <div className='memu-link-list'>
            {renderMenuLink()}
        </div>
    )
}

export default MenuLinks