import React, {FC} from 'react';


interface PlayerProps {
    blackTime: number;
}

const Player2: FC<PlayerProps> = ({blackTime}) => {
    return (
        <div className="player-interface">
            {blackTime}
        </div>
    );
};

export default Player2;