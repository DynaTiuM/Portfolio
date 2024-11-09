import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import './DropDown.css'

import English from "../../assets/images/language_flags/en.png";
import French from "../../assets/images/language_flags/fr.png";
import German from "../../assets/images/language_flags/de.png";

export default function DropDown() {
    const { i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setShowDropdown(false);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="DropdownContainer">
            {i18n.language === "en" && (
                <img className={"LanguageFlag"} src={English}
                     alt="language" height="40px" onClick={toggleDropdown}/>
            )}
            {i18n.language === "fr" && (
                <img className={"LanguageFlag"} src={French}
                     alt="language" height="40px" onClick={toggleDropdown}/>
            )}
            {i18n.language === "de" && (
                <img className={"LanguageFlag"} src={German}
                     alt="language" height="40px" onClick={toggleDropdown}/>
            )}
            {showDropdown && (
                <div className="DropdownContent">
                    {i18n.language !== "en" && (
                        <img onClick={() => changeLanguage("en")} src={English} alt="English" height="40px" />
                    )}
                    {i18n.language !== "fr" && (
                        <img onClick={() => changeLanguage("fr")} src={French} alt="French" height="40px" />
                    )}
                    {i18n.language !== "de" && (
                        <img onClick={() => changeLanguage("de")} src={German} alt="German" height="40px" />
                    )}
                </div>
            )}
        </div>
    );
}
