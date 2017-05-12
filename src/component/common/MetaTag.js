import React from 'react';

const MetaTag = (props) => {
    return (
        <div className="yourSelection">
            <div>Your Selection:</div>
            <ul className="yourSelectionList">
                <li className="yourSelectionItem">term: {props.search}
                    <span onClick={props.removeYourSelection}>&#10006;</span>
                </li>
            </ul>
        </div>
    )
};

export default MetaTag;