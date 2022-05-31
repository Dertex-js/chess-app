import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import Player1 from "./Player1";
import Player2 from "./Player2";
import {Colors} from "../models/Colors";
import {Figure} from "../models/figures/Figure";

interface PlayersProps {
    currentPlayer: Player | null;
    restart: () => void;
    figuresBlack: Figure[];
    figuresWhite: Figure[]
}



const PlayersComponent: FC<PlayersProps> = ({currentPlayer, restart, figuresBlack, figuresWhite}) => {
    const [blackTime, setBlackTime] = useState(300)
    const [whiteTime, setWhiteTime] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    function startTimer() {
        if(timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
        timer.current = setInterval(callback, 1000)
    }

    function decrementBlackTimer() {
        setBlackTime(prev => prev - 1)
    }

    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1)
    }

    const handleRestart = () => {
        setBlackTime(300)
        setWhiteTime(300)
        restart()
    }

    return (
        <div className="players">
            <Player1
                whiteTime={whiteTime}
                figuresWhite={figuresWhite}
                currentPlayer={currentPlayer}
            />
            <div className="restart-btn">
                <button onClick={handleRestart}>Новая игра</button>
            </div>
            <Player2
                blackTime={blackTime}
                figuresBlack={figuresBlack}
                currentPlayer={currentPlayer}
            />
        </div>
    );
};

export default PlayersComponent;