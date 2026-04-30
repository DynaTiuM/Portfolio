import { ReactNode } from 'react';
import './Title.css'

interface TitleProps {
    chapterNumber: string;
    sideTitle: string;
    children: ReactNode;
    theme?: 'light' | 'dark';
}

export default function Title({chapterNumber, sideTitle, children, theme} : TitleProps): JSX.Element {
    return (<div className={`SectionTitleContainer ${theme}`}>
        <div className="SideIndicator">
            <span className="RomanNumber">{chapterNumber}</span>
            <span className="VerticalLine"></span>
            <span className="SideText">{sideTitle}</span>
        </div>
        <div className="MainTitleContent">
            {children}
        </div>
    </div>);
}