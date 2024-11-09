import UV from "../UV/UV";

import './UVTab.css'
import React from "react";
import {GPAInformationProps} from "../../../../models/GPAInformation";
import {UVProps} from "../../../../models/UV";
import Blank from "../../../Blank/Blank";
import {useTranslation} from "react-i18next";

interface UVTabProps {
    gpaInformation: GPAInformationProps;
}

export default function UVTab({gpaInformation}: UVTabProps) {

    const { t } = useTranslation();

    return (
        <>
            <div className={"UVTabContainer"}>
                <div className={"UVSectionsContainer"}>
                    <div className={"UVSections"}>
                        <p className={"UVSection"}>{t('subject')}</p>
                        <p className={"UVSection"}>{t('description')}</p>
                        <p className={"UVSection"}>{t('mark')}</p>
                        <p className={"UVSection"}>{t('ECTS')}</p>
                    </div>
                </div>
                <div className={"UVTab"}>
                    {
                        gpaInformation.uvs.map((u: UVProps) => (
                            <UV key={u.name} {...u} />
                        ))
                    }
                </div>
                <Blank marginTopValue={30} />
                <div className={"GPABarContainer"}>
                    <div>
                        <p className={"GPAText"}>GPA</p>
                    </div>
                    <div className="GPABar">
                        <div className="GPAProgressBar" style={{width: `${gpaInformation.gpa.value}%`}}>
                            <h2 className="GPAValue"
                                style={{textAlign: "right", margin: 0}}>{gpaInformation.gpa.value}%</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}