import { Navbar, NavbarBrand, Button, NavItem, Nav, Row } from "reactstrap";
import { NavLink, useNavigate } from 'react-router-dom';


const Footer = () => {
    let history = useNavigate();

    return(
        <Navbar dark color='primary' className="snapFooter">

            <Nav style={{margin:'auto'}} navbar>
                <Row> {/*Home Page*/}
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home' style={{fontSize:'30px'}}> H O M E </i>
                        </NavLink>
                    </NavItem>
                </Row>
            </Nav>
            <Button className='butt' onClick={() => history(-1)}>
                <i >Return</i>
            </Button>
        </Navbar>
    )
}

export default Footer;