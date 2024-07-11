import './../PopUp.css';
import { handleClickOutside, managePopUpScroll } from "../../../services/popUp";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useProjectInformation } from "../../../services/projectInformation";

import './ProjectInformation.css';
import Cross from "../Cross/Cross";
import {useTranslation} from "react-i18next";

interface ProjectInformationProps {
    index: number,
    setProjectInformation: Dispatch<SetStateAction<boolean>>
}

export default function ProjectInformation({ index, setProjectInformation }: ProjectInformationProps) {

    const { t } = useTranslation();

    const overlayRef = useRef<HTMLDivElement>(null);
    const projectInformation = useProjectInformation(index);

    useEffect(() => {
        managePopUpScroll(overlayRef);

        window.addEventListener('resize', () => managePopUpScroll(overlayRef));
        return () => {
            window.removeEventListener('resize', () => managePopUpScroll(overlayRef));
        };
    }, [projectInformation]);

    if (!projectInformation) {
        return <></>;
    }

    const transformText = (text: string) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <div className="InformationOverlay" onClick={(e) => handleClickOutside(e, setProjectInformation)} ref={overlayRef}>
            <div className="InformationContainer">
                <div className={"FlexRow"}>
                    <div className={"ProjectInformation"}>
                        <div className={"TextContainer"}>
                            <h3 className={"ProjectTitle"}>{projectInformation.project.name}</h3>
                            <h4 className={"ProjectSubtitle"}>Introduction</h4>
                            <p className={"ProjectText"}>{transformText(projectInformation.introduction)}</p>
                            <h4 className={"ProjectSubtitle"}>Réalisation du projet</h4>
                            <p className={"ProjectText"}>{transformText(projectInformation.description)}</p>
                        </div>

                        {projectInformation.big_image &&
                            <div className={"FlexRow"}>
                                <div className={"FlexColumn"} style={{ gap: 20, alignItems: 'center' }}>
                                    <img className={"ProjectImage"} src={projectInformation.big_image}
                                         alt={projectInformation.project.name} />
                                    <div className={"TechnologiesContainer"}>
                                        <div className={"TechnologiesTitle"}>{t('technologies')}</div>
                                        <div className={"LanguagesContainer"}>
                                            {
                                                projectInformation.languages.map((language, idx) => (
                                                    <div key={idx} className={"Language"}
                                                         style={{ backgroundColor: `var(--${language})` }}>
                                                        {language === 'CS' ? 'C#' : language}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    <Cross setState={setProjectInformation} />
                </div>
            </div>
        </div>
    )
}
