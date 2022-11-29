import React from 'react';
import ProductListStore from '../../../Components/Dashboard/Store/Products/ProductListStore';
import '../DashboardStore/DashboardStore.css';

function DashboardStore() {
    return (
        <div className='template-db-store'>
            <h1>Dashboard store</h1>
            <div className="db-store">
                <div className="db-store-item">
                    <ProductListStore/>
                </div>
            </div>
        </div>
    )
}

export default DashboardStore