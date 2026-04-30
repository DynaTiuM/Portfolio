import { useState } from 'react';
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
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', gap: '57px', flexWrap: 'wrap', width: '80%' }}>
                {
                    items.map((language, index) => (
                        <div className="Category">
                            <h4 className="CategoryTitle">Langages de programmation</h4>
                            <div className="CategoryItem">
                                <span className="ItemName">JavaScript</span>
                                <span className="ItemDots"></span>
                                <span className="ItemImage">O</span>
                            </div>
                            <div className="CategoryItem">
                                <span className="ItemName">JavaScript</span>
                                <span className="ItemDots"></span>
                                <span className="ItemImage">O</span>
                            </div>
                            <div className="CategoryItem">
                                <span className="ItemName">JavaScript</span>
                                <span className="ItemDots"></span>
                                <span className="ItemImage">O</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
