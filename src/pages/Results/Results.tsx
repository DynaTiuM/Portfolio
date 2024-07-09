import React from 'react';
import Subtitle from "../../components/Subtitle/Subtitle";
import './Results.css';
import GPA from "../../components/GPA/GPA";
import { GPAProps } from "../../models/GPA";
import GPAButton from "../../components/GPAButton/GPAButton";
import {getGPAS} from "../../services/gpas";

export default function Results() {
    return (
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
                <GPAButton text={"Plus d'informations   ▸"} />
            </div>
            <div className="PlusBackground"></div>
        </div>
    );
}
