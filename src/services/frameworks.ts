import Angular from "../assets/images/frameworks/angular.png";
import ReactL from "../assets/images/frameworks/react.png";
import Laravel from "../assets/images/frameworks/laravel.png";
import Cypress from "../assets/images/frameworks/cypress.png";
import {Framework} from "../models/Framework";

export const getFrameworks = (): Framework[] => {
    return [
        { src: Angular, name: 'Angular' },
        { src: ReactL, name: 'React' },
        { src: Laravel, name: 'Laravel' },
        { src: Cypress, name: 'Cypress' }
    ];
}