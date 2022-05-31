import React, {FC} from 'react';


interface PlayerProps {
    whiteTime: number;
}

const Player1: FC<PlayerProps> = ({whiteTime}) => {
    return (
        <div className="player-interface">
            {whiteTime}
        </div>
    );
};

export default Player1;