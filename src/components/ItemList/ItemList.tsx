import React, { useState } from 'react';
import {PopOverProps} from "../../models/PopOver";
import PopOver from "../PopOver/PopOver";
import {handleHover, handleHoverExit} from "../../services/handleHover";

interface Item {
    src: string,
    name: string
}

interface ItemListProps {
    items: Item[];
}

export default function ItemList({items}: ItemListProps) {
    const [popOver, setPopOver] = useState<PopOverProps>({ visible: false, text: '', x: 0, y: 0 });

    return (
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', gap: '57px', flexWrap: 'wrap' }}>
            {
                items.map((language, index) => (
                    <div key={index} style={{ position: 'relative', display: 'inline-block' }}>
                        <img
                            src={language.src}
                            alt={language.name}
                            style={{ height: '90px', width: 'auto', marginBottom: '10px', transition: 'transform 0.2s ease-in-out' }}
                            onMouseOver={(e) => handleHover(e, language.name, setPopOver)}
                            onMouseOut={(e) => handleHoverExit(e, setPopOver)}
                        />
                        {popOver.visible && popOver.text === language.name && (
                            <PopOver text={popOver.text}></PopOver>
                        )}
                    </div>
                ))
            }
        </div>
    );
}
