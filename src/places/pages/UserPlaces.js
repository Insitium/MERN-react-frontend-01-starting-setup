import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES =[
    {
        id:'p1',
        title:'empire satte building',
        description:'One of the most famous sky scrappers in the world!',
        imageUrl:'https://static.toiimg.com/thumb/71579199/empire-state-building.jpg?width=1200&height=900',
        address: '20 W 34th St, New York, NY 10001, United States',
        location:{
            lat:40.7484564 ,
            long:-73.9944192
        },
        creater:'u1'
    },
    
    {
        id:'p2',
        title:'empire satte building',
        description:'One of the most famous sky scrappers in the world!',
        imageUrl:'https://static.toiimg.com/thumb/71579199/empire-state-building.jpg?width=1200&height=900',
        address: '20 W 34th St, New York, NY 10001, United States',
        location:{
            lat:40.7484564 ,
            long:-73.9944192
        },
        creater:'u1'
    }
]

const UserPlaces =()=>{
    return <PlaceList items={DUMMY_PLACES} />
};

export default UserPlaces;