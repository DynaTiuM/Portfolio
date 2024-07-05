import Subtitle from "../../Subtitle/Subtitle";
import ProgrammingLanguages from "../../ProgrammingLanguages/ProgrammingLanguages";
import Blank from "../../Blank/Blank";
import './Skills.css'
import Frameworks from "../../Frameworks/Frameworks";

export default function Skills() {
    return <>
        <Subtitle subtitle={"Langages de programmation"}/>
        <div className="BackgroundLine"></div>
        <ProgrammingLanguages/>
        <Blank marginTopValue={80}/>
        <Subtitle subtitle={"Frameworks et librairies"}/>
        <Frameworks />
    </>
}