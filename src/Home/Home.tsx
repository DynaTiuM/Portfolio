
import './Home.css';
import Image from '../Images/raphael.png';

export default function Home() {
    return <>
        <div className={"Blank"}>
            <div className={"Flex1"}>
                <div className={"Flex2"}>
                    <h1>Bienvenue sur mon <span className={"Purple"}>portfolio</span></h1>
                    <h2>Je suis un étudiant passionné par l'informatique</h2>
                </div>
                <img src={Image} alt={"Raphaël PERRIN"} width={"20%"}/>
            </div>
        </div>
    </>;
}