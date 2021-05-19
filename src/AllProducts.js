import React, { useEffect, useState } from 'react'
import Product from './Product'
import './AllProducts.css'
import { Grid } from '@material-ui/core'
import { db } from './firebase';
import { useParams } from 'react-router';


function AllProducts() {

    const [products, setProducts] = useState([]);
    let { slug } = useParams();

    useEffect(() => {
        db
            .collection('products')
            .onSnapshot(snapshot => {
                setProducts(snapshot.docs.map(doc => doc.data()))
            })

    }, []);

    return (
        <div >

            <Grid container spacing={2}>

                {products.map(({ id, image, price, rating, title }) => (
                    <Grid item xs={12} sm={3}>
                        <Product
                            id={id}
                            title={title}
                            image={image}
                            price={price}
                            rating={rating} />

                    </Grid>))}
            </Grid>
        </div>
    )
}

export default AllProducts
