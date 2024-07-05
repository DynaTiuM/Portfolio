import React from "react";
import {PopOverProps} from "../../models/PopOver";

import './PopOver.css'

export default function PopOver({text}: PopOverProps) {
    return <div className={"PopOver"}>
        {text}
    </div>
}