import React from 'react';
import Angular from '../../assets/images/frameworks/angular.png';
import ReactL from '../../assets/images/frameworks/react.png';
import Laravel from '../../assets/images/frameworks/laravel.png';
import ItemList from "../ItemList/ItemList";


const frameworks = [
    { src: Angular, alt: 'Angular' },
    { src: ReactL, alt: 'React' },
    { src: Laravel, alt: 'Laravel' }
];

const ProgrammingLanguages = () => {

    return (
        <ItemList items={frameworks} />
    );
};

export default ProgrammingLanguages;
