import './../PopUp.css';
import {handleClickOutside, managePopUpScroll} from "../../../services/popUp";
import React, {Dispatch, SetStateAction, useEffect, useRef} from "react";
import {getProjectInformation} from "../../../services/projectInformation";

import './ProjectInformation.css';
import Cross from "../Cross/Cross";

interface ProjectInformationProps {
    index: number,
    setProjectInformation: Dispatch<SetStateAction<boolean>>
}

export default function ProjectInformation({index, setProjectInformation}: ProjectInformationProps) {

    const overlayRef = useRef<HTMLDivElement>(null);
    const projectInformation = getProjectInformation(index);


    useEffect(() => {
        managePopUpScroll(overlayRef);

        window.addEventListener('resize', () => managePopUpScroll(overlayRef));
        return () => {
            window.removeEventListener('resize', () => managePopUpScroll(overlayRef));
        };
    }, [projectInformation]);

    if(!projectInformation){
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
                            <div>
                                <img className={"ProjectImage"} src={projectInformation.big_image}
                                     alt={projectInformation.project.name}/>
                            </div>
                        }
                    </div>

                    <Cross setState={setProjectInformation} />
                </div>
            </div>
        </div>
    )
}