import React from 'react';
import _ from 'lodash';
const SelectedTag = (props) => {

    const renderOption = (filter)=> {
        return _.map(filter, function (itemFilter) {
            return (<option key={itemFilter} value={itemFilter}>{itemFilter}</option>)
        });
    };

    return (
        <div className="optionalTags">
            <div>Optional Tags:</div>
            <ul>
                <li>Year:&nbsp;
                    <select onChange={props.onFilterChange} data-filter-type="year">
                        {renderOption(props.filterYear)}
                    </select>
                </li>
                <li>Type:&nbsp;
                    <select onChange={props.onFilterChange} data-filter-type="type">
                        {renderOption(props.filterType)}
                    </select>
                </li>
            </ul>
        </div>
    )
};

export default SelectedTag;