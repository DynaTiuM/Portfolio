import './Skills.css'
import {useTranslation} from "react-i18next";
import Title from "../../components/Title/Title";

export default function Skills() {

    const { t } = useTranslation();

    return <>
        <section className="SkillsSection">
            <Title 
                chapterNumber="II" 
                sideTitle="Technologies & Outils"
                theme="dark"
            >
                <h3>
                    Compétences &<br/>
                    <span className="Highlight">Outils</span>
                </h3>
                <div className="Categories">
                    
                    <div className="Separator"></div>
                    <div className="Category">
                        <h4 className="CategoryTitle">Base de données & outils</h4>
                        <div className="CategoryItem">
                            <span className="ItemName">JavaScript</span>
                            <span className="ItemDots"></span>
                            <span className="ItemImage">O</span>
                        </div>
                        <div className="CategoryItem">
                            <span className="ItemName">JavaScript</span>
                            <span className="ItemDots"></span>
                            <span className="ItemImage">O</span>
                        </div>
                        <div className="CategoryItem">
                            <span className="ItemName">JavaScript</span>
                            <span className="ItemDots"></span>
                            <span className="ItemImage">O</span>
                        </div>
                    </div>
                </div>
                
            </Title>
            
        </section>
        
        
    </>
}