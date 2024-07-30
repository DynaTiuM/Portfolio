import React, {useEffect, useState} from 'react';
import './Menu.css';
import { scrollToSection } from "../../services/scroll";
import MenuIcon from '../../assets/images/menu.png';

import { useTranslation } from 'react-i18next';
import DropDown from "../DropDown/DropDown";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { width } = useWindowSize();

    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {
        const handleClick = (event: any) => {
            if (isMenuOpen && !event.target.closest('.Menu')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [isMenuOpen]);

    return (
        <div className={`Menu ${isMenuOpen ? '' : 'retracted'}`}>
            <button className="MenuButton" onClick={toggleMenu}>
                <img className = "MenuImg" src={MenuIcon} alt="Menu" width="30px" />
            </button>
            {(isMenuOpen || width > 768) &&  (
                <>
                    <p className="Tab" onClick={() => {
                        scrollToSection('home', -200);
                        if(width <= 768) toggleMenu();
                    }}>{t('home')}</p>
                    <p className="Tab" onClick={() => {
                        scrollToSection('actualLearnings', -150);
                        if(width <= 768) toggleMenu();
                    }}>{t('portfolio')}</p>
                    <p className="Tab" onClick={() => {
                        scrollToSection('aboutMe', -150);
                        if(width <= 768) toggleMenu();
                    }}>{t('about-me')}</p>
                    <p className="Tab" onClick={() => {
                        scrollToSection('contact', 0);
                        if(width <= 768) toggleMenu();
                    }}>{t('contact')}</p>
                    <DropDown />
                </>
            )}
        </div>
    );
}
