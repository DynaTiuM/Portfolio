import Subtitle from "../../components/Subtitle/Subtitle";
import Card from "./Card/Card";

import './Languages.css'
import {useLanguages} from "../../services/languages";
import {useTranslation} from "react-i18next";

export default function Languages() {

    const { t } = useTranslation();

    return <>
        <Subtitle subtitle={t('languages')}/>
        <div className = "LanguagesScroll">
            <div style={{display: 'flex', gap: 40, justifyContent: 'center', height: 520}}>
                {useLanguages().map((card, index) => (
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