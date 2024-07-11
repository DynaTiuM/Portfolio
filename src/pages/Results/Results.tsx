import React, {useState} from 'react';
import Subtitle from "../../components/Subtitle/Subtitle";
import './Results.css';
import GPA from "../../components/GPA/GPABar/GPA";
import { GPAProps } from "../../models/GPA";
import GPAButton from "../../components/GPA/GPAButton/GPAButton";
import {getGPAS} from "../../services/gpas";
import GPAInformation from "../../components/PopUp/GPAInformation/GPAInformation";
import {useTranslation} from "react-i18next";

export default function Results() {

    const { t } = useTranslation();

    const [gpaInformation, setGpaInformation] = useState<boolean>(false);
    return (
        <>
            <div className="ResultsBackground">
                <div className="ResultsTitle">
                    <Subtitle subtitle="Résultats semestriels" />
                </div>
                <div className="GPAList">
                    {getGPAS().map((gpa: GPAProps, index: number) => (
                        <GPA key={index} date={gpa.date} value={gpa.value} index={gpa.index} />
                    ))}
                </div>
                <div className={"GPAButtonContainer"}>
                    <GPAButton text={t('more-information')} setGpaInformation={setGpaInformation} />
                </div>
                <div className="PlusBackground"></div>
            </div>
            {
                gpaInformation && (
                    <div>
                        <GPAInformation setGpaInformation={setGpaInformation} />
                    </div>
                )
            }
        </>
    );
}
