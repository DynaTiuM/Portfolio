import './Button.css'
import {scrollToSection} from "../../../services/scroll";

export default function Button() {

    const onClick = () => {
        scrollToSection("projects", -150);
    }
    return <div className={"Button"} onClick={onClick}><p>Voir mes projets</p></div>
}