import { useState } from 'react';
import { Navbar, Collapse, NavbarToggler, Nav, NavItem, Row, Col} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <Navbar  dark color='primary'  expand='md' >
            <Row>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                
                <Collapse isOpen={menuOpen} navbar>
                    <Nav navbar>
                        <Col>
                            <NavItem>
                                <NavLink to='/'>
                                    <i className='fa fa-home fa-lg' /> Home
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink to='nes'>
                                    <i className='fa fa-home fa-lg' /> NES
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink to='snes'>
                                    <i className='fa fa-home fa-lg' /> SNES
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink to='n64'>
                                    <i className='fa fa-home fa-lg' /> N64
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink to='gamecube'>
                                    <i className='fa fa-home fa-lg' /> Game Cube
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink to='wii'>
                                    <i className='fa fa-home fa-lg' /> Wii
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink to='wiiu'>
                                    <i className='fa fa-home fa-lg' /> Wii U
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink to='switch'>
                                    <i className='fa fa-home fa-lg' /> Switch
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col>
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