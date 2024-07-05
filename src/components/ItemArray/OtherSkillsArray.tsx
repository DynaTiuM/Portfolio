import React, {useState} from 'react';
import CSS from "../../assets/images/other-skills/css.png";
import MySQL from "../../assets/images/other-skills/mysql.svg";
import HTML from "../../assets/images/other-skills/html.png";
import Graphviz from "../../assets/images/other-skills/graphviz.png";
import AI from "../../assets/images/other-skills/ai.png";
import Figma from "../../assets/images/other-skills/figma.svg";
import Office from "../../assets/images/other-skills/office.png";
import Latex from "../../assets/images/other-skills/latex.png";
import Github from "../../assets/images/other-skills/github.png";
import Gitlab from "../../assets/images/other-skills/gitlab.png";
import Unity from "../../assets/images/other-skills/unity.png";
import UE from "../../assets/images/other-skills/unreal-engine.png";
import Blender from "../../assets/images/other-skills/blender.png";

import {handleHover, handleHoverExit} from "../../services/handleHover";
import {PopOverProps} from "../../models/PopOver";
import PopOver from "../PopOver/PopOver";

const otherSkills = [
    { src: MySQL, alt: 'MySQL' },
    { src: CSS, alt: 'CSS' },
    { src: HTML, alt: 'HTML' },
    { src: Graphviz, alt: 'Graphviz' },
    { src: AI, alt: 'Adobe Illustrator' },
    { src: Figma, alt: 'Figma' },
    { src: Github, alt: 'Github' },
    { src: Gitlab, alt: 'Gitlab' },
    { src: Unity, alt: 'Unity' },
    { src: UE, alt: 'Unreal Engine' },
    { src: Blender, alt: 'Blender' },
    { src: Office, alt: 'Office' },
    { src: Latex, alt: 'Latex' },
]

export default function OtherSkillsArray() {
    const [popOver, setPopOver] = useState<PopOverProps>({ visible: false, text: '', x: 0, y: 0 });

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '50px',
            justifyItems: 'center'
        }}>
            {otherSkills.map((item, index) => (
                <div key={index} style={{position:"relative"}}>
                    <img
                        key={index}
                        src={item.src}
                        alt={item.alt}
                        style={{height: '90px', width: 'auto', transition: 'transform 0.2s ease-in-out'}}
                        onMouseOver={(e) => handleHover(e, item.alt, setPopOver)}
                        onMouseOut={(e) => handleHoverExit(e, setPopOver)}
                    />
                    {popOver.visible && popOver.text === item.alt && (
                        <PopOver text={popOver.text}></PopOver>
                    )}
                </div>

            ))}
        </div>
    );
};
