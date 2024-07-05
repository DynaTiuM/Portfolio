import React from 'react';
import Angular from '../../assets/images/frameworks/Angular_full_color_logo.svg.png';
import ReactL from '../../assets/images/frameworks/React-icon.svg.png';
import Laravel from '../../assets/images/frameworks/800px-Laravel.svg.png';
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
