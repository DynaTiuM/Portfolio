import './InternProject.css';

export interface InternProjectProps {
    title: string,
    description: string
}

export default function InternProject({title, description}: InternProjectProps) {
    return <div className={"InternProjectContainer"}>
        <p className={"Title"}>{title}</p>
        <p>{description}</p>
    </div>
}