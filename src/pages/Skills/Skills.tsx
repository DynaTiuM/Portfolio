import Subtitle from "../../components/Subtitle/Subtitle";
import ProgrammingLanguages from "../../components/ProgrammingLanguages/ProgrammingLanguages";
import Blank from "../../components/Blank/Blank";
import './Skills.css'
import Frameworks from "../../components/Frameworks/Frameworks";
import {useTranslation} from "react-i18next";
import Title from "../../components/Title/Title";

export default function Skills() {

    const { t } = useTranslation();

    return <>
        <div className={"Titles"}>
            <Title title={t('portfolio')} />
            <Subtitle subtitle={t('programming-languages')}/>
        </div>
        <div className="WhiteBackground">
            <div className="BackgroundLine"></div>
            <ProgrammingLanguages/>
            <Blank marginTopValue={80}/>
            <Subtitle subtitle={t('frameworks-and-libraries')}/>
            <Frameworks />
        </div>
        
    </>
}