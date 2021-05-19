import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <>
            <div className="checkout">
                <div className="checkout_left">
                    {/*<img className="checkout_ad" src="" alt="" />*/}
                    <div>
                        <h4>Account:</h4>
                        <h3>{!user ? 'Guest' : user.email}</h3>
                        <h2 className="checkout_title">
                            Your shopping cart
                    </h2>

                        {/*Checkout Product*/}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                        {/*Basket Item*/}
                        {/*Basket Item*/}

                    </div>
                </div>
                <div className="checkout_right">
                    <Subtotal />
                </div>
            </div>
        </>
    )
}

export default Checkout
