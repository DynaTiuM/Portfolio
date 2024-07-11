import LinkedIn from '../../assets/images/contact/linkedin.png';
import EMail from '../../assets/images/contact/email.png';
import Title from "../../components/Title/Title";

import './Contact.css'
import Architect from "../../assets/images/backgrounds/architect.svg";
import {useTranslation} from "react-i18next";

export default function Contact() {

    const { t } = useTranslation();

    return <>
        <img className={"Architect"} src={Architect} alt={""}/>
        <div className={"ContactGrayBackground"}>
            <div className={"ContactContainer"}>
                <Title title={t('contact')}/>
                <p>{t('contact-me')}</p>
                <div className={"FlexRow"}>
                    <div className={"ContactFlex"}>
                        <div className={"FlexRow"} style={{gap: "15px"}}>
                            <a href="https://www.linkedin.com/in/rapha%C3%ABl-perrin-5b11a8269" target="_blank"
                               rel="noopener noreferrer">
                                <img className={"ContactImg"} src={LinkedIn} alt="LinkedIn" width={"50px"}/>
                            </a>
                            <p>LinkedIn</p>
                        </div>
                        <div className={"FlexRow"} style={{gap: "15px"}}>
                            <a href={"mailto:raphael.perrin954@gmail.com"} target="_blank" rel="noopener noreferrer">
                                <img className={"ContactImg"} src={EMail} alt="Email" width={"50px"}/>
                            </a>
                            <p>raphael.perrin954@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}