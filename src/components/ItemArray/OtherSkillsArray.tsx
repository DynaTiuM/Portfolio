import React, {useState} from 'react';

import {handleHover, handleHoverExit} from "../../services/handleHover";
import {PopOverProps} from "../../models/PopOver";
import PopOver from "../PopOver/PopOver";
import {getOtherSkills} from "../../services/otherSkills";

export default function OtherSkillsArray() {
    const [popOver, setPopOver] = useState<PopOverProps>({ visible: false, text: '', x: 0, y: 0 });

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '50px',
            justifyItems: 'center'
        }}>
            {getOtherSkills().map((item, index) => (
                <div key={index} style={{position:"relative"}}>
                    <img
                        key={index}
                        src={item.src}
                        alt={item.name}
                        style={{height: '90px', width: 'auto', transition: 'transform 0.2s ease-in-out'}}
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
