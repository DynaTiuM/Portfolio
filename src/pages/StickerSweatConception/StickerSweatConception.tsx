import Subtitle from "../../components/Subtitle/Subtitle";
import Sweat from "./Sweat/Sweat";
import Stickers from "./Stickers/Stickers";

import './StickerSweatConception.css'
import {useTranslation} from "react-i18next";

export default function StickerSweatConception() {

    const { t } = useTranslation();

    return <>
        <Subtitle subtitle={t('sweat-stickers-conception')} />
        <div className={"FlexRow"}>
            <div className={"StickerSweatFlex"}>
                <Sweat/>
                <Stickers/>
            </div>
        </div>
    </>
}