import React from 'react';
import './PlayersList.css'

const PlayersList = (props) => {
    const playersList = props.playersArray;
    const total = playersList.reduce((total, plyrs) => total + plyrs.price, 0)
    return (
        <div>
            <h3 className='number'>Numbers of players: {playersList.length}</h3>
            <h4 className='heading'>Added -Players List </h4>
            <ol>
                {
                    playersList.map(player => <b key={player._id}><li>  <p><b>{player.name}</b></p><b> ${player.price}</b></li></b>)
                }
            </ol>

            <br />
            <h3 className="budget">  Total-Budget : $  {total}</h3>

        </div>
    );
};

export default PlayersList;