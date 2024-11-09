import {Logo} from "../../../models/Logo";

import './LogoComponent.css';
import React, {useState} from "react";
import {PopOverProps} from "../../../models/PopOver";
import {handleHover, handleHoverExit} from "../../../services/handleHover";
import PopOver from "../../PopOver/PopOver";

export default function LogoComponent(logo: Logo) {
    const [popOver, setPopOver] = useState<PopOverProps>({ visible: false, text: '', x: 0, y: 0 });

    return <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src={logo.src} alt={logo.name} className={"LogoComponent"}
             onMouseOver={(e) => {
                 handleHover(e, `${logo.name} : ${logo.description}`, setPopOver);
             }}
             onMouseOut={(e) => handleHoverExit(e, setPopOver)}
        />
        {popOver.visible && popOver.text === `${logo.name} : ${logo.description}` && (
            <PopOver text={popOver.text}
                     min_width={"200px"}
                     max_width={"300px"}
                     top={"35%"} />
        )}
    </div>
}