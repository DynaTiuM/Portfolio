import './Button.scss'
import {scrollToSection} from "../../../services/scroll";
import {useTranslation} from "react-i18next";


interface ButtonProps {
    section: string;
    className: string;
    text: string
}

export default function Button({section, className, text}: ButtonProps) {

    const { t } = useTranslation();

    const onClick = () => {
        scrollToSection(section, -150);
    }
    return <div className={className} onClick={onClick}><p>{t(text)}</p></div>
}