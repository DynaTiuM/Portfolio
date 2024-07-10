import {ProjectInformation} from "../models/ProjectInformation";
import {getProject} from "./projects";

import Tetris from '../assets/images/projects/big/tetris_big.png';
import Azul from '../assets/images/projects/big/azul_big.png';
import Ludiq from '../assets/images/projects/big/ludiq_big.png';
import Pogo from '../assets/images/projects/big/pogo_big.png';
import Twitturtle from '../assets/images/projects/big/twitturtle_big.png';
import Unity from '../assets/images/projects/big/unity_big.png';

const projectInformation: ProjectInformation[] = [
    {
        project: getProject(2),
        introduction: "Tetris est un jeu d'arcade classique où le but est d'empiler des pièces géométriques tombantes pour former des lignes horizontales complètes et marquer des points.",
        description: "Le développement du projet Tetris en utilisant Swing en Java a permis de mettre en pratique pour la première fois des concepts liés à la programmation orientée objet.\n" +
            "\n" +
            "Ce projet a également été une occasion de renforcer les compétences en gestion de fichiers properties pour offrir des options multilingues, ainsi qu'en intégration de musiques pour améliorer l'expérience utilisateur.\n" +
            "\n" +
            "Cette expérience a conduit à une compréhension approfondie de l'architecture et des techniques de programmation, préparant ainsi à relever des défis similaires à l'avenir et à améliorer les compétences en développement logiciel.",
        languages: [
            "Java"
        ],
        big_image: Tetris
    },
    {
        project: getProject(0),
        introduction: "Azul est un jeu stratégique pour 2 à 4 joueurs qui décorent un palais portugais avec des carreaux colorés. Le but est de marquer des points en créant des motifs sur un plateau personnel, en choisissant et plaçant astucieusement les tuiles pour maximiser les scores et minimiser les pénalités.",
        description: "L'architecture MVC (Modèle, Vue, Contrôleur) a été adoptée pour simplifier la répartition des responsabilités et garantir un programme robuste, facilement modifiable pour de futures adaptations. Afin d'optimiser la productivité et de fournir des repères clairs, plusieurs diagrammes UML ont été élaborés pour déterminer les exigences et les besoins du projet. Ensuite, divers diagrammes de classes ont été conçus pour établir l'architecture idéale avant d'entamer la phase de codage.\n" +
            "\n" +
            "Ce projet a représenté une opportunité précieuse pour renforcer les compétences en architecture logicielle, en enrichissant la connaissance du développement au-delà de la simple programmation.",
        languages: [
            "Java"
        ],
        big_image: Azul,
    },
    {
        project: getProject(1),
        introduction: "Jeu de mot entre Twitter et Turtle : Site internet dérivé du célèbre réseau social, spécialisé pour les maitres d'animaux avec des fonctionnalités supplémentaires, telles que :\n\n" +
            "➜ La possibilité d'ajouter un animal sur son profil.\n" +
            "➜ Taguer des animaux sur un message, y ajouter une localisation et un type de message (événément, conseil, sauvetage)\n" +
            "➜ Adopter un animal grâce à un système de demande et notification\n" +
            "➜ Et encore plein d'autres fonctionnalités",
        description: "Ce projet a représenté une opportunité exceptionnelle pour le développement de compétences dans divers domaines. Il a permis l'initiation à JavaScript et l'exploration de différentes API, notamment celles proposées par Google Cloud.\n\n En outre, de nouvelles compétences ont été acquises en envoyant des emails grâce à la bibliothèque PHPMailer et en utilisant les services de l'entreprise Sendinblue.",
        languages: [
            "PHP", "CSS", "JS"
        ],
        big_image: Twitturtle
    },
]

export const getProjectInformation = (index: number): ProjectInformation | null => {
    for(const project of projectInformation) {
        if(project.project.id === index) {
            return project;
        }
    }
    return null;
}