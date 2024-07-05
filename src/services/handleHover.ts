import React from "react";

export const handleHover = (event: React.MouseEvent<HTMLImageElement, MouseEvent>, text: string, setPopOver: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPopOver({
        visible: true,
        text,
        x: rect.left + (rect.width / 2),
        y: rect.bottom + window.scrollY
    });
    event.currentTarget.style.transform = 'scale(1.15)';
};

export const handleHoverExit = (event: React.MouseEvent<HTMLImageElement, MouseEvent>, setPopOver: any) => {
    setPopOver({ visible: false, text: '', x: 0, y: 0 });
    event.currentTarget.style.transform = 'scale(1)';
};
