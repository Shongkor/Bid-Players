import React, { useEffect } from 'react';
import { useState } from 'react';
import './DisplayPlayers.css'
import Player from '../player/Player';
import PlayersList from '../Players-List/PlayersList';
import fakeData from '../../playersData.json'

const DisplayPlayers = () => {

    const [players, setPlayers] = useState([])
    useEffect(() => {
        setPlayers(fakeData)
    }, [])
    const [playersArray, setplayersArray] = useState([])

    const handleBid = (playerData) => {
        const myPlayersArray = [...playersArray, playerData];
        setplayersArray(myPlayersArray)
    };

    return (
        <div className='displayPlayers'>
            <div className='players-container'>

                {
                    players.map(player => <Player player={player} handleBid={handleBid} key={player._id}></Player>)
                }

            </div>
            <div className='cart'>
                <PlayersList playersArray={playersArray}></PlayersList>
            </div>
        </div>
    );
};

export default DisplayPlayers;