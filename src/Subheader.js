import React, { useState, useEffect } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import './Subheader.css'
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal, Typography, useTheme } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading, Heading2
} from "./SubHeaderStyles";
import Responsive from 'react-responsive-decorator'
function Subheader(props) {

    const [{ basket, user }, dispatch] = useStateValue();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        props.media({ minWidth: 768 }, () => {
            setMobile(false)
        })

        props.media({ maxWidth: 768 }, () => {
            setMobile(true)
        })
    }, [])

    const handleDrawerOpen = () => {

        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const drawerText = {
        color: 'black',
        display: 'flex',
        fontSize: '14px',
        paddingLeft: '37px',
        fontFamily: 'Amazon Ember, Arial, sans-serif'
    };
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <div style={{ display: 'flex', flexDirection: 'row', color: '#fff', alignItems: 'center' }}>
                            <MenuIcon onClick={handleDrawerOpen} style={{ cursor: 'pointer', }} />
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="allProducts"><Heading2>All</Heading2></Link>

                        </div>

                    </Column>
                    {isMobile ? <></> :
                        <Column>
                            <Heading>Today's Deals</Heading>
                        </Column>}
                    {isMobile ? <></> :
                        <Column>
                            <Heading>Customer Service</Heading>
                        </Column>}
                    {isMobile ? <></> :
                        <Column>
                            <Heading>Gift cards</Heading>
                        </Column>}
                    {isMobile ? <></> :
                        <Column>
                            <Heading>Sell</Heading>
                        </Column>}
                    {isMobile ? <></> :
                        <Column>
                            <Heading>Amazon COVID-19 Response</Heading>
                        </Column>}
                </Row>
            </Container>
            <Modal open={open}>


                <Drawer
                    className="drawer"
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes="drawerPaper"
                >


                    <div className="drawerHeader">
                        <IconButton className="actionButton" onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <CloseIcon color="white" /> : <CloseIcon color="white" />}
                        </IconButton>
                        <div className="drawer_header_icon">
                            <AccountCircleIcon fontSize="large" />
                        </div>
                        <div className="header_text">
                            <span>Hello,{user?.email}</span>
                        </div>

                    </div>

                    <Divider />
                    <div className="header_container">Digital content and devices</div>
                    <List >
                        {['Amazon music', 'Kindle E-readers & books', 'Appstore for android'].map((text, index) => (
                            <ListItem className="menu_text" button key={text}>

                                <ListItemText primaryTypographyProps={{ style: drawerText }} primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <div className="header_container">Shop by department</div>
                    <List>
                        {['Electronics', 'Computers', 'Smart Home', 'Art & crafts'].map((text, index) => (
                            <ListItem button key={text}>

                                <ListItemText primaryTypographyProps={{ style: drawerText }} primary={text} />
                            </ListItem>
                        ))}
                    </List>


                </Drawer>


            </Modal>

        </Box>
    )
}

export default Responsive(Subheader)

/*
<div>
            <div className="header_sub">
                <div className="header_nav_options" onClick={handleDrawerOpen} >
                    <MenuIcon />
                </div>
                <div className="header_nav_option">
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="allProducts"><span>All</span></Link>
                </div>
                <div className="header_nav_option">
                    <span>Today's Deals</span>
                </div>
                <div className="header_nav_option">
                    <span>Customer Service</span>
                </div>
                <div className="header_nav_option">
                    <span>Gift cards</span>
                </div>
                <div className="header_nav_option">
                    <span>Sell</span>
                </div>
                <div className="header_nav_option">
                    <span>Registry</span>
                </div>
                <div className="header_nav_option_side">
                    <span>Amazon COVID-19 Response</span>
                </div>

            </div>
            <Modal open={open}>


                <Drawer
                    className="drawer"
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes="drawerPaper"
                >


                    <div className="drawerHeader">
                        <IconButton className="actionButton" onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <CloseIcon color="white" /> : <CloseIcon color="white" />}
                        </IconButton>
                        <div className="drawer_header_icon">
                            <AccountCircleIcon fontSize="large" />
                        </div>
                        <div className="header_text">
                            <span>Hello,{user?.email}</span>
                        </div>

                    </div>

                    <Divider />
                    <div className="header_container">Digital content and devices</div>
                    <List >
                        {['Amazon music', 'Kindle E-readers & books', 'Appstore for android'].map((text, index) => (
                            <ListItem className="menu_text" button key={text}>

                                <ListItemText primaryTypographyProps={{ style: drawerText }} primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <div className="header_container">Shop by department</div>
                    <List>
                        {['Electronics', 'Computers', 'Smart Home', 'Art & crafts'].map((text, index) => (
                            <ListItem button key={text}>

                                <ListItemText primaryTypographyProps={{ style: drawerText }} primary={text} />
                            </ListItem>
                        ))}
                    </List>


                </Drawer>


            </Modal>
        </div>
         */