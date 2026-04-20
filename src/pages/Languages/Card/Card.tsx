import {useState} from 'react';
import './Card.css';
import { Language } from '../../../models/Language';
import Plus from "../../../components/Plus/Plus";
import PopOver from "../../../components/PopOver/PopOver";

export default function Card(language: Language) {
    const [popOver, setPopOver] = useState<{ visible: boolean, text: string, x: number, y: number }>({ visible: false, text: '', x: 0, y: 0 });

    return (
        <div className="CardContainer" style={{ width: language.size_x , height: language.size_y }}>
            <img src={language.image} alt={language.language_name} className="CardImage" style={{ width: language.size_x, height: language.size_y }} />
            <div className="CardOverlay">
                <h2 className="CardTitle">{language.language_name}</h2>
                <p className="CardDescription" style={{ marginBottom: language.plus_description ? 40 : 65 }}>{language.description}</p>
                {language.plus_description && (
                    <div className="FlexRow">
                        <Plus description={language.plus_description} setPopOver={setPopOver} />
                    </div>
                )}
            </div>
            {popOver.visible && popOver.text && (
                <PopOver text={popOver.text} min_width={"145px"} top={`${(language.size_y - 55).toString()}px`} is_white={true}/>
            )}
        </div>
    );
}
