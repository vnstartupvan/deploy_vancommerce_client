import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../Api';
import '../MainMenu/HeaderMenu.css';
function HeaderMenu(props) {
    const [collections, setCollections] = useState(null);
    useEffect(() => {
        const fetchCollections = async () => {
            const data = await api.dashboard.collections();
            setCollections(data);
        }
        fetchCollections();
    }, [])
    const renderCollectionNavs = (collections) => {
        return collections.map((collection, index) => {
            return <li key={index} className="main-menu-item">
                <Link to={`/collections/${collection.slug}`}>{collection.title}</Link>
            </li>
        })
    }
    return (
        <nav className="main-menu hide-on-mobile">
            <ul className="main-menu-list">
                {collections && renderCollectionNavs(collections)}
            </ul>
        </nav>
    )
}

export default HeaderMenu