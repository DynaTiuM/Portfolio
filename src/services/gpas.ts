import {GPAProps} from "../models/GPA";
import {useTranslation} from "react-i18next";


export const useGPAS = (): GPAProps[] => {
    const { t } = useTranslation();
    return [
        { date: t('autumn-2022'), value: 80, index: 0 },
        { date: t('spring-2023'), value: 88, index: 1 },
        { date: t('spring-2024'), value: 84, index: 2 },
    ];
}

export const useGPA = (index: number): GPAProps => {
    return useGPAS()[index];
}