
import './Menu.css';
import language from '../../assets/images/anglais.png';

export default function Menu() {
    return <div className={"Menu"}>
        <p>Accueil</p>
        <p>Portfolio</p>
        <p>A propos de moi</p>
        <p>Contact</p>
        <img src={language} alt="language" width={"2.5%"}/>
    </div>;
}