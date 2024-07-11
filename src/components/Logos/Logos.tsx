import {getLogos} from "../../services/logos";
import Logo from "./Logo/LogoComponent";

import './Logos.css'
import Blank from "../Blank/Blank";
import {useTranslation} from "react-i18next";

export default function Logos() {

    const { t } = useTranslation();

    return <>
        <p className={"Text"}>{t('logo-conception-text')}</p>
        <Blank marginTopValue={40} />
        <div className={"FlexRow"}>
            <div className={"LogoContainer"}>
                {getLogos().map((logo, index) => (
                    <Logo src={logo.src} name={logo.name} description={logo.description} key={index} />
                ))}
            </div>
        </div>
    </>

}