import Subtitle from "../../components/Subtitle/Subtitle";
import './Projects.css'

import React, {useState} from "react";
import GithubButton from "../../components/GithubButton/GithubButton";
import {getProjects} from "../../services/projects";
import ProjectInformation from "../../components/PopUp/ProjectInformation/ProjectInformation";

export default function Projects() {
    const [projectInformation, setProjectInformation] = useState<boolean>(false);
    const [projectIndex, setProjectIndex] =useState(0);

    // @ts-ignore
    const handleHover = (event) => {
        event.target.style.transform = 'scale(1.05)';
    };

    // @ts-ignore
    const handleHoverExit = (event) => {
        event.target.style.transform = 'scale(1)';
    };

    // @ts-ignore
    const handleClick = (index) => {
        setProjectIndex(index);
        setProjectInformation(true);
    };

    return <>
        <Subtitle subtitle={"Projets"}/>
        <div className={"ProjectsContainer"}>
            <div className={"Projects"}>
                <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
                    {getProjects().map((project, index) => (
                        <img
                            key={index}
                            src={project.src}
                            alt={project.name}
                            style={{
                                minHeight: 300,
                                height: '20vw',
                                width: 'auto',
                                marginBottom: '10px',
                                transition: 'transform 0.25s ease-in-out'
                            }}
                            onMouseOver={handleHover}
                            onMouseOut={handleHoverExit}
                            onMouseDown={() => handleClick(project.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
        <div className="ProjectsBackground"></div>
        <div className={"PurpleBackground"}>
            <div className={"FlexColumn"} style = {{gap: '17px'}}>
                <p className={"ProjectsMoreText"}>Intégralité de mes réalisations sur mon profil Github</p>
                <a className={"Href"} href={"https://github.com/DynaTiuM"} target="_blank" rel="noopener noreferrer">
                    <GithubButton text={"Github Raphaël PERRIN   ▸"}/>
                </a>
            </div>
        </div>
        {
            projectInformation && (
                <div>
                    <ProjectInformation index={projectIndex} setProjectInformation={setProjectInformation} />
                </div>
            )
        }

    </>
}