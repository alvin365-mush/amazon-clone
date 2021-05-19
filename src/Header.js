import React, { useEffect, useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Subheader from './Subheader'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading, Heading2, Column2
} from "./HeaderStyles";
import Responsive from 'react-responsive-decorator'


function Header(props) {
    const [{ basket, user }, dispatch] = useStateValue();
    const [isMobile, setMobile] = useState(false);

    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }
    useEffect(() => {
        props.media({ minWidth: 768 }, () => {
            setMobile(false)
        })

        props.media({ maxWidth: 768 }, () => {
            setMobile(true)
        })
    }, [])

    return (
        <div>
            <Box>
                <Row>
                    <Column>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ width: 100, marginLeft: '10px' }}>
                                <Link to='/'>
                                    <img
                                        className="header_logo"
                                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='image' />
                                </Link>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 30 }}>
                                <div className="header_nav_option_loc">
                                    <LocationOnOutlinedIcon />
                                </div>
                                <div className="header_nav_option_loca">

                                    <span className="header_optionLineOne">Deliver to</span>
                                    <span className="header_optionLineTwo">Kenya</span>
                                </div>
                            </div>
                        </div>
                    </Column>
                    {isMobile ? <></> : <Column >
                        <div className="header_search">
                            <input className="header_searchInput" type="text" />
                            <SearchIcon className="header_searchIcon" />

                        </div >
                    </Column>}
                    <Column2>
                        <div className="header_nav">
                            <Link style={{ textDecoration: 'none' }} to={!user && '/login'}>
                                <div onClick={handleAuthentication} className="header_nav_option">
                                    <span className="header_optionLineOne">Hello, {user?.email}</span>
                                    <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='/orders'>
                                <div className="header_nav_option">
                                    <span className="header_optionLineOne">Returns</span>
                                    <span className="header_optionLineTwo">& Orders</span>
                                </div>
                            </Link>
                            <div className="header_nav_option">
                                <span className="header_optionLineOne">Your</span>
                                <span className="header_optionLineTwo">Prime</span>
                            </div>
                            <Link to='checkout'>
                                <div className="header_optionBasket">
                                    <ShoppingBasketIcon />
                                    <span className="header_optionLineTwo header_basketCount">
                                        {basket?.length}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </Column2>

                </Row>
            </Box>
            <Subheader className="subheader" />
        </div>
    )
}

export default Responsive(Header)
/*
<div>
            <div className="header">
                <Link to='/'>
                    <img
                        className="header_logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                </Link>
                <div className="header_nav_option_loc">
                    <LocationOnOutlinedIcon />
                </div>
                <div className="header_nav_option_loca">

                    <span className="header_optionLineOne">Deliver to</span>
                    <span className="header_optionLineTwo">Kenya</span>
                </div>
                <div className="header_search">
                    <input className="header_searchInput" type="text" />
                    <SearchIcon className="header_searchIcon" />
                    //{/*logo}
                </div >
    <div className="header_nav">
        <Link style={{ textDecoration: 'none' }} to={!user && '/login'}>
            <div onClick={handleAuthentication} className="header_nav_option">
                <span className="header_optionLineOne">Hello, {user?.email}</span>
                <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/orders'>
            <div className="header_nav_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">& Orders</span>
            </div>
        </Link>
        <div className="header_nav_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to='checkout'>
            <div className="header_optionBasket">
                <ShoppingBasketIcon />
                <span className="header_optionLineTwo header_basketCount">
                    {basket?.length}
                </span>
            </div>
        </Link>
    </div>

            </div >
    <Subheader className="subheader" />
        </div >
*/
