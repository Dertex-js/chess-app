import Logo from "../../assets/black-king.png"
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export enum FigureNames {
    FIGURE = "Фигура",
    KING = "Фигура",
    KNIGHT = "Фигура",
    PAWN = "Фигура",
    QUEEN = "Фигура",
    ROOK = "Фигура",
    BISHOP = "Фигура",
}

export class Figure {
    color: Colors;
    logo: typeof Logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;


    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell) : boolean {
        return true; // Возвращает true или false, позже
    }
    moveFigure(target: Cell) {

    }
}