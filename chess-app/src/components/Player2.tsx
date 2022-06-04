import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";
import img from "../assets/player-2.png";
import LostFigures from "./LostFigures";


interface PlayerProps {
    blackTime: number;
    figuresBlack: Figure[];
    currentPlayer: Player | null;
}

const Player2: FC<PlayerProps> = ({blackTime, figuresBlack, currentPlayer}) => {

    let minutes = Math.trunc(blackTime/60);
    let seconds = blackTime % 60;

    if (blackTime < 0) {
        minutes = 0;
        seconds = 0;
    }

    const formatted = [
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(':');


    return (
        <div className={["player-interface", (currentPlayer?.color === Colors.BLACK) ? "active" : ""].join(" ")}>
            <div className="logo">
                <img src={img} alt="player"/>
                <p>Player 2</p>
            </div>
            <div className="time">
                <p>Времени осталось:</p>
                <h1>{formatted}</h1>
            </div>
            <LostFigures figures={figuresBlack}/>
        </div>
    );
};

export default Player2;