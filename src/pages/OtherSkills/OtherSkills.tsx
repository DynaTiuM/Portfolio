import Subtitle from "../../components/Subtitle/Subtitle";
import './OtherSkills.css'
import OtherSkillsArray from "../../components/ItemArray/OtherSkillsArray";

export default function OtherSkills() {
    return (
        <div className="GrayBackground2">
            <div className="Content">
                <Subtitle subtitle="Autres compétences" />
            </div>
            <div className="Glassmorphism">
                <OtherSkillsArray />
            </div>
            <div className="PurpleLines">
            <div className="PurpleBackground1"></div>
                <div className="PurpleBackground2"></div>
                <div className="PurpleBackground3"></div>
                <div className="PurpleBackground4"></div>
            </div>
        </div>
    );
}
