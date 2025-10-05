import Azul from '../assets/images/projects/azul.png';
import Twitturtle from '../assets/images/projects/twitturtle.png';
import Tetris from '../assets/images/projects/tetris.png';
import Unity from '../assets/images/projects/unity.png';
import Pogo from '../assets/images/projects/pogo.png';
import Ludiq from '../assets/images/projects/ludiq.png';
import Portfolio from '../assets/images/projects/portfolio.png';
import Blender from '../assets/images/projects/blender.png';
import Patrolling from '../assets/images/projects/patrolling.png';
import Fracture from '../assets/images/projects/fracture.png';
import Vocaboost from '../assets/images/projects/vocaboost.png';
import {Project} from "../models/Project";

const projects: Project[] = [
    {id: 0, src: Tetris, name: "Tetris"},
    {id: 1, src: Unity, name: "Mini jeux Unity"},
    {id: 2, src: Azul, name: "Azul"},
    {id: 3, src: Twitturtle, name: "Twitturtle"},
    {id: 4, src: Pogo, name: "Pogo"},
    {id: 5, src: Ludiq, name: "Ludiq"},
    {id: 6, src: Portfolio, name: "Portfolio"},
    {id: 7, src: Blender, name: "Blender Scene"},
    {id: 8, src: Patrolling, name: "Patrolling System"},
    {id: 9, src: Fracture, name: "Fracture: Discord App"},
    {id: 10, src: Vocaboost, name: "Vocaboost"},
]

export const getProjects = (): Project[] => {
    return projects;
}

export const getProject = (index: number): Project => {
    for(const project of projects) {
        if(project.id === index) {
            return project
        }
    }
    throw Error('Project could not be found.');
}