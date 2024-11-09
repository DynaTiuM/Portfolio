import './InternProject.css';

export interface InternProjectProps {
    title: string,
    description: string,
    isExpanded: boolean,
    onClick: () => void
}

export default function InternProject({ title, description, isExpanded, onClick }: InternProjectProps) {
    return (
        <div
            className={`InternProjectContainer ${isExpanded ? 'expanded' : 'collapsed'}`}
            onMouseEnter={onClick}
        >
            <p className={"Title"}>{title}</p>
            <p className={"Description"}>{description}</p>
        </div>
    );
}