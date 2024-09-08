
import {useTranslation} from "react-i18next";

export default function Internship() {

    const { t } = useTranslation();

    return <h4>
        {t('internship')}
    </h4>
}