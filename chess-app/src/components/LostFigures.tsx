import React, { FC, useMemo } from 'react';
import {Figure, FigureNames} from "../models/figures/Figure";
import imgQueen from "../assets/queen.png"
import imgBishop from "../assets/bishop.png"
import imgKnight from "../assets/knight.png"
import imgRook from "../assets/rook.png"
import imgPawn from "../assets/pawn.png"


interface LostFiguresProps {
    figures: Figure[]
}

const fallenCheesesInitial: { [figure: string]: number } = Object.keys(FigureNames).reduce((stack, item) => ({ ...stack , [item]: 0 }), {});

const getFigure = (figure: FigureNames): keyof typeof FigureNames => {
    switch (figure) {
        case FigureNames.KNIGHT:
            return 'KNIGHT'
        case FigureNames.PAWN:
            return 'PAWN'
        case FigureNames.QUEEN:
            return 'QUEEN'
        case FigureNames.ROOK:
            return 'ROOK'
        case FigureNames.BISHOP:
            return 'BISHOP'
        default:
            return 'FIGURE'
    }
}


const LostFigures: FC<LostFiguresProps> = ({figures}) => {

    const fallenChess = useMemo(() => {
        return figures.reduce((accumulator, value) => {
            return {...accumulator, [getFigure(value.name)]: (accumulator[(getFigure(value.name))] || 0) + 1 };
        }, fallenCheesesInitial);
    }, [figures.length]);


    return (
        <div className="lost">
            <h1>Забрал фигур:</h1>
            <div className="lost-figures">
                <div className="lost-figure">
                    <img src={imgQueen} alt=""/>
                    {fallenChess.QUEEN}
                </div>
                <div className="lost-figure">
                    <img src={imgBishop} alt=""/>
                    {fallenChess.BISHOP}
                </div>
                <div className="lost-figure">
                    <img src={imgKnight} alt=""/>
                    {fallenChess.KNIGHT}
                </div>
                <div className="lost-figure">
                    <img src={imgRook} alt=""/>
                    {fallenChess.ROOK}
                </div>
                <div className="lost-figure">
                    <img src={imgPawn} alt=""/>
                    {fallenChess.PAWN}
                </div>
            </div>
        </div>
    );
};

export default LostFigures;