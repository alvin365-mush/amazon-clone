import { Button, Grid, Paper } from '@material-ui/core'
import React from 'react'
import './Footer.css'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

function Footer() {
    return (

        <Box>
            <div className="navfooter_backtop">
                <span className="btn_txt"> Back to top</span>
            </div>
            <Container>
                <Row>
                    <Column>
                        <Heading>Get to know Us</Heading>
                        <FooterLink href="#">Careers</FooterLink>
                        <FooterLink href="#">Blog</FooterLink>
                        <FooterLink href="#">About Amazon</FooterLink>
                        <FooterLink href="#">Sustainability</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Make Money With Us</Heading>
                        <FooterLink href="#">Sell Products on Amazon</FooterLink>
                        <FooterLink href="#">Sell Apps on Amazon</FooterLink>
                        <FooterLink href="#">Become an Affiliate</FooterLink>
                        <FooterLink href="#">Advertise your Products</FooterLink>
                        <FooterLink href="#">Self Publish With Us</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Amazon Payment Products</Heading>
                        <FooterLink href="#">Amazon Business Card</FooterLink>
                        <FooterLink href="#">Shop With Points</FooterLink>
                        <FooterLink href="#">Reload Your Balance</FooterLink>
                        <FooterLink href="#">Amazon Currency Converter</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Let Us Help You </Heading>
                        <FooterLink href="#">
                            Amazon and COVID-19
                        </FooterLink>
                        <FooterLink href="#">
                            Your Account
                        </FooterLink>
                        <FooterLink href="/orders">
                            Your Orders
                        </FooterLink>
                        <FooterLink href="#">
                            Shipping Rates & Policies
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>

    )
}

export default Footer
