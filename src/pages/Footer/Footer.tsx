import './Footer.css'
import {useTranslation} from "react-i18next";

export default function Footer() {

    const { t } = useTranslation();

    return <div className={"FooterBackground"}>
        <p className={"Rights"}>{t('all-rights-reserved')}</p>
        <p className={"FooterText"}>{t('website-realised')}</p>
    </div>
}