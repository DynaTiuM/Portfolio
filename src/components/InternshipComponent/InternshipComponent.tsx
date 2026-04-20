import { useState } from 'react';
import './InternshipComponent.css';
import InternProject from "../InternProject/InternProject";
import {useTranslation} from "react-i18next";
import { Internship } from '../../models/Internship';

export default function InternshipComponent(internship: Internship) {
    const [expandedProject, setExpandedProject] = useState<number>(1);
    const { t } = useTranslation();

    return (
        <div className="internshipContainer">
            <img src={internship.background_symbol} className="InternshipLogo" alt="Background Logo"/>
            <div className="LeftContainer">
                <img src={internship.image} className="CompanyImg" alt="Internship"/>
                <p>{t(internship.period)}</p>
                <p className={"InternshipText"}>{t(internship.info)}</p>
            </div>
            <InternProject
                title={t(internship.internProjects[0].title)}
                description={t(internship.internProjects[0].description)}
                isExpanded={expandedProject === 1}
                onClick={() => setExpandedProject(1)}
            />
            <InternProject
                title={t(internship.internProjects[1].title)}
                description={t(internship.internProjects[1].description)}
                isExpanded={expandedProject === 2}
                onClick={() => setExpandedProject(2)}
            />
        </div>
    )
}