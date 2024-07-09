import LinkedIn from '../../assets/images/contact/linkedin.png';
import EMail from '../../assets/images/contact/email.png';
import Title from "../../components/Title/Title";

import './Contact.css'
import Architect from "../../assets/images/backgrounds/architect.svg";

export default function Contact() {
    return <>
        <img className={"Architect"} src={Architect} alt={""}/>
        <div className={"ContactGrayBackground"}>
            <div className={"ContactContainer"}>
                <Title title={"Contact"}/>
                <p>Contactez moi via LinkedIn ou par e-mail :</p>
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