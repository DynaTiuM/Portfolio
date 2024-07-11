import {ProjectInformation} from "../models/ProjectInformation";
import {getProject} from "./projects";

import Tetris from '../assets/images/projects/big/tetris_big.png';
import Azul from '../assets/images/projects/big/azul_big.png';
import Ludiq from '../assets/images/projects/big/ludiq_big.png';
import Pogo from '../assets/images/projects/big/pogo_big.png';
import Twitturtle from '../assets/images/projects/big/twitturtle_big.png';
import Unity from '../assets/images/projects/big/unity_big.png';
import {useTranslation} from "react-i18next";

export const useProjectInformation = (index: number): ProjectInformation | null => {

    const { t } = useTranslation();

    const projectInformation: ProjectInformation[] = [
        {
            project: getProject(2),
            introduction: t('tetris_introduction'),
            description: t('tetris_description'),
            languages: [
                "Java"
            ],
            big_image: Tetris
        },
        {
            project: getProject(0),
            introduction: t('azul_introduction'),
            description: t('azul_description'),
            languages: [
                "Java"
            ],
            big_image: Azul,
        },
        {
            project: getProject(1),
            introduction: t('twitturtle_introduction'),
            description: t('twitturtle_description'),
            languages: [
                "PHP", "CSS", "JS"
            ],
            big_image: Twitturtle
        },
        {
            project: getProject(4),
            introduction: t('pogo_introduction'),
            description: t('pogo_description'),
            languages: [
                "Python"
            ],
            big_image: Pogo
        },
        {
            project: getProject(3),
            introduction: t('unity_introduction'),
            description: t('unity_description'),
            languages: [
                "CS"
            ],
            big_image: Unity
        },
        {
            project: getProject(5),
            introduction: t('ludiq_introduction'),
            description: t('ludiq_description'),
            languages: [
                "TS", "PHP"
            ],
            big_image: Ludiq
        },
    ];

    for(const project of projectInformation) {
        if(project.project.id === index) {
            return project;
        }
    }
    return null;
}