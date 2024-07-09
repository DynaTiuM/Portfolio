import './Plus.css';
import PlusImg from '../../assets/images/plus.png';
import React from "react";
import { handleHover, handleHoverExit } from "../../services/handleHover";

interface PlusProps {
    description: string;
    setPopOver: Function;
}

export default function Plus({ description, setPopOver }: PlusProps) {
    return (
        <div style={{ display: "flex", justifyContent: "flex-end", width: '100%' }}>
            <div
                className="PlusContainer"
                onMouseDown={(e) => handleHover(e, description, setPopOver)}
                onMouseOut={(e) => handleHoverExit(e, setPopOver)}
            >
                <img className="Plus" src={PlusImg} alt="+" />
            </div>
        </div>
    );
}
