import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";

interface LostFiguresProps {
    figures: Figure[]
}

const LostFigures: FC<LostFiguresProps> = ({figures}) => {
    return (
        <div className="lost">
            <div className="lost-figures">
                {figures.map(figure =>
                    <div

                        key={figure.id}
                    >
                        {figure.logo && <img width={20} height={20} src={figure.logo}/>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LostFigures;