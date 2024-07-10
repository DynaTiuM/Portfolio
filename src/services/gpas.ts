import {GPAProps} from "../models/GPA";

const gpas = [
    { date: 'Automne 2022', value: 80, index: 0 },
    { date: 'Printemps 2023', value: 88, index: 1 },
    { date: 'Printemps 2024', value: 84, index: 2 },
];

export const getGPAS = (): GPAProps[] => {
    return gpas;
}

export const getGPA = (index: number): GPAProps => {
    return gpas[index];
}