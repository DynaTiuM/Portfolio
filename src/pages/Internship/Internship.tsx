import { useState } from 'react';
import './Internship.css';
import Axopen from '../../assets/images/axopen/axopen.png';
import X from '../../assets/images/axopen/x.svg';
import InternProject from "../../components/InternProject/InternProject";

export default function Internship() {
    const [expandedProject, setExpandedProject] = useState<number>(1);

    return (
        <div>
            <h4>Stage</h4>
            <div className="InternshipContainer">
                <img src={X} className="AxopenX" alt="Background X"/>
                <div className="LeftContainer">
                    <img src={Axopen} className="AxopenImg" alt="Axopen"/>
                    <p>Septembre 2023 - Février 2024</p>
                    <p className={"AxopenText"}>J’ai eu l’opportunité de pouvoir travailler dans l’entreprise Axopen dans le cadre de mon stage d’assistant ingénieur lors de ma quatrième année d’études. Il s’agit d’une entreprise spécialisée dans le développement web et audits. Ce stage m’a permis de développer mes compétences dans le domaine du développement web et de m’immerger dans l’environnement professionnel tout en collaborant au sein d’une équipe.</p>
                </div>
                <InternProject
                    title="Premier projet - Schémas SI"
                    description="Il s’agissait d’un projet destiné à mettre en place un programme permettant de générer des schémas SVG représentants l’architecture entre des applications, hébergements, services et en expliquer le fonctionnement à travers des processus ou liaisons. Ce projet m’a permis de développer mes compétences avec le langage de programmation C# ainsi que sur le framework .NET. Il m’a également permis de m’initier à GitLab, une plateforme de développement et d’hébergement basée sur Git."
                    isExpanded={expandedProject === 1}
                    onClick={() => setExpandedProject(1)}
                />
                <InternProject
                    title="Deuxième projet - Portail RH"
                    description="Il s’agissait de la mise en place d’un portail à destination d’un client pour lui faciliter la vérification de fichiers EXCEL envoyés par des représentants de pays. Ce projet m’a permis de développer mes compétences en travail d’équipe, d’appréhender davantage aux frameworks comme Laravel (dont le langage de programmation est PHP) du côté du back-end ou React pour le front-end."
                    isExpanded={expandedProject === 2}
                    onClick={() => setExpandedProject(2)}
                />
            </div>
        </div>
    );
}