import Azul from '../assets/images/projects/azul.png';
import Twitturtle from '../assets/images/projects/twitturtle.png';
import Tetris from '../assets/images/projects/tetris.png';
import Unity from '../assets/images/projects/unity.png';
import Pogo from '../assets/images/projects/pogo.png';
import Ludiq from '../assets/images/projects/ludiq.png';
import {Project} from "../models/Project";

const projects: Project[] = [
    {id: 0, src: Azul, name: "Azul"},
    {id: 1, src: Twitturtle, name: "Twitturtle"},
    {id: 2, src: Tetris, name: "Tetris"},
    {id: 3, src: Unity, name: "Mini jeux Unity"},
    {id: 4, src: Pogo, name: "Pogo"},
    {id: 5, src: Ludiq, name: "Ludiq"}
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