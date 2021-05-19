import { Card, Grid, makeStyles, Slide } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { db } from './firebase';
import './Home.css'
import Product from './Product.js'
import { useStateValue } from './StateProvider';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Advert from './Advert';
import Carousel from 'react-material-ui-carousel'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper2: {
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        minWidth: '200px',
        maxWidth: '500px',
        marginRight: '60px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

    },
    h2: {
        marginBottom: '20px',
        textAlign: 'center',
        fontFamily: 'Amazon Ember", Arial, sans-serif'
    },
    p: {
        marginTop: '20px',
        textAlign: 'center',
        fontFamily: 'Amazon Ember", Arial, sans-serif'

    }
}));

function Home() {

    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false)
    let { slug } = useParams();

    useEffect(() => {
        db
            .collection('products')
            .onSnapshot(snapshot => {
                setProducts(snapshot.docs.map(doc => doc.data()))
            })
        setOpen(true)
    }, []);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="home"  >
            <div className="home_container">
                <div className="home_image">
                    <Carousel NextIcon={<NavigateNextIcon />} PrevIcon={<NavigateBeforeIcon />}>
                        <img
                            className="carousel_image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                            alt="" />
                        <img
                            className="carousel_image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="" />
                    </Carousel>
                </div>
                <div className="home_row" >
                    <Grid container direction="row" spacing={2}>

                        <Grid item direction="row" xs={12} sm={3}>
                            <Advert
                                title="Find your ideal TV"
                                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg" />

                        </Grid>
                        <Grid item direction="row" xs={12} sm={3}>
                            <Advert
                                title="Get fit at home"
                                image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg" />

                        </Grid>
                        <Grid item direction="row" xs={12} sm={3}>
                            <Advert
                                title="Computers & accessories"
                                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" />

                        </Grid>
                        <Grid item direction="row" xs={12} sm={3}>
                            <Advert
                                title="Beauty picks"
                                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg" />

                        </Grid>
                    </Grid>

                    {/* product*/}


                    {/* product*/}
                    {/* product*/}
                </div>


                {/* product*/}


                {/* product*/}
                {/* product*/}


            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper2}>

                        <h2 className={classes.h2} id="transition-modal-title">Welcome to Amazon 🛍  Clone</h2>

                        <p className={classes.p} id="transition-modal-description">This is a full stack web app with full ecommerce functionality including payment processing via Stripe.</p>
                        <p className={classes.p} id="transition-modal-description">By Alvin.</p>

                    </div>
                </Fade>
            </Modal>
            {/*<ToastContainer
                position="top-right"
                autoClose="{6000}"
                hideProgessBar={false}
                newestOnTop={false}
                closeOnCLick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />*/}
        </div>
    )
}

export default Home
