import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';


function SearchInput({searchClass}) {
    const navigate = useNavigate();
    const submitSearch = (e) => {
        navigate({ pathname: '/search', search: e.target.value });
    }
    return (
        <div className={`header-search-input ${searchClass}`}>
            <form onSubmit={(e) => submitSearch(e)} action="">
                <input name='q' type="text" placeholder='Search...' />
            </form>
            <div className="search-icon">
                <SearchOutlined style={{ color: '#202020' }} />
            </div>
        </div>
    )
}

export default SearchInput