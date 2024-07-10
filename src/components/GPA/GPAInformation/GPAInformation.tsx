import React, {Dispatch, SetStateAction, useState, useEffect, useRef} from 'react';
import './GPAInformation.css';
import { getGpaInformation, getNumberOfSemesters } from "../../../services/gpainformation";
import { GPAInformationProps } from "../../../models/GPAInformation";
import UVTab from "../UVTab/UVTab";

import Cross from '../../../assets/images/cross.png';

interface GPAInformationUseState {
    setGpaInformation: Dispatch<SetStateAction<boolean>>
}

export default function GPAInformation({setGpaInformation} : GPAInformationUseState) {
    const numberOfSemesters = getNumberOfSemesters();
    const gpaInformation = getGpaInformation();
    const [activeTab, setActiveTab] = useState(0);
    const overlayRef = useRef<HTMLDivElement>(null);

    const closePopUp = () => {
        setGpaInformation(false);
    }

    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === event.currentTarget) {
            closePopUp();
        }
    };

    const updateAlignment = () => {
        const overlay = overlayRef.current;
        if (overlay) {
            const container = overlay.querySelector('.GPAInformationContainer') as HTMLElement;
            if (container) {
                if (container.scrollHeight > window.innerHeight) {
                    overlay.style.alignItems = 'flex-start';
                    container.style.marginTop = '50px';
                    container.style.marginBottom = '50px';
                } else {
                    overlay.style.alignItems = 'center';
                }
            }
        }
    };

    useEffect(() => {
        updateAlignment();

        window.addEventListener('resize', updateAlignment);
        return () => {
            window.removeEventListener('resize', updateAlignment);
        };
    }, [gpaInformation]);

    return (
        <div className="GPAInformationOverlay" onClick={handleClickOutside} ref={overlayRef}>
            <div className="GPAInformationContainer">
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
                <div className={"CrossContainer"} onClick={closePopUp}>
                    <img src={Cross} alt='x' className={"Cross"} />
                </div>
            </div>
        </div>
    );
}
