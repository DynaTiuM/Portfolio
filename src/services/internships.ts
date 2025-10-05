import { Internship } from "../models/Internship";

import X from '../assets/images/axopen/x.svg';
import BoschLogo from '../assets/images/bosch/logo.png';

import Axopen from '../assets/images/axopen/axopen.png';
import Bosch from '../assets/images/bosch/bosch.png';

export const getInternships = () : Internship[] => {
    return [
        {
            id: 0,
            image: Bosch,
            period: 'bosch-period',
            info: 'bosch-info',
            background_symbol: BoschLogo,
            internProjects: [
                {
                    title: 'bosch-project-one-title',
                    description: 'bosch-project-one'
                },
                 {
                    title: 'bosch-project-two-title',
                    description: 'bosch-project-two'
                }
            ]
        },
        {
            id: 1,
            image: Axopen,
            period: 'axopen-period',
            info: 'axopen-info',
            background_symbol: X,
            internProjects: [
                {
                    title: 'axopen-project-one-title',
                    description: 'axopen-project-one'
                },
                 {
                    title: 'axopen-project-two-title',
                    description: 'axopen-project-two'
                }
            ]
        }
    ]
}