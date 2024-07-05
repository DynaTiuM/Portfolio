import './GithubButton.css'

interface GithubButtonProps {
    text: string
}

export default function GithubButton({text}: GithubButtonProps) {
    return <p className={"GithubButton"}>{text}</p>
}