import './Menu.css';
import language from '../../assets/images/anglais.png';
import {scrollToSection} from "../../services/scroll";

export default function Menu() {
    return (
        <div className="Menu">
            <p className={"Tab"} onClick={() => scrollToSection('home', -200)}>Accueil</p>
            <p className={"Tab"} onClick={() => scrollToSection('actualLearnings', 0)}>Portfolio</p>
            <p className={"Tab"} onClick={() => scrollToSection('aboutMe', -150)}>A propos de moi</p>
            <p className={"Tab"} onClick={() => scrollToSection('contact', 0)}>Contact</p>
            <img src={language} alt="language" width="2.5%" />
        </div>
    );
}
