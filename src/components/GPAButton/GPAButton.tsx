import './GPAButton.css'

interface GPAButtonProps {
    text: string
}

export default function GPAButton({text}: GPAButtonProps) {
    return <p className={"GPAButton"}>{text}</p>
}