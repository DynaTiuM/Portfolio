import SweatImg from '../../../assets/images/sweat/sweat.jpg';
import './Sweat.css'
import {useTranslation} from "react-i18next";

export default function Sweat() {

    const { t } = useTranslation();

    return <div className={"FlexColumn"} style = {{gap: 20}}>
        <p className={"SweatText"}>{t('designed')} <span className={"BoldText"}>{t('unique-sweat')}</span> {t('group')}</p>
        <p className={"SweatText"}>{t('sweat-conception-text-2')}</p>
        <img className={"SweatImg"} src={SweatImg} alt = "Sweat" />
    </div>
}