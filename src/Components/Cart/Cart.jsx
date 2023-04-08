import React from 'react';
import Tshirt from '../Tshirt/Tshirt';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length === 0){
        message= <p>Please add some products</p>
    }
    else{
        message=<div>
            <h1>Thanks for wasting your money</h1>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue':'red'}>Order Summary:{cart.length}</h2>
            <p className={`bold ${cart.length===3?'yellow':'purple'}`}>something</p>
            {cart.length >2 ? <span className='orange'>buy more</span> : <span>fokira</span>}
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}
                >{tshirt.name}
                    <button
                        onClick={() => handleRemoveFromCart(tshirt._id)}
                    >x</button></p>)
            }
            {
                cart.length === 2 && <p>Double bonanza</p>
            }
            {
                cart.length ===3 || <p>false</p>
            }
        </div>
    );
};

export default Cart;

/*
***CONDITIONAL RENDERING
1.use if or if else to set a variable that will contain an element,component
2.ternary operator:condition ? "for true" : "false"
3.logical &&:(if the condition is true then the next thing will be displayed)
4.logical || :(if the condition is false then the next thing will be displayed)
*/

/*
**conditional css class
1.use ternary
2.ternary inside template string
*/