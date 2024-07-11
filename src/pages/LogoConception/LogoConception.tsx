import Logos from "../../components/Logos/Logos";
import Subtitle from "../../components/Subtitle/Subtitle";
import {useTranslation} from "react-i18next";

export default function LogoConception() {

    const { t } = useTranslation();

    return <>
        <Subtitle subtitle={t('logo-conception')}/>
        <Logos />
    </>
}