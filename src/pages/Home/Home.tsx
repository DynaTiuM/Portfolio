import './Home.css';
import Image from '../../assets/images/raphael.png';
import Button from "./Button/Button";
import Blank from "../../components/Blank/Blank";
import { useTranslation } from "react-i18next";

export default function Home() {

    const { t } = useTranslation();

    return (
        <>
            <Blank marginTopValue={140} />
            <div className="HomeWrapper">
                <div className="HomeContainer">
                    <p className="ChapterI">Chapitre I · Incipit</p>
                    <section className="Home">
                        <div className="HomeContent">
                            <div className="TextBlock">
                                <h1 className="Names">
                                    <span className="Name">Raphaël</span>
                                    <br />
                                    <span className="Surname">Perrin</span>
                                </h1>
                                <h2 className="Subtitle">{t('subtitle')}</h2>
                            </div>
                            <div className="ImageBlock">
                                <img src={Image} alt="Raphaël Perrin" />
                            </div>
                        </div>
                    </section>
                    <Button section={"projects"} text={"see-my-projects"} className={"Button"} />
                </div>
            </div>
            <div className="Divider">
                <span className="DividerSymbol">❧</span>
            </div>
        </>
    );
}