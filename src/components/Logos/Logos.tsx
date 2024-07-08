import {getLogos} from "../../services/logos";
import Logo from "./Logo/LogoComponent";

import './Logos.css'
import Blank from "../Blank/Blank";

export default function Logos() {
    return <>
        <p className={"Text"}>J'ai conçu plusieurs logos avec Adobe Illustrator pour divers clubs et projets étudiants de l'UTBM. Ces logos ont servi à promouvoir et représenter les clubs et projets concernés.</p>
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