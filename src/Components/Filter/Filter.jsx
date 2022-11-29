import React from 'react';
import '../Filter/Filter.css';
import FilterIcon from '../../assests/icons/FilterIcon';
import FilterOption from './FilterOption/FilterOption';
import { useContext } from 'react';
import { FilterContext } from '../../Templates/CollectionDetailTemplate/CollectionDetailTemplate';
import { FilterContextSP } from '../../Templates/SearchTemplate/SearchTemplate';
import utils from '../../Utils/utils';

function Filter({ options, filterRef }) {
    const currentPage = utils.getCurrentPage();
    const filterContext = currentPage === 'search' ? FilterContextSP : FilterContext;
    const { collection, type, price_min, price_max } = options;
    const { filterEvents, clearFilter, filter, toggleFilter } = useContext(filterContext);
    const renderOption = (catergory, type) => {
        return catergory.map(option => {
            let selected = '';
            if (type === 'COLLECTIONS' && filter.collections.includes(option)) {
                selected = 'selected';
            } else if (type === 'CATEGORIES' && filter.categories.includes(option)) {
                selected = 'selected';
            }
            return <FilterOption bindEvent={filterEvents} key={option} option={option} type={type} selected={selected} />
        })
    }
    return (
        <div className='fitler-tree'>
            <div className='filter-header'>
                <FilterIcon />
                <h2 className="filter-title">FILTER BY</h2>
            </div>
            <div ref={filterRef} className="filter-content">
                <div className="filter-mb-action">
                    <div className='filter-header'>
                        <FilterIcon />
                        <h2 className="filter-title">FILTER BY</h2>
                    </div>
                    <button onClick={()=> toggleFilter()} className="close-filter-btn">X</button>
                </div>
                {(filter.collections.length > 0 || filter.categories.length > 0) && <div className="refine-by filter-option-box">
                    <div className="refine-by-header">
                        <h3>REFINE BY</h3>
                        <button onClick={() => clearFilter()} className="clear-all-btn">Clear All</button>
                    </div>
                    <div className="refine-by-items">
                        {filter.collections.length > 0 && <div className='refine-by-item-wrapper'>
                            {filter.collections.map(option => {
                                return <button onClick={() => filterEvents(option, 'COLLECTIONS')} key={option} className="refine-by-item">
                                    <span className="refine-by-type">Collection: </span>
                                    <span className='refine-by-value'>{option}</span>
                                </button>
                            })}
                        </div>
                        }
                        {filter.categories.length > 0 && <div className='refine-by-item-wrapper'>
                            {filter.categories.map(option => {
                                return <button onClick={() => filterEvents(option, 'CATEGORIES')} key={option} className="refine-by-item">
                                    <span className="refine-by-type">Category: </span>
                                    <span className='refine-by-value'>{option}</span>
                                </button>
                            })}
                        </div>
                        }
                    </div>
                </div>}
                {collection && <div className="filter-option-box">
                    <h2 className="filter-option-title">
                        COLLECTION
                    </h2>
                    <div className="filter-options">
                        {renderOption(collection, 'COLLECTIONS')}
                    </div>
                </div>}
                {type && <div className="filter-option-box">
                    <h2 className="filter-option-title">
                        CATEGORY
                    </h2>
                    <div className="filter-options">
                        {renderOption(type, 'CATEGORIES')}
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Filter