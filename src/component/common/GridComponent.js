import React from 'react';
import _ from 'lodash';

const Grid = (props) => {
    const {items,styles,onMouseEnter,onMouseLeave,onGridItemClick} = props;
    return ( <div style={styles.gridStyle}>
        {renderItems(items,styles,onMouseEnter,onMouseLeave,onGridItemClick)}
    </div>)
};

const renderItems = (items, styles, onMouseEnter, onMouseLeave,onGridItemClick) => {
    return _.map(items, function (item) {
        return (<div
            onClick={onGridItemClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={styles.gridItem}
            key={item}>{item}</div>)
    });
};
export default Grid;