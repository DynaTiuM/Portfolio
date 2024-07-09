import Subtitle from "../../components/Subtitle/Subtitle";
import Sweat from "./Sweat/Sweat";
import Stickers from "./Stickers/Stickers";

import './StickerSweatConception.css'

export default function StickerSweatConception() {
    return <>
        <Subtitle subtitle={"Conception de sweat et stickers"} />
        <div className={"FlexRow"}>
            <div className={"StickerSweatFlex"}>
                <Sweat/>
                <Stickers/>
            </div>
        </div>
    </>
}