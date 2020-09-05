import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const MutualFrnd = (props) => {
    const {name, email, id} = props.friend;

    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }

    const nameStyle = {
        border:'3px solid green',   
        margin:'20px',
        padding:'20px',
        borderRadius:'5px'
    }
    return (
        <div style = {nameStyle}>
            <p>Name: {name}</p>
            <p>Email:{email}</p>
            <h4><Link to={`friend/${id}`}>  Show detail of{id}</Link></h4>
            <button onClick={()=>handleClick(id)}>Get Details</button>
        </div>
    );
};

export default MutualFrnd;