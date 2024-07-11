import React, {Dispatch, SetStateAction, useState, useEffect, useRef} from 'react';
import './GPAInformation.css';
import './../PopUp.css';

import { useGpaInformation, useNumberOfSemesters } from "../../../services/gpaInformation";
import { GPAInformationProps } from "../../../models/GPAInformation";
import UVTab from "./UVTab/UVTab";

import {managePopUpScroll, handleClickOutside} from "../../../services/popUp";
import Cross from "../Cross/Cross";

interface GPAInformationUseState {
    setGpaInformation: Dispatch<SetStateAction<boolean>>
}

export default function GPAInformation({setGpaInformation} : GPAInformationUseState) {
    const numberOfSemesters = useNumberOfSemesters();
    const gpaInformation = useGpaInformation();
    const [activeTab, setActiveTab] = useState(0);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        managePopUpScroll(overlayRef);

        window.addEventListener('resize', () => managePopUpScroll(overlayRef));
        return () => {
            window.removeEventListener('resize', () => managePopUpScroll(overlayRef));
        };
    }, [gpaInformation]);

    return (
        <div className="InformationOverlay" onClick={(e) => handleClickOutside(e, setGpaInformation)} ref={overlayRef}>
            <div className="InformationContainer">
                <div className="GPAInformationTabs">
                    {
                        gpaInformation.map((gpaInformation: GPAInformationProps, index: number) => {
                            let className = 'GPAInformationTab';
                            if (index === 0) {
                                className += ' firstTab';
                            } else if (index === numberOfSemesters - 1) {
                                className += ' lastTab';
                            } else {
                                className += ' between';
                            }

                            if (index === activeTab) {
                                className += ' active';
                            }

                            return (
                                <div
                                    key={index}
                                    className={className}
                                    style={{ width: `${(100 / numberOfSemesters)}%` }}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <p>{gpaInformation.gpa.date}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <UVTab gpaInformation={gpaInformation[activeTab]} />
                <Cross setState={setGpaInformation} />
            </div>
        </div>
    );
}
