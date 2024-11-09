import React, {useEffect, useState} from 'react';

import {handleHover, handleHoverExit} from "../../services/handleHover";
import {PopOverProps} from "../../models/PopOver";
import PopOver from "../PopOver/PopOver";
import {getOtherSkills} from "../../services/otherSkills";

export default function OtherSkillsArray() {
    const [popOver, setPopOver] = useState<PopOverProps>({ visible: false, text: '', x: 0, y: 0 });

    const [numColumns, setNumColumns] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 700) {
                setNumColumns(2);
            }
            else if (window.innerWidth <= 900 && window.innerHeight > 700) {
                setNumColumns(4);
            }
            else {
                setNumColumns(5);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
            gap: '50px',
            justifyItems: 'center',
        }}>
            {getOtherSkills().map((item, index) => (
                <div key={index} style={{position:"relative"}}>
                    <img
                        key={index}
                        src={item.src}
                        alt={item.name}
                        style={{height: '5.2vw',minHeight: 55, width: 'auto', transition: 'transform 0.2s ease-in-out'}}
                        onMouseOver={(e) => handleHover(e, item.name, setPopOver)}
                        onMouseOut={(e) => handleHoverExit(e, setPopOver)}
                    />
                    {popOver.visible && popOver.text === item.name && (
                        <PopOver text={popOver.text}></PopOver>
                    )}
                </div>

            ))}
        </div>
    );
};
