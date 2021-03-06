import React, {FC, useState} from 'react';
import {Figure, FigureNames} from "../models/figures/Figure";
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";
import img from "../assets/player-1.png";
import LostFigures from "./LostFigures";


interface PlayerProps {
    whiteTime: number;
    figuresWhite: Figure[];
    currentPlayer: Player | null;
}

const Player1: FC<PlayerProps> = ({whiteTime, figuresWhite, currentPlayer}) => {

    let minutes = Math.trunc(whiteTime/60);
    let seconds = whiteTime % 60;

    if (whiteTime < 0) {
        minutes = 0;
        seconds = 0;
    }

    const formatted = [
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(':');


    return (
        <div className={["player-interface", (currentPlayer?.color === Colors.WHITE) ? "active" : ""].join(" ")}>
            <div className="logo">
                <img src={img} alt="player"/>
                <p>Player 1</p>
            </div>
            <div className="time">
                <p>Времени осталось:</p>
                <h1>
                    {formatted}
                </h1>
            </div>
            <LostFigures figures={figuresWhite}/>



        </div>
    );
};

export default Player1;