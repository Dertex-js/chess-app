import React, {FC, useState} from 'react';
import {Player} from "../models/Player";

interface TimerProps {
    currentPlayer: Player;
    restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(300)
    const [whiteTime, setWhiteTime] = useState(300)

    function startTimer() {

    }

    function decrementBlackTimer() {

    }

    function decrementWhiteTimer() {

    }

    return (
        <div>
           <div>
               <button onClick={restart}>Restart game</button>
           </div>
            <h2>Черные - {blackTme}</h2>
            <h2>Белые - {whiteTme}</h2>
        </div>
    );
};

export default Timer;