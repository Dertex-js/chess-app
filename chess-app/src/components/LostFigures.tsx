import React, {FC, useState} from 'react';
import {Figure, FigureNames} from "../models/figures/Figure";
import imgQueen from "../assets/queen.png"
import imgBishop from "../assets/bishop.png"
import imgKnight from "../assets/knight.png"
import imgRook from "../assets/rook.png"
import imgPawn from "../assets/pawn.png"


interface LostFiguresProps {
    figures: Figure[]
}

const LostFigures: FC<LostFiguresProps> = ({figures}) => {

    const [lostFigures, setLostFigures] = useState<number[]>([0, 0, 0, 0, 0])
    let counter = [0, 0, 0, 0, 0]
    for (let i = 0; i < figures.length; i++) {

        if (figures[i].name === FigureNames.QUEEN) {

            setLostFigures([counter[0]++, 0, 0, 0, 0])
        }
    }

    return (
        <div className="lost">
            <h1>Забрал фигур:</h1>
            <div className="lost-figures">
                <div className="lost-figure">
                    <img src={imgQueen} alt=""/>
                    {lostFigures[0]}
                </div>
                <div className="lost-figure">
                    <img src={imgBishop} alt=""/>
                    {lostFigures[1]}
                </div>
                <div className="lost-figure">
                    <img src={imgKnight} alt=""/>
                    {lostFigures[2]}
                </div>
                <div className="lost-figure">
                    <img src={imgRook} alt=""/>
                    {lostFigures[3]}
                </div>
                <div className="lost-figure">
                    <img src={imgPawn} alt=""/>
                    {lostFigures[4]}
                </div>
            </div>
        </div>
    );
};

export default LostFigures;