import React from 'react';
import { Link } from 'react-router-dom';

import './UserItem.css';
import Avatar from '../../shared/components/UIElements/Avatar';

const UserItem = props => {
    return (
        <li classname ="user-item">
            <div className = "user-item__content">
                <link to= {`/${props.id}/places`}>
                <div className = "user-item__image"></div>
                <Avatar image={props.image} alt = {props.name} />
                <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <h3>{props.placeCount} {props.placeCount ===1 ? 'place' : 'places'}
                    </h3>
                    <h4>{props.id}</h4>
                </div>
                </link>
            </div>
        </li>
    );
};

export default UserItem;