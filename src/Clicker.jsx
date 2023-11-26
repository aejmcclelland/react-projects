function handleClick() {
    console.log("Button Clicked!!!")
}

function handleHover() {
    console.log("Mouse over button!!")
}
export default function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover} >Hover over button </p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}