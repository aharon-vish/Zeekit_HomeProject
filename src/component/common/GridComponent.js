import React from 'react';
import _ from 'lodash';

const Grid = (props) => {
    const {items, styles, onMouseEnter, onMouseLeave, onGridItemClick} = props;

    return ( <div style={styles ? styles.gridStyle : null}>
        {renderItems(items, styles, onMouseEnter, onMouseLeave, onGridItemClick)}
    </div>)
};

const renderItems = (items, styles, onMouseEnter, onMouseLeave, onGridItemClick) => {
    return _.map(items, function (item, index) {
        if (item.Title && item.Year && item.Poster) {
            return (
                <div className={styles.gridItem} key={item.imdbID}>
                <h5>{item.Title}</h5>
                <h6>{item.Year}</h6>
                <img alt="Image Not found" title="Image Not found Images" src={item.Poster}/>
            </div>)

        } else {
            return (<div
                onClick={onGridItemClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={styles ? styles.gridItem : null}
                key={index}>{item}</div>)
        }
    });
};
export default Grid;