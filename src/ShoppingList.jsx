import ShoppingListItem from './ShoppingListItem';
import PropTypes from "prop-types"
function ShoppingList({ items }) {
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((i) => (
                    <ShoppingListItem
                        key={i.id}
                        item={i.item}
                        quantity={i.quantity}
                        completed={i.completed}
                    />
                    // <ShoppingListItem key={i.id} {...i} />
                ))}
            </ul>
        </div>
    );
}

ShoppingList.propTypes = {
    key: PropTypes.number,
    item: PropTypes.string,
    quantity: PropTypes.number,
    completed: PropTypes.bool,
    items: PropTypes.array
}


export default ShoppingList;
