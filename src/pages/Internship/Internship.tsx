
import {useTranslation} from "react-i18next";

import Axopen from '../../assets/images/axopen/axopen.png';
import X from '../../assets/images/axopen/x.svg';

import './Internship.css';
import InternProject from "../../components/InternProject/InternProject";

export default function Internship() {

    const { t } = useTranslation();

    return <>
        <h4>
            {t('internship')}
        </h4>
        <div className={"InternshipContainer"}>
            <div className={"LeftContainer"}>
                <img src={Axopen} className={"AxopenImg"}/>
                <p>Septembre 2023 - Février 2024</p>
                <p>J’ai eu l’opportunité de pouvoir travailler dans l’entreprise Axopen dans le cadre de mon stage d’assistant ingénieur lors de ma quatrième année d’études. Il s’agit d’une entreprise spécialisée dans le développement web et audits. Ce stage m’a permis de développer mes compétences dans le domaine du développement web et de m’immerger dans l’environnement professionnel tout en collaborant au sein d’une équipe.</p>
            </div>
            <InternProject title={"Premier projet"} description={"Il s’agissait d’un projet destiné à mettre en place un programme permettant de générer des schémas SVG représentants l’architecture entre des applications, hébergements, services et en expliquer le fonctionnement à travers des processus ou liaisons. Ce projet m’a permis de développer mes compétences avec le langage de programmation C# ainsi que sur le framework .NET. Il m’a également permis de m’initier à GitLab, une plateforme de développement et d’hébergement basée sur Git."}/>
            <InternProject title={"Deuxieme projet"} description={""} />
        </div>
    </>
}