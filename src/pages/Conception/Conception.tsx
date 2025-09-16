import Subtitle from "../../components/Subtitle/Subtitle";
import Sweat from "./Sweat/Sweat";
import Stickers from "./Stickers/Stickers";
import Chair from "./Chair/ChairConception";

import './Conception.css'
import {useTranslation} from "react-i18next";

export default function Conception() {

    const { t } = useTranslation();

    return <>
        <Subtitle subtitle={t('sweat-stickers-conception')} />
        <div className={"FlexRow"}>
            <div className={"StickerSweatFlex"}>
                <Sweat/>
                <Stickers/>
                <Chair/>
            </div>
        </div>
    </>
}