import Subtitle from "../../Subtitle/Subtitle";

import './Results.css'
import GPA from "../../GPA/GPA";
import {GPAProps} from "../../../models/GPA";

const gpas: GPAProps[] = [
    {date: 'Automne 2022', value: 80},
    {date: 'Printemps 2023', value: 88},
    {date: 'Printemps 2024', value: 84},
]

export default function Results() {
    return<>
        <div className={"GrayBackground"}>
            <div className={"ResultsTitle"}>
                <Subtitle subtitle={"Résultats semestriels"}/>
            </div>
            <div className={"GPAList"}>
                {
                    gpas.map((gpa: GPAProps, index: number) => (
                        <GPA date={gpa.date} value={gpa.value}/>
                    ))
                }
            </div>
            <div className={"PlusBackground"}>

            </div>


        </div>
    </>
}