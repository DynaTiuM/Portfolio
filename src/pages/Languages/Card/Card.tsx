import React from 'react';
import './Card.css';
import { Language } from '../../../models/Card/Card';

export default function Card({ language_name, description, image, size_y, size_x }: Language) {
    return (
        <div className="CardContainer" style={{ width: size_x , height: size_y }}>
            <img src={image} alt={language_name} className="CardImage" style={{ width: size_x, height: size_y }} />
            <div className="CardOverlay">
                <h2 className="CardTitle">{language_name}</h2>
                <p className="CardDescription">{description}</p>
            </div>
        </div>
    );
}
