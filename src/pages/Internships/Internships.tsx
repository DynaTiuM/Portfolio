import './Internships.css';
import {useTranslation} from "react-i18next";
import InternshipComponent from '../../components/InternshipComponent/InternshipComponent';
import { getInternships } from '../../services/internships';
import { Internship } from '../../models/Internship';

export default function Internships() {
    const { t } = useTranslation();

    return (
        <>
            <h4>{t('internships')}</h4>
            <div className="Internships">   
            {
                getInternships().map((internship: Internship, index) => (
                    <InternshipComponent key={index} {...internship} />
                ))
            }
            </div>
        </>
    );
}