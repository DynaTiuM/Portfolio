import React from 'react';
import Subtitle from "../../components/Subtitle/Subtitle";
import './Results.css';
import GPA from "../../components/GPA/GPA";
import { GPAProps } from "../../models/GPA";
import GPAButton from "../../components/GPAButton/GPAButton";

const gpas: GPAProps[] = [
    { date: 'Automne 2022', value: 80, index: 0 },
    { date: 'Printemps 2023', value: 88, index: 1 },
    { date: 'Printemps 2024', value: 84, index: 2 },
];

export default function Results() {
    return (
        <div className="GrayBackground">
            <div className="ResultsTitle">
                <Subtitle subtitle="Résultats semestriels" />
            </div>
            <div className="GPAList">
                {gpas.map((gpa: GPAProps, index: number) => (
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
