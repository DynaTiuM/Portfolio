import React from "react";
import {PopOverProps} from "../../models/PopOver";

import './PopOver.css'

export default function PopOver({text, min_width, max_width, top}: PopOverProps) {
    return <div>
        <div className={"PopOver"} style={{minWidth: min_width, maxWidth: max_width, top: top}}>
            <span className={"PopOverText"}>{text}</span>
        </div>
    </div>
}