import {ProjectInformation} from "../models/ProjectInformation";
import {getProject} from "./projects";

import Tetris from '../assets/images/projects/big/tetris_big.png';
import Azul from '../assets/images/projects/big/azul_big.png';
import Ludiq from '../assets/images/projects/big/ludiq_big.png';
import Pogo from '../assets/images/projects/big/pogo_big.png';
import Twitturtle from '../assets/images/projects/big/twitturtle_big.png';
import Unity from '../assets/images/projects/big/unity_big.png';
import Portfolio from '../assets/images/projects/big/portfolio_big.png';
import Blender from '../assets/images/projects/big/blender_big.png';
import Patrolling from '../assets/images/projects/big/patrolling_big.png';
import Fracture from '../assets/images/projects/big/fracture_big.png';
import Vocaboost from '../assets/images/projects/big/vocaboost_big.png';

import {useTranslation} from "react-i18next";

export const useProjectInformation = (index: number): ProjectInformation | null => {

    const { t } = useTranslation();

    const projectInformation: ProjectInformation[] = [
        {
            project: getProject(0),
            introduction: t('tetris-introduction'),
            description: t('tetris-description'),
            languages: [
                "Java"
            ],
            big_image: Tetris
        },
        {
            project: getProject(1),
            introduction: t('unity-introduction'),
            description: t('unity-description'),
            languages: [
                "CS"
            ],
            big_image: Unity
        },
        {
            project: getProject(2),
            introduction: t('azul-introduction'),
            description: t('azul-description'),
            languages: [
                "Java"
            ],
            big_image: Azul,
        },
        {
            project: getProject(3),
            introduction: t('twitturtle-introduction'),
            description: t('twitturtle-description'),
            languages: [
                "PHP", "CSS", "JS"
            ],
            big_image: Twitturtle
        },
        {
            project: getProject(4),
            introduction: t('pogo-introduction'),
            description: t('pogo-description'),
            languages: [
                "Python"
            ],
            big_image: Pogo
        },
        {
            project: getProject(5),
            introduction: t('ludiq-introduction'),
            description: t('ludiq-description'),
            languages: [
                "TS", "PHP", "Angular", "CSS"
            ],
            big_image: Ludiq
        },
        {
            project: getProject(6),
            introduction: t('portfolio-introduction'),
            description: t('portfolio-description'),
            languages: [
                "TS", "React", "CSS"
            ],
            big_image: Portfolio
        },
        {
            project: getProject(7),
            introduction: t('blender-introduction'),
            description: t('blender-description'),
            languages: [
                "Blender"
            ],
            big_image: Blender
        },
        {
            project: getProject(8),
            introduction: t('patrolling-introduction'),
            description: t('patrolling-description'),
            languages: [
                "Python"
            ],
            big_image: Patrolling
        },
        {
            project: getProject(9),
            introduction: t('fracture-introduction'),
            description: t('fracture-description'),
            languages: [
                "TS", "React", "MongoDB", "Mongoose"
            ],
            big_image: Fracture
        },
        {
            project: getProject(10),
            introduction: t('vocaboost-introduction'),
            description: t('vocaboost-description'),
            languages: [
                "Java", "Kotlin", "Spring-Boot", "Compose"
            ],
            big_image: Vocaboost
        },
    ];

    for(const project of projectInformation) {
        if(project.project.id === index) {
            return project;
        }
    }
    return null;
}