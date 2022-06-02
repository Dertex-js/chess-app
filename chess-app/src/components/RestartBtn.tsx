import React, {FC} from 'react';
import img from "../assets/reload.png"

interface BtnProps {
    handleRestart: () => void;
}

const RestartBtn: FC<BtnProps> = ({handleRestart}) => {
    return (
        <div className="restart-btn">
            <button onClick={handleRestart}>
                <img src={img} alt=""/>
                <p>Новая игра</p>
            </button>
        </div>
    );
};

export default RestartBtn;