import PropTypes from "prop-types"

function ShoppingListItem({ item, quantity, completed }) {
    const styles = {
        color: completed ? "grey" : "white",
        textDecoration: completed ? "line-through" : "none"
    }
    return (
        <li style={styles}>
            {item} - {quantity}
        </li>
    )
}

ShoppingListItem.propTypes = {
    key: PropTypes.number,
    item: PropTypes.string,
    quantity: PropTypes.number,
    completed: PropTypes.bool
}

export default ShoppingListItem








{/* <li
key={i.id}
style={{
    color: i.completed ? "grey" : "white",
    textDecoration: i.completed ? "line-through" : "none",
}}>
{i.item} - {i.quantity}
</li> */}