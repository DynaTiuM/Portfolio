import React, {useState} from 'react';
import './Card.css';
import { Language } from '../../../models/Language';
import Plus from "../../../components/Plus/Plus";
import PopOver from "../../../components/PopOver/PopOver";

export default function Card({ language_name, description, image, size_y, size_x, plus_description }: Language) {
    const [popOver, setPopOver] = useState<{ visible: boolean, text: string, x: number, y: number }>({ visible: false, text: '', x: 0, y: 0 });

    return (
        <div className="CardContainer" style={{ width: size_x , height: size_y }}>
            <img src={image} alt={language_name} className="CardImage" style={{ width: size_x, height: size_y }} />
            <div className="CardOverlay">
                <h2 className="CardTitle">{language_name}</h2>
                <p className="CardDescription" style={{ marginBottom: plus_description ? 40 : 65 }}>{description}</p>
                {plus_description && (
                    <div className="FlexRow">
                        <Plus description={plus_description} setPopOver={setPopOver} />
                    </div>
                )}
            </div>
            {popOver.visible && popOver.text && (
                <PopOver text={popOver.text} min_width={"145px"} top={`${(size_y - 55).toString()}px`} is_white={true}/>
            )}
        </div>
    );
}
