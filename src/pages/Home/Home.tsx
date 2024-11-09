import './Home.css';
import Image from '../../assets/images/raphael.png';
import Button from "./Button/Button";
import Blank from "../../components/Blank/Blank";
import {useTranslation} from "react-i18next";

export default function Home() {

    const { t } = useTranslation();

    return (
        <>
            <div className="Background"></div>
            <Blank marginTopValue={200}/>
            <div className="Flex1">
                <div className="Flex2">
                    <h1>{t('welcome-to')} <span className="Purple">{t('portfolio-min')}</span></h1>
                    <h2>{t('subtitle')}</h2>
                    <div className="ButtonContainer">
                        <Button/>
                    </div>
                </div>
                <img src={Image} alt="Raphaël PERRIN" className="ProfileImage"/>
            </div>

            <div className={"Gradient"}/>
        </>
    );
}
