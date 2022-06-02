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





    return (
        <div className={["player-interface", (currentPlayer?.color === Colors.WHITE) ? "active" : ""].join(" ")}>
            <div className="logo">
                <img src={img} alt="player"/>
                <p>Player 1</p>
            </div>
            <div className="time">
                <p>Времени осталось:</p>
                <h1>{whiteTime}</h1>
            </div>
            <LostFigures figures={figuresWhite}/>



        </div>
    );
};

export default Player1;