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
                    <p>J’ai eu l’opportunité de pouvoir travailler dans l’entreprise Axopen dans le cadre de mon stage
                        d’assistant ingénieur lors de ma quatrième année d’études. Il s’agit d’une entreprise
                        spécialisée dans le développement web et audits...</p>
                </div>
                <InternProject
                    title="Premier projet"
                    description="Il s’agissait d’un projet destiné à mettre en place un programme permettant de générer des schémas SVG représentants l’architecture entre des applications, hébergements, services et en expliquer le fonctionnement à travers des processus ou liaisons..."
                    isExpanded={expandedProject === 1}
                    onClick={() => setExpandedProject(1)}
                />
                <InternProject
                    title="Deuxième projet"
                    description="Il s’agissait d’un projet pour optimiser un site web en utilisant React et TypeScript..."
                    isExpanded={expandedProject === 2}
                    onClick={() => setExpandedProject(2)}
                />
            </div>
        </div>
    );
}