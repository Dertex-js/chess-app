import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";


interface PlayerProps {
    whiteTime: number;
    figuresWhite: Figure[];
    currentPlayer: Player | null;
}

const Player1: FC<PlayerProps> = ({whiteTime, figuresWhite, currentPlayer}) => {
    return (
        <div className={["player-interface", (currentPlayer?.color === Colors.WHITE) ? "active" : ""].join(" ")}>
            <div className="logo">

            </div>



            {whiteTime}
        </div>
    );
};

export default Player1;