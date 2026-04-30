import './AboutMe.css'
import Blank from "../../components/Blank/Blank";
import LogoConception from "../LogoConception/LogoConception";
import Conception from "../Conception/Conception";
import {useTranslation} from "react-i18next";

export default function AboutMe() {

    const { t } = useTranslation();

    return <div>
        <Blank marginTopValue={40} />
        <div className={"FlexColumn"} style={{gap: "15px"}}>
            <p className={"Text"}>{t('about-me-text-1')}</p>
            <p className={"Text"}>{t('i-am-passionate-about')}<span className={"BoldText"}>{t('computer-science')}</span>{t('the')} <span className={"BoldText"}>{t('programming')}</span>{t('the')} <span className={"BoldText"}>{t('project-management')}</span> {t('i-get-involved')}</p>
            <p className={"Text"}>{t('about-me-text-3')}</p>
        </div>

        <Blank marginTopValue={60} />
        <LogoConception />
        <Blank marginTopValue={140} />
        <Conception />
    </div>
}