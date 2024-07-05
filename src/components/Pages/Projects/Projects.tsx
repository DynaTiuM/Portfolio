import Subtitle from "../../Subtitle/Subtitle";
import './Projects.css'

import Azul from '../../../assets/images/projects/azul.png';
import Twitturtle from '../../../assets/images/projects/twitturtle.png';
import Tetris from '../../../assets/images/projects/tetris.png';
import Unity from '../../../assets/images/projects/unity.png';
import Pogo from '../../../assets/images/projects/pogo.png';
import Ludiq from '../../../assets/images/projects/ludiq.png';
import React from "react";
import GithubButton from "../../GithubButton/GithubButton";

const projects = [
    {src: Azul, alt: "Azul"},
    {src: Twitturtle, alt: "Twitturtle"},
    {src: Tetris, alt: "Tetris"},
    {src: Unity, alt: "Unity"},
    {src: Pogo, alt: "Pogo"},
    {src: Ludiq, alt: "Ludiq"}
]

export default function Projects() {

    // @ts-ignore
    const handleHover = (event) => {
        event.target.style.transform = 'scale(1.05)';
    };

    // @ts-ignore
    const handleHoverExit = (event) => {
        event.target.style.transform = 'scale(1)';
    };

    return <>
        <Subtitle subtitle={"Projets"}/>
        <div className={"ProjectsContainer"}>
            <div className={"Projects"}>
                <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
                    {projects.map((project, index) => (
                        <img
                            key={index}
                            src={project.src}
                            alt={project.alt}
                            style={{
                                height: '300px',
                                width: 'auto',
                                marginBottom: '10px',
                                transition: 'transform 0.25s ease-in-out'
                            }}
                            onMouseOver={handleHover}
                            onMouseOut={handleHoverExit}
                        />
                    ))}
                </div>
            </div>
        </div>
        <div className="ProjectsBackground"></div>
        <div className={"PurpleBackground"}>
            <div className={"FlexColumn"} style = {{gap: '17px'}}>
                <p className={"ProjectsMoreText"}>Intégralité de mes réalisations du mon profil Github</p>
                <GithubButton text={"Github Raphaël PERRIN   ▸"}/>
            </div>
        </div>

    </>
}