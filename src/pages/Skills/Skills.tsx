import Subtitle from "../../components/Subtitle/Subtitle";
import ProgrammingLanguages from "../../components/ProgrammingLanguages/ProgrammingLanguages";
import Blank from "../../components/Blank/Blank";
import './Skills.css'
import Frameworks from "../../components/Frameworks/Frameworks";

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