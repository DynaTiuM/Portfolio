import Title from "../../Title/Title";
import Subtitle from "../../Subtitle/Subtitle";

import './AboutMe.css'
import Blank from "../../Blank/Blank";
import LogoConception from "../LogoConception/LogoConception";

export default function AboutMe() {
    return <>
        <Title title={"A propos de moi"} />
        <Blank marginTopValue={40} />
        <div className={"FlexColumn"} style={{gap: "15px"}}>
            <p className={"Text"}>Je m'appelle Raphaël PERRIN. Je suis actuellement en spécialité informatique en 4eme
                année à l'Université de Technologie de Belfort-Montbéliard (UTBM).</p>
            <p className={"Text"}>Je suis passionné par l'<span className={"BoldText"}>informatique</span>, la <span className={"BoldText"}>programmation</span>, la <span className={"BoldText"}>gestion de projets</span> et je m'investis beaucoup
                dans mon travail.</p>
            <p className={"Text"}>Je suis également passionné par le visionnage de films et la lecture de livres en allemand, tout en
                appréciant les sorties entre amis et les rencontres avec de nouvelles personnes.</p>

        </div>

        <Blank marginTopValue={60} />
        <LogoConception />

    </>
}