import './Title.css'

interface TitleProps {
    title: string;
}

export default function Title({title} : TitleProps): JSX.Element {
    return <h3>{title}</h3>;
}