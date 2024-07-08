import {Logo} from "../models/Logo";

import UtBarista from '../assets/images/logos/utbarista.png';
import OutBM from '../assets/images/logos/outbm.png';
import UtRC from '../assets/images/logos/utrc.png';
import CoustUT from '../assets/images/logos/cousut.png';
import Eventum from '../assets/images/logos/eventum.png';

export const getLogos = (): Logo[] => {
    return [
        { src: UtBarista, name: "UT Barista", description: "Club de l'UTBM responsable de l'approvisionnement et de l'entretien des machines à café dans les espaces de vie."},
        { src: OutBM, name: "OutBM", description: "Club LGBT de l'UTBM." },
        { src: UtRC, name: "UT RC", description: "Club de l'UTBM dédié aux passionnés de véhicules et dispositifs contrôlés à distance via des signaux radio, tels que des voitures, drones, etc." },
        { src: CoustUT, name: "Coust UT", description: "Club de couture, crochet de l'UTBM." },
        { src: Eventum, name: "Eventum", description: "Site internet créé dans le cadre d'un projet de l'UTBM visant à rassembler les étudiants pour des sorties, soirées et autres événements." },
    ]
}