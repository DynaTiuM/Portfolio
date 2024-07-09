import {GPAProps} from "../models/GPA";

export const getGPAS = (): GPAProps[] => {
    return [
        { date: 'Automne 2022', value: 80, index: 0 },
        { date: 'Printemps 2023', value: 88, index: 1 },
        { date: 'Printemps 2024', value: 84, index: 2 },
    ];
}