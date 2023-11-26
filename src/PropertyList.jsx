import Property from "./Property"
import "./PropertyList.css"
import PropTypes from "prop-types"

function PropertyList({ properties }) {
    return (

        <div className="PropertyList">
            {properties.map((p) => {
                return <Property {...p} key={p.id} />
            })}

        </div>
    );
}

PropertyList.propTypes = {
    properties: PropTypes.arrayOf
}


export default PropertyList