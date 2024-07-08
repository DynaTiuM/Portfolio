import Java from "../assets/images/programming-languages/java.png";
import CSharp from "../assets/images/programming-languages/csharp.png";
import Cpp from "../assets/images/programming-languages/cpp.png";
import Cl from "../assets/images/programming-languages/c.png";
import Python from "../assets/images/programming-languages/python.png";
import Javascript from "../assets/images/programming-languages/js.png";
import Typescript from "../assets/images/programming-languages/ts.png";
import PHP from "../assets/images/programming-languages/php.png";
import {ProgrammingLanguage} from "../models/ProgrammingLanguage";

export const getProgrammingLanguages = (): ProgrammingLanguage[] => {
    return [
        { src: Java, name: 'Java' },
        { src: CSharp, name: 'C#' },
        { src: Cpp, name: 'C++' },
        { src: Cl, name: 'C' },
        { src: Python, name: 'Python' },
        { src: Javascript, name: 'Javascript' },
        { src: Typescript, name: 'Typescript' },
        { src: PHP, name: 'PHP' },
    ];
}