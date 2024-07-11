import React, { useState } from "react";
import Subtitle from "../../components/Subtitle/Subtitle";
import GithubButton from "../../components/GithubButton/GithubButton";
import { getProjects } from "../../services/projects";
import ProjectInformation from "../../components/PopUp/ProjectInformation/ProjectInformation";
import './Projects.css';
import {useTranslation} from "react-i18next";

export default function Projects() {
    const [projectInformation, setProjectInformation] = useState(false);
    const [projectIndex, setProjectIndex] = useState(0);

    const { t } = useTranslation();

    const handleClick = (index: number) => {
        setProjectIndex(index);
        setProjectInformation(true);
    };

    return (
        <>
            <Subtitle subtitle={t('projects')} />
            <div className="ProjectsContainer">
                <div className="Projects">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        {getProjects().map((project, index) => (
                            <div
                                className={"Project"}
                                key={index}
                                onMouseDown={() => handleClick(project.id)}
                            >
                                <img
                                    src={project.src}
                                    alt={project.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="ProjectsBackground"></div>
            <div className="PurpleBackground">
                <div className="FlexColumn" style={{ gap: '17px' }}>
                    <p className="ProjectsMoreText">{t('all-projects')}</p>
                    <a className="Href" href="https://github.com/DynaTiuM" target="_blank" rel="noopener noreferrer">
                        <GithubButton text={t('github-raphael')} />
                    </a>
                </div>
            </div>
            {projectInformation && (
                <div>
                    <ProjectInformation index={projectIndex} setProjectInformation={setProjectInformation} />
                </div>
            )}
        </>
    );
}
