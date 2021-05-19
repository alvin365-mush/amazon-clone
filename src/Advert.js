import { Card, CardActions, CardContent } from '@material-ui/core'
import React from 'react'
import './Advert.css'
function Advert({ title, image }) {
    return (
        <Card className="card">
            <CardContent>
                <h4 className="card_title">{title}</h4>
                <img className="img_card" src={image} alt="" />
            </CardContent>
            <CardActions>
                <a className="card_footer" href="">Explore more</a>
            </CardActions>
        </Card>
    )
}

export default Advert
