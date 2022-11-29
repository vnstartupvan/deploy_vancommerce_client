import React from 'react';
import '../FilterOption/FilterOption.css';

function FilterOption({ option, bindEvent, type, selected }) {
    return (
        <div onClick={() => bindEvent(option, type)} className={`filter-option_item ${selected}`}>
            <span>{option}</span>
        </div>
    )
}

export default FilterOption