import './Button.css'
import {scrollToSection} from "../../../services/scroll";
import {useTranslation} from "react-i18next";

export default function Button() {

    const { t } = useTranslation();


    const onClick = () => {
        scrollToSection("projects", -150);
    }
    return <div className={"Button"} onClick={onClick}><p>{t('see-my-projects')}</p></div>
}