import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import axios from './axios'
import { db } from './firebase';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();


    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret which allows us to charge client
        //whenever basket changes we need to get a new secret

        const getClientSecret = async () => {
            //axios is for get and post requests
            const response = await axios({
                method: 'post',
                //stripe expects totals in currencies subunits
                //total is a query param
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('The secret is>>>', clientSecret)

    const handleSubmit = async (event) => {
        //do fancy stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true)
            setError(null)
            setProcessing(false)
            //we dont want users to come back to the payment page
            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })

    }
    const handleChange = event => {
        //listen for changes in the card element
        //and display errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
                {/*paymant section address*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>React lane</p>
                        <p>Los angeles, CA</p>
                    </div>
                </div>
                {/*paymant section review items*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/*paymant section payment*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/*Stripe magic*/}
                        <form onSubmit={handleSubmit} action="">
                            <CardElement className="card" onChange={handleChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix="$"
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                                </button>
                            </div>
                            {/*errors*/}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
