import React from 'react'

function Sidebar() {
    return (
        <div className='db-sidebar'>
            <h1 className="sidebar-header">Dashboard</h1>
            <ul className="sidebar-list">
                <h1 className="sidebar-list-title">User Management</h1>
                <li className="sidebar-item">Users</li>
                <li className="sidebar-item">Analytics</li>
                <li className="sidebar-item">Sale</li>
            </ul>
            <ul className="sidebar-list">
                <h1 className="sidebar-list-title">Store Management</h1>
                <li className="sidebar-item">Products</li>
                <li className="sidebar-item">Collections</li>
                <li className="sidebar-item">Report</li>
            </ul>
            <ul className="sidebar-list">
                <h1 className="sidebar-list-title">Review Management</h1>
                <li className="sidebar-item">Mail</li>
                <li className="sidebar-item">Analytics</li>
                <li className="sidebar-item">Sale</li>
            </ul>
            <ul className="sidebar-list">
                <h1 className="sidebar-list-title">Features</h1>
                <li className="sidebar-item">Filter</li>
                <li className="sidebar-item">Search</li>
                <li className="sidebar-item">customize</li>
            </ul>
        </div>
    )
}

export default Sidebar