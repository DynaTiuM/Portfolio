import {Language} from "../models/Language";
import French from "../assets/images/languages/fr.jpg";
import English from "../assets/images/languages/en.jpg";
import German from "../assets/images/languages/de.jpg";
import Norwegian from "../assets/images/languages/no.jpg";
import Italian from "../assets/images/languages/it.jpg";
import Spanish from "../assets/images/languages/es.jpg";
import {useTranslation} from "react-i18next";


export const useLanguages = () : Language[] => {
    const { t } = useTranslation();

    return [
        {
            language_name: t('french'),
            description: t('mother-tongue'),
            image: French,
            size_y: 370,
            size_x: 270
        },
        {
            language_name: t('english'),
            description: t('C1-skill'),
            image: English,
            size_y: 402,
            size_x: 270,
            plus_description: t('linguaskill')
        },
        {
            language_name: t('german'),
            description: t('B2-skill'),
            image: German,
            size_y: 451,
            size_x: 270,
            plus_description: t('goethe')
        },
        {
            language_name: t('norwegian'),
            description: t('A2-skill'),
            image: Norwegian,
            size_y: 381,
            size_x: 270,
            plus_description: t('personal-learning')
        },
        {
            language_name: t('italian'),
            description: t('A1-beginner'),
            image: Italian,
            size_y: 404,
            size_x: 270,
            plus_description: t('personal-learning-semester')
        },
        {
            language_name: t('spanish'),
            description: t('A1-beginner'),
            image: Spanish,
            size_y: 360,
            size_x: 270,
            plus_description: t('personal-learning')
        }
    ];
}