import './GPAButton.css'

interface GPAButtonProps {
    text: string,
    setGpaInformation: Function
}

export default function GPAButton({text, setGpaInformation}: GPAButtonProps) {

    const handleClick = () => {
        setGpaInformation(true);
    }

    return <p className={"GPAButton"} onClick={handleClick}>{text}</p>
}