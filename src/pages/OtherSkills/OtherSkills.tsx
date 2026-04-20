import Subtitle from "../../components/Subtitle/Subtitle";
import './OtherSkills.css'
import OtherSkillsArray from "../../components/ItemArray/OtherSkillsArray";
import {useTranslation} from "react-i18next";
import { useEffect } from "react";

export default function OtherSkills() {
    useEffect(() => {
        window.dispatchEvent(new Event("resize"));
    }, []);

    const { t } = useTranslation();

    return (
        <div className="GrayBackground2">
            <div className="Content">
                <Subtitle subtitle={t('other-skills')} />
            </div>
            <div className="Glassmorphism">
                <OtherSkillsArray />
            </div>
            <div className="PurpleLines">
            <div className="PurpleBackground1"></div>
                <div className="PurpleBackground2"></div>
                <div className="PurpleBackground3"></div>
                <div className="PurpleBackground4"></div>
            </div>
        </div>
    );
}
