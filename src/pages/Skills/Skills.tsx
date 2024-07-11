import Subtitle from "../../components/Subtitle/Subtitle";
import ProgrammingLanguages from "../../components/ProgrammingLanguages/ProgrammingLanguages";
import Blank from "../../components/Blank/Blank";
import './Skills.css'
import Frameworks from "../../components/Frameworks/Frameworks";
import {useTranslation} from "react-i18next";

export default function Skills() {

    const { t } = useTranslation();

    return <>
        <Subtitle subtitle={t('programming-languages')}/>
        <div className="BackgroundLine"></div>
        <ProgrammingLanguages/>
        <Blank marginTopValue={80}/>
        <Subtitle subtitle={t('frameworks-and-libraries')}/>
        <Frameworks />
    </>
}