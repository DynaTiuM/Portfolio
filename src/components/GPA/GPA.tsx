import React from 'react';
import { GPAProps } from "../../models/GPA";
import './GPA.css';

export default function GPA({ date, value, index }: GPAProps) {
    return (
        <div className="GPAContainer">
            <div className="GPAFlex">
                <h2 className="GPADate" style={{textAlign: "right"}}>{date}</h2>
                <div className="Bar">
                    <div className="ProgressBar" style={{width: `${value}%`}}>
                        <h2 className="GPAValue" style={{textAlign: "right", margin: 0}}>{value}%</h2>
                    </div>
                    {/* Add the dashed line */}
                </div>
                {index === 0 && (
                    <>
                        <h2 className={"HundredPercent"}>100%</h2>
                        <div className="DashedLine"></div>
                    </>
                )}

            </div>
        </div>
    );
}
