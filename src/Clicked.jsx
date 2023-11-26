
export default function Clicked({ message, buttonText }) {
    const handleClick = () => {
        alert(message)
    }
    return (
        <div>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}