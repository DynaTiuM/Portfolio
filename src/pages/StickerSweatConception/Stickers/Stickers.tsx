import TitanSticker from '../../../assets/images/stickers/sticker_titan.png';
import RocketSticker from '../../../assets/images/stickers/sticker_rocket.png';

import './Stickers.css'
import {useTranslation} from "react-i18next";

export default function Stickers() {

    const { t } = useTranslation();

    return <div className={"FlexColumn"}>
        <p className={"StickersText"}>{t('opportunity')} <span className={"BoldText"}>{t('promotion-office')}</span> {t('stickers-design')}</p>
        <div className={"StickersFlex"}>
            <img className={"StickerImg"} src={TitanSticker} alt="Sticker Géant de fer"/>
            <img className={"StickerImg"} src={RocketSticker} alt="Sticker fusée"/>
        </div>
    </div>
}