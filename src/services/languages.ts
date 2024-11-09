import {Language} from "../models/Language";
import Francais from "../assets/images/languages/fr.jpg";
import Anglais from "../assets/images/languages/en.jpg";
import Allemand from "../assets/images/languages/de.jpg";
import Norvegien from "../assets/images/languages/no.jpg";
import Italien from "../assets/images/languages/it.jpg";
import {useTranslation} from "react-i18next";


export const useLanguages = () : Language[] => {
    const { t } = useTranslation();

    return [
        {
            language_name: t('french'),
            description: t('mother-tongue'),
            image: Francais,
            size_y: 370,
            size_x: 270
        },
        {
            language_name: t('english'),
            description: t('B2-skill'),
            image: Anglais,
            size_y: 402,
            size_x: 270,
            plus_description: t('linguaskill')
        },
        {
            language_name: t('german'),
            description: t('B1-skill'),
            image: Allemand,
            size_y: 451,
            size_x: 270,
            plus_description: t('goethe')
        },
        {
            language_name: t('norwegian'),
            description: t('A1-beginner'),
            image: Norvegien,
            size_y: 381,
            size_x: 270,
            plus_description: t('personal-learning')
        },
        {
            language_name: t('italian'),
            description: t('A1-beginner'),
            image: Italien,
            size_y: 404,
            size_x: 270,
            plus_description: t('personal-learning-semester')
        },
    ];
}