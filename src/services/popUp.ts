import React from "react";
import { Dispatch, SetStateAction } from 'react';

export const closePopUp = (setState: Dispatch<SetStateAction<boolean>>) => {
    setState(false);
};

export const managePopUpScroll = (overlayRef: React.RefObject<HTMLDivElement>) => {
    const overlay = overlayRef.current;
    if (overlay) {
        const container = overlay.querySelector('.InformationContainer') as HTMLElement;
        if (container) {
            if (container.scrollHeight > window.innerHeight) {
                overlay.style.alignItems = 'flex-start';
                container.style.marginTop = '50px';
                container.style.marginBottom = '50px';
            } else {
                overlay.style.alignItems = 'center';
            }
        }
    }
};


export const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, setState: Dispatch<SetStateAction<boolean>>) => {
    if (event.target === event.currentTarget) {
        closePopUp(setState);
    }
};