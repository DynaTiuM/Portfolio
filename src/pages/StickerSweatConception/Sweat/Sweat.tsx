import SweatImg from '../../../assets/images/sweat/sweat.jpg';
import './Sweat.css'

export default function Sweat() {
    return <div className={"FlexColumn"} style = {{gap: 20}}>
        <p className={"SweatText"}>J'ai conçu un <span className={"BoldText"}>sweatshirt unique</span> pour un groupe de 16 personnes. <br/><br/>Après consultation, nous avons choisi la broderie pour l'impression. Nous avons ensuite collaboré pour créer le design en tenant compte des attentes et suggestions du groupe. Pour choisir la couleur du sweat, nous avons utilisé un vote à jugement majoritaire afin de respecter les préférences de chacun.</p>
        <img className={"SweatImg"} src={SweatImg} alt = "Sweat" />
    </div>
}