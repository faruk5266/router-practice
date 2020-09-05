import React from 'react';
import { useState, useEffect } from 'react';
import MutualFrnd from '../MutualFrnd/MutualFrnd';

const Friend = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[]);
    return (
       
        <div>
             <h2>Friends:{friends.length}</h2>
           {
             friends.map(friend => <MutualFrnd friend={friend}></MutualFrnd>)
             }
        </div>
    );
};

export default Friend;