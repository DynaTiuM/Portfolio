import {GPAInformationProps} from "../models/GPAInformation";
import {getGPA} from "./gpas";

const gpaInformation = [
    {
        gpa: getGPA(2),
        uvs: [
            {
                name: "ID01",
                description: "Crunchtime - Evenement d'une semaine organisé par l'UTBM",
                credits: 1,
                letter: "C"
            },
            {
                name: "MV50",
                description: "Projet de migration d'un escape game VR en Réalité Augmentée",
                credits: 6,
                letter: "B"
            },
            {
                name: "MV51",
                description: "Géométrie pour l'image",
                credits: 4,
                letter: "B"
            },
            {
                name: "MV52",
                description: "Synthèse d'images et Blender",
                credits: 6,
                letter: "B"
            },
            {
                name: "MV53",
                description: "Interface Utilisateur pour la réalité virtuelle",
                credits: 2,
                letter: "B"
            },
            {
                name: "MV54",
                description: "Rendu d'image et Réalité Virtuelle Augmentée",
                credits: 6,
                letter: "B"
            },
            {
                name: "SL01",
                description: "Suivi linguistique : Allemand",
                credits: 4,
                letter: "A"
            },
            {
                name: "SO01",
                description: "Sociologie du travail",
                credits: 5,
                letter: "A"
            },
        ]
    },
    {
        gpa: getGPA(1),
        uvs: [
            {
                name: "HM40",
                description: "Interface Homme Machine",
                credits: 6,
                letter: "A"
            },
            {
                name: "RS40",
                description: "Réseau et Cybersécurité",
                credits: 6,
                letter: "C"
            },
            {
                name: "SI40",
                description: "Systèmes d'information",
                credits: 6,
                letter: "B"
            },
            {
                name: "WE4A",
                description: "Introduction à la programmation WEB",
                credits: 3,
                letter: "A"
            },
            {
                name: "WE4B",
                description: "Initiation à Unity",
                credits: 3,
                letter: "B"
            },
            {
                name: "ID01",
                description: "Crunchtime - Evenement d'une semaine organisé par l'UTBM",
                credits: 1,
                letter: "A"
            },
            {
                name: "LG03",
                description: "Allemand niveau 3 et certification Goethe Institut",
                credits: 6,
                letter: "A"
            },
            {
                name: "GE06",
                description: "Fondements du marketing",
                credits: 5,
                letter: "A"
            }
        ]
    },
    {
        gpa: getGPA(0),
        uvs: [
            {
                name: "AP4A",
                description: "Programmation Orientée Objet en C++",
                credits: 3,
                letter: "C"
            },
            {
                name: "AP4B",
                description: "Programmation Orientée Objet en Java",
                credits: 3,
                letter: "B"
            },
            {
                name: "IA41",
                description: "Concepts fondamentaux de l'Intelligence Artificielle",
                credits: 6,
                letter: "B"
            },
            {
                name: "IT46",
                description: "Traitement de l'information",
                credits: 6,
                letter: "B"
            },
            {
                name: "PC40",
                description: "Calcul parallèle",
                credits: 6,
                letter: "B"
            },
            {
                name: "LG02",
                description: "Allemand niveau 2",
                credits: 4,
                letter: "A"
            },
            {
                name: "EI03",
                description: "Sécurité internationale et défis mondiaux",
                credits: 5,
                letter: "B"
            }
        ]
    }
];

export const getGpaInformation = (): GPAInformationProps[] => {
    return gpaInformation;
}

export const getNumberOfSemesters = () => {
    return gpaInformation.length;
}