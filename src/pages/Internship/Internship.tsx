import { useState } from 'react';
import './Internship.css';
import Axopen from '../../assets/images/axopen/axopen.png';
import X from '../../assets/images/axopen/x.svg';
import InternProject from "../../components/InternProject/InternProject";
import {useTranslation} from "react-i18next";

export default function Internship() {
    const [expandedProject, setExpandedProject] = useState<number>(1);

    const { t } = useTranslation();

    return (
        <div>
            <h4>{t('internship')}</h4>
            <div className="InternshipContainer">
                <img src={X} className="AxopenX" alt="Background X"/>
                <div className="LeftContainer">
                    <img src={Axopen} className="AxopenImg" alt="Axopen"/>
                    <p>{t('axopen_period')}</p>
                    <p className={"AxopenText"}>{t('axopen_info')}</p>
                </div>
                <InternProject
                    title={t('axopen_project_one_title')}
                    description={t('axopen_project_one')}
                    isExpanded={expandedProject === 1}
                    onClick={() => setExpandedProject(1)}
                />
                <InternProject
                    title={t('axopen_project_two_title')}
                    description={t('axopen_project_two')}
                    isExpanded={expandedProject === 2}
                    onClick={() => setExpandedProject(2)}
                />
            </div>
        </div>
    );
}