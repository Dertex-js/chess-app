import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";


interface PlayerProps {
    blackTime: number;
    figuresBlack: Figure[];
    currentPlayer: Player | null;
}

const Player2: FC<PlayerProps> = ({blackTime, figuresBlack, currentPlayer}) => {
    return (
        <div className={["player-interface", (currentPlayer?.color === Colors.BLACK) ? "active" : ""].join(" ")}>
            {blackTime}
        </div>
    );
};

export default Player2;