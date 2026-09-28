import { useState } from "react";

function ProductCounter(props) {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        setQuantity(quantity > 1 ? quantity - 1 : 1);
    };

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>Quantity: {quantity}</p>
            <p>Total Price: €{props.price * quantity}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default ProductCounter;