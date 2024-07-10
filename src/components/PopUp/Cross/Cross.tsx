import {closePopUp} from "../../../services/popUp";
import React, {Dispatch, SetStateAction} from "react";

import CrossImg from '../../../assets/images/cross.png';
import './Cross.css';

interface CrossProps {
    setState: Dispatch<SetStateAction<boolean>>
}

export default function Cross({setState}: CrossProps) {
    return (
        <div className={"CrossContainer"} onClick={() => closePopUp(setState)}>
            <img src={CrossImg} alt='x' className={"Cross"}/>
        </div>
    )
}