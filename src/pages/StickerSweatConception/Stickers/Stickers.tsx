import TitanSticker from '../../../assets/images/stickers/sticker_titan.png';
import RocketSticker from '../../../assets/images/stickers/sticker_rocket.png';

import './Stickers.css'

export default function Stickers() {
    return <div className={"FlexColumn"}>
        <p className={"StickersText"}>J'ai eu l'opportunité de collaborer avec le <span className={"BoldText"}>bureau de promotion</span> pour créer des designs de stickers qui seront distribués à un grand nombre d'étudiants.</p>
        <img className={"StickerImg"} src={TitanSticker} alt="Sticker Géant de fer"/>
        <img className={"StickerImg"} src={RocketSticker} alt="Sticker fusée"/>
    </div>
}