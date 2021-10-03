import React from 'react';
import './Cart.css';
const Cart = (props) => {
    let cart=props.cart;
    // let price=props.cart.price;
    let discount=0;
    let totalPrice=0;
    for(let i=0;i<cart.length;i++)
    {
        let el=cart[i];
        discount+=el.price*0.18;
        totalPrice+=el.price;
       
    }
    let prec2=(num)=>num.toFixed(2);
    
    return (
        <div>
            <h4>Total Courses Purchased: {cart.length}</h4>
            <h5>Discount: ${prec2(discount)}</h5>
            <h5>Total price: ${prec2(totalPrice-discount)} </h5>
            <button className="btn-checkout">Checkout</button>
        </div>
    );
};

export default Cart;