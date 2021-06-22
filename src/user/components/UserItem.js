import React from 'react';

import './UserItem.css';

const UserItem = props => {
    return (
        <li classname ="user-item">
            <div className = "user-item__content">
                <div className = "user-item__image"></div>
                <img src={props.image} alt = {props.name}/>
                <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <h3>{props.placeCount} {props.placeCount ===1 ? 'place' : 'places'}</h3>
                </div>
            </div>
        </li>
    );
};

export default UserItem;