import React from 'react';

const Cart = (props) => {
    
    const cart = props.name;
    const totalName = cart.reduce( (sum, country) => sum +", "+ country.name, 0)
    return (
        <div>
            <h4>This is cart: {cart.length} </h4>
            <h4>Fav country: {totalName} </h4>
        </div>
    );
};

export default Cart;