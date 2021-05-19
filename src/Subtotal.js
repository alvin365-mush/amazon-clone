import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {

    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();

    const loginCheck = () => {
        if (user) {
            history.push('/payment')
        } else {
            history.push('/login')
        }
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/*Subtotal({basket.length} items):*/}
                            Subtotal ( {basket.length}  items):
                            {/*<strong>{` ${value}`}</strong>*/}
                            <strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                //value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={loginCheck}>Proceed to checkout</button>

        </div>
    )
}
//{/*value={getBasketTotal(basket)}*/ }
/*<button onClick={e => history.push('/payment')}>Proceed to checkout</button>*/
export default Subtotal
