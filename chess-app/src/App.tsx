import React, {useEffect, useState} from 'react';
import "./App.css"
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

function App() {
    const [board, setBoard] = useState(new Board())
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

    useEffect(() => {
        restart()
        setCurrentPlayer(whitePlayer);
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells()
        newBoard.addFigures()
        setBoard(newBoard)
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

    return (
        <div className="app">

            <BoardComponent
                board={board}
                setBoard={setBoard}
                currentPlayer={currentPlayer}
                swapPlayer={swapPlayer}
            />
            <div className="navigation">
                <div className="p-lost">
                    <div className="player">
                        <h3>Игрок: {currentPlayer?.color}</h3>
                    </div>
                    <LostFigures
                        title="Черные фигуры"
                        figures={board.lostBlackFigures}
                    />
                    <LostFigures
                        title="Белые фигуры"
                        figures={board.lostWhiteFigures}
                    />
                </div>
                <Timer
                    currentPlayer={currentPlayer}
                    restart={restart}
                />
            </div>
        </div>
    );
}

export default App;
