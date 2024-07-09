import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import './ActualLearnings.css'
import Bento from "./Bento/Bento";

export default function ActualLearnings() {
    return<div style = {{backgroundColor: "var(--background-color)"}}>
        <div className={"Titles"}>
            <Title title={"Portfolio"} />
            <Subtitle subtitle={"Mes apprentissages actuels"} />
        </div>

        <div className={"GrayBackground"}>
            <Bento/>
        </div>
    </div>
}