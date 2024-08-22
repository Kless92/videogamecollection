import { Navbar, NavbarBrand, Button, NavItem, Nav, Row } from "reactstrap";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <Navbar dark color='primary' className="snapFooter">
            <NavbarBrand>
                <h1>TEST</h1>
            </NavbarBrand>
            <Nav navbar>
                <Row> {/*Home Page*/}
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                </Row>
            </Nav>
            <Button className='butt'>

            </Button>
        </Navbar>
    )
}

export default Footer;