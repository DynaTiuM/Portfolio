import {GPAInformationProps} from "../models/GPAInformation";
import {getGPA} from "./gpas";
import {useTranslation} from "react-i18next";

export const useGpaInformation = (): GPAInformationProps[] => {

    const { t } = useTranslation();

    return [
        {
            gpa: getGPA(2),
            uvs: [
                {
                    name: "ID01",
                    description: t('crunchtime'),
                    credits: 1,
                    letter: "C"
                },
                {
                    name: "MV50",
                    description: t('mv50'),
                    credits: 6,
                    letter: "B"
                },
                {
                    name: "MV51",
                    description: t('mv51'),
                    credits: 4,
                    letter: "B"
                },
                {
                    name: "MV52",
                    description: t('mv52'),
                    credits: 6,
                    letter: "B"
                },
                {
                    name: "MV53",
                    description: t('mv53'),
                    credits: 2,
                    letter: "B"
                },
                {
                    name: "MV54",
                    description: t('mv54'),
                    credits: 6,
                    letter: "B"
                },
                {
                    name: "SL01",
                    description: t('sl01'),
                    credits: 4,
                    letter: "A"
                },
                {
                    name: "SO01",
                    description: t('so01'),
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
                    description: t('hm40'),
                    credits: 6,
                    letter: "A"
                },
                {
                    name: "RS40",
                    description: t('rs40'),
                    credits: 6,
                    letter: "C"
                },
                {
                    name: "SI40",
                    description: t('si40'),
                    credits: 6,
                    letter: "B"
                },
                {
                    name: "WE4A",
                    description: t('we4a'),
                    credits: 3,
                    letter: "A"
                },
                {
                    name: "WE4B",
                    description: t('we4b'),
                    credits: 3,
                    letter: "B"
                },
                {
                    name: "ID01",
                    description: t('crunchtime'),
                    credits: 1,
                    letter: "A"
                },
                {
                    name: "LG03",
                    description: t('lg03'),
                    credits: 6,
                    letter: "A"
                },
                {
                    name: "GE06",
                    description: t('ge06'),
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
                    description: t('ap4a'),
                    credits: 3,
                    letter: "C"
                },
                {
                    name: "AP4B",
                    description: t('ap4b'),
                    credits: 3,
                    letter: "B"
                },
                {
                    name: "IA41",
                    description: t('ia41'),
                    credits: 6,
                    letter: "B"
                },
                {
                    name: "IT46",
                    description: t('it46'),
                    credits: 6,
                    letter: "B"
                },
                {
                    name: "PC40",
                    description: t('pc40'),
                    credits: 6,
                    letter: "B"
                },
                {
                    name: "LG02",
                    description: t('lg02'),
                    credits: 4,
                    letter: "A"
                },
                {
                    name: "EI03",
                    description: t('ei03'),
                    credits: 5,
                    letter: "B"
                }
            ]
        }
    ];
}

export const useNumberOfSemesters = () => {
    return useGpaInformation().length;
}