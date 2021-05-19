import { Card, CardActions, CardContent, Paper } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React from 'react'
import './Product.css'
import { ToastContainer, toast } from 'react-toastify'
import { useStateValue } from './StateProvider'
import 'react-toastify/dist/ReactToastify.css'

function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    //console.log('this is the basket', basket)
    const addToBasket = () => {
        //dispath action in data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
        toast(`🛍 ${title} added to cart`, {
            position: "top-right",
            autoClose: 6000,
            hideProgessBar: true,
            newestOnTop: false,
            closeOnCLick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true
        })
    }
    return (
        <Card className="cardd" >
            <CardContent>
                <div className="line-clamp">
                    {title}
                </div>
                <p className="product_price">
                    <small> $ </small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}

                </div>
                <img style={{ display: 'flex', objectFit: 'contain', height: 'auto', minHeight: '20vh', maxHeight: '20vh', width: '100%' }} src={image} alt="" />
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
                <button className="add_button" onClick={addToBasket}>Add to basket<AddShoppingCartIcon fontSize="small" /></button>
            </CardActions>
        </Card>
    )
}

export default Product
