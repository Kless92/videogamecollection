import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, Button, NavbarToggler, Nav, NavItem, Row, Col} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <Navbar dark color='danger'  >
            <Row >
            <NavbarBrand>
                <h1>TEST</h1>
            </NavbarBrand>
            
            {/*Template*/}
            
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav navbar>
                        <Col> {/*Home Page*/}
                            <NavItem>
                                <NavLink to='/'>
                                    <i className='fa fa-home fa-lg' /> Home
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col> {/*NES*/}
                            <NavItem>
                                <NavLink to='nes'>
                                    <i className='fa fa-home fa-lg' /> NES
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>{/*SNES*/}
                            <NavItem>
                                <NavLink to='snes'>
                                    <i className='fa fa-home fa-lg' /> SNES
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>{/*N64*/}
                            <NavItem>
                                <NavLink to='n64'>
                                    <i className='fa fa-home fa-lg' /> N64
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>{/*GameCube*/}
                            <NavItem>
                                <NavLink to='gamecube'>
                                    <i className='fa fa-home fa-lg' /> Game Cube
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>{/*WII*/}
                            <NavItem>
                                <NavLink to='wii'>
                                    <i className='fa fa-home fa-lg' /> Wii
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>{/*WII U*/}
                            <NavItem>
                                <NavLink to='wiiu'>
                                    <i className='fa fa-home fa-lg' /> Wii U
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>{/*Switch*/}
                            <NavItem>
                                <NavLink to='switch'>
                                    <i className='fa fa-home fa-lg' /> Switch
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>{/*Atari2600*/}
                            <NavItem>
                                <NavLink to='atari2600'>
                                    <i className='fa fa-home fa-lg' /> Atari 2600
                                </NavLink>
                            </NavItem>
                        </Col>
                    </Nav>
                </Collapse>
            </Row>
        </Navbar>
    );
}

export default Header;