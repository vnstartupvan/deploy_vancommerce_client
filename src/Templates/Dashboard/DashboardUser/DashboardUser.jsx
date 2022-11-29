import React from 'react';
import UserList from '../../../Components/Dashboard/User/UserList/UserList';

function DashboardUser() {
    return (
        <div className='template-db-user'>
            <h1>Dashboard user</h1>
            <div className="db-user">
                <div className="db-user-item">
                    <UserList/>
                </div>
            </div>
        </div>
    )
}

export default DashboardUser