import React from 'react';
import Java from '../../assets/images/programming-languages/java.png';
import CSharp from '../../assets/images/programming-languages/csharp.png';
import Cpp from '../../assets/images/programming-languages/cpp.png';
import Cl from '../../assets/images/programming-languages/c.png';
import Python from '../../assets/images/programming-languages/python.png';
import Javascript from '../../assets/images/programming-languages/js.png';
import Typescript from '../../assets/images/programming-languages/ts.png';
import PHP from '../../assets/images/programming-languages/php.png';
import ItemList from "../ItemList/ItemList";


const languages = [
    { src: Java, alt: 'Java' },
    { src: CSharp, alt: 'C#' },
    { src: Cpp, alt: 'C++' },
    { src: Cl, alt: 'C' },
    { src: Python, alt: 'Python' },
    { src: Javascript, alt: 'Javascript' },
    { src: Typescript, alt: 'Typescript' },
    { src: PHP, alt: 'PHP' },
];

const ProgrammingLanguages = () => {

    return (
        <ItemList items={languages} />
    );
};

export default ProgrammingLanguages;
