import Subtitle from "../../components/Subtitle/Subtitle";
import Card from "./Card/Card";

import './Languages.css'
import {getLanguages} from "../../services/languages";

export default function Languages() {
    return <>
        <Subtitle subtitle={"Langues"}/>
        <div className = "LanguagesScroll">
            <div style={{display: 'flex', gap: 40, justifyContent: 'center', height: 480}}>
                {getLanguages().map((card, index) => (
                    <Card
                        key={index}
                        language_name={card.language_name}
                        description={card.description}
                        image={card.image}
                        size_y={card.size_y}
                        size_x={card.size_x}
                        plus_description={card.plus_description}
                    />
                ))}
            </div>
        </div>
    </>
}