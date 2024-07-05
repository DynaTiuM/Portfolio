import './Home.css';
import Image from '../../assets/Images/raphael.png';
import Button from "./Button/Button";

export default function Home() {
    return (
        <>
            <div className="Background"></div>
            <div className="Blank">
                <div className="Flex1">
                    <div className="Flex2">
                        <h1>Bienvenue sur mon <span className="Purple">portfolio</span></h1>
                        <h2>Je suis un étudiant passionné par l'informatique</h2>
                        <div className="ButtonContainer">
                            <Button />
                        </div>
                    </div>
                    <img src={Image} alt="Raphaël PERRIN" width="20%" />
                </div>
            </div>
        </>
    );
}
