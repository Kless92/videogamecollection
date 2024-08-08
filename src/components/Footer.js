import { useState } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <Navbar dark color='primary' className="snapFooter">
            <NavbarBrand>
                <h1>TEST</h1>
            </NavbarBrand>
            <Button className='butt'>

            </Button>
        </Navbar>
    )
}

export default Footer;