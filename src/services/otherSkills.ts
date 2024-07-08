import MySQL from "../assets/images/other-skills/mysql.svg";
import CSS from "../assets/images/other-skills/css.png";
import HTML from "../assets/images/other-skills/html.png";
import Graphviz from "../assets/images/other-skills/graphviz.png";
import AI from "../assets/images/other-skills/ai.png";
import Figma from "../assets/images/other-skills/figma.svg";
import Github from "../assets/images/other-skills/github.png";
import Gitlab from "../assets/images/other-skills/gitlab.png";
import Unity from "../assets/images/other-skills/unity.png";
import UE from "../assets/images/other-skills/unreal-engine.png";
import Blender from "../assets/images/other-skills/blender.png";
import Office from "../assets/images/other-skills/office.png";
import Latex from "../assets/images/other-skills/latex.png";
import {OtherSkill} from "../models/OtherSkill";

export const getOtherSkills = (): OtherSkill[] => {
    return [
        { src: MySQL, name: 'MySQL' },
        { src: CSS, name: 'CSS' },
        { src: HTML, name: 'HTML' },
        { src: Graphviz, name: 'Graphviz' },
        { src: AI, name: 'Adobe Illustrator' },
        { src: Figma, name: 'Figma' },
        { src: Github, name: 'Github' },
        { src: Gitlab, name: 'Gitlab' },
        { src: Unity, name: 'Unity' },
        { src: UE, name: 'Unreal Engine' },
        { src: Blender, name: 'Blender' },
        { src: Office, name: 'Office' },
        { src: Latex, name: 'Latex' }
    ]
}