import ColourBox from "./ColourBox";
import './ColourBoxGrid.css'

function ColourBoxGrid({ colours }) {
    const boxes = []
    for (let i = 0; i < 25; i++) {
        boxes.push(<ColourBox colours={colours} />)
    }
    return (
        <div className="ColourBoxGrid">{boxes} </div>
    )
}

export default ColourBoxGrid