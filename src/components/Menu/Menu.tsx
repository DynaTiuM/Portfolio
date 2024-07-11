import React, {useEffect, useState} from 'react';
import './Menu.css';
import Language from '../../assets/images/anglais.png';
import { scrollToSection } from "../../services/scroll";
import MenuIcon from '../../assets/images/menu.png';

import { useTranslation } from 'react-i18next';

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

    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`Menu ${isMenuOpen ? '' : 'retracted'}`}>
            <button className="MenuButton" onClick={toggleMenu}>
                <img src={MenuIcon} alt="Menu" width="30px" />
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
                    <img onClick={() => changeLanguage('en')} src={Language} alt="language" height="40px" />
                </>
            )}
        </div>
    );
}
