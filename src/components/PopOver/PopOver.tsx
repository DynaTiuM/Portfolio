import React from "react";
import {PopOverProps} from "../../models/PopOver";

import './PopOver.css'

export default function PopOver({text, min_width, max_width, top, is_white}: PopOverProps) {
    const popOverClass = is_white ? "PopOverBlackNWhite" : "PopOver";

    return <div>
        <div className={popOverClass} style={{minWidth: min_width, maxWidth: max_width, top: top}}>
            <span className={"PopOverText"}>{text}</span>
        </div>
    </div>
}