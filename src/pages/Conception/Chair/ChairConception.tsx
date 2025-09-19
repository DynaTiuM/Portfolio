import { useTranslation } from "react-i18next";
import './ChairConception.css'
import ChairImg from '../../../assets/images/chair/chair.png';

export default function Chair() {
    
    const { t } = useTranslation();

    return <div className={"FlexColumn"} style={{gap: "15px"}}>
            <p className={"Text"}>{t('chair')}</p>
            <img className={"ChairImg"} src={ChairImg} alt="Chair"/>
        </div>

}