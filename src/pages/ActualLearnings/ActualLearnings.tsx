import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import './ActualLearnings.css'
import Bento from "./Bento/Bento";
import {useTranslation} from "react-i18next";

export default function ActualLearnings() {

    const { t } = useTranslation();

    return<div style = {{backgroundColor: "var(--background-color)"}}>
        <div className={"Titles"}>
            <Title title={t('portfolio')} />
            <Subtitle subtitle={t('actual-learnings')} />
        </div>

        <div className={"GrayBackground"}>
            <Bento/>
        </div>
    </div>
}