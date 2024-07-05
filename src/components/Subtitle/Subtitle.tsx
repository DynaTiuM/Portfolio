import './Subtitle.css'

interface SubtitleProps {
    subtitle: string;
}

export default function Subtitle({subtitle} : SubtitleProps): JSX.Element {
    return <h4>{subtitle}</h4>;
}