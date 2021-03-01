import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const { picture, name, price } = props.player;
    return (
        <div className='player'>
            <img src={picture} alt="" />
            <div>
                <h1>Name : {name}</h1>
                <h3>Salary : {price}</h3>
            </div>
            <div className='btn'>
                <button onClick={() => props.handleBid(props.player)}> <FontAwesomeIcon icon={faPlus} />Bid</button>
            </div>
        </div>
    );
};

export default Player;