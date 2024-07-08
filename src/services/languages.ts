import {Language} from "../models/Card/Card";
import Francais from "../assets/images/languages/fr.jpg";
import Anglais from "../assets/images/languages/en.jpg";
import Allemand from "../assets/images/languages/de.jpg";
import Norvegien from "../assets/images/languages/no.jpg";
import Italien from "../assets/images/languages/it.jpg";


export const getLanguages = () : Language[] => {
    return [
        {
            language_name: "Français",
            description: "Langue maternelle",
            image: Francais,
            size_y: 370,
            size_x: 270
        },
        {
            language_name: "Anglais",
            description: "B2 - Compétences de communication professionnelle",
            image: Anglais,
            size_y: 402,
            size_x: 270
        },
        {
            language_name: "Allemand",
            description: "B1 - Compétences de communication professionnelle limitée",
            image: Allemand,
            size_y: 451,
            size_x: 270
        },
        {
            language_name: "Norvégien",
            description: "A1 - Débutant",
            image: Norvegien,
            size_y: 381,
            size_x: 270
        },
        {
            language_name: "Italien",
            description: "A1 - Débutant",
            image: Italien,
            size_y: 404,
            size_x: 270
        },
    ];
}