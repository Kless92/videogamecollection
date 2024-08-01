import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, Button, Nav, NavItem, Row, Col} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [nintendoOpen, setNintendoOpen] = useState(false);
    const [atariOpen, setAtariOpen] = useState(false);
    const [segaOpen, setSegaOpen] = useState(false);
    const [playStationOpen, setPlayStationOpen] = useState(false);
    const [xBoxOpen, setXBoxOpen] = useState(false);
    return(
        <Navbar dark color='danger'  >
            <Col >
                <NavbarBrand>
                    <h1>TEST</h1>
                </NavbarBrand>
                {/*Template*/}
                <Button onClick={() => {setAtariOpen(!atariOpen); setNintendoOpen(false); setSegaOpen(false); setPlayStationOpen(false); setXBoxOpen(false)}}>Atari</Button>
                <Button onClick={() => {setNintendoOpen(!nintendoOpen); setAtariOpen(false); setSegaOpen(false); setPlayStationOpen(false); setXBoxOpen(false)}}>Nintendo</Button>
                <Button onClick={() => {setSegaOpen(!segaOpen); setAtariOpen(false); setNintendoOpen(false); setPlayStationOpen(false); setXBoxOpen(false)}}>Sega</Button>
                <Button onClick={() => {setPlayStationOpen(!playStationOpen); setAtariOpen(false); setNintendoOpen(false); setSegaOpen(false); setXBoxOpen(false)}}>Play Station</Button>
                <Button onClick={() => {setXBoxOpen(!xBoxOpen); setAtariOpen(false); setNintendoOpen(false); setSegaOpen(false); setPlayStationOpen(false)}}>Xbox</Button>

                <Collapse isOpen={nintendoOpen} navbar>
                    <Nav navbar>
                        <Row> {/*Home Page*/}
                            <NavItem>
                                <NavLink to='/'>
                                    <i className='fa fa-home fa-lg' /> Home
                                </NavLink>
                            </NavItem>
                        </Row>
                        <Row> {/*NES*/}
                            <NavItem>
                                <NavLink to='nes'>
                                    <i className='fa fa-home fa-lg' /> NES
                                </NavLink>
                            </NavItem>
                        </Row>
                        <Row>{/*SNES*/}
                            <NavItem>
                                <NavLink to='snes'>
                                    <i className='fa fa-home fa-lg' /> SNES
                                </NavLink>
                            </NavItem>
                        </Row>
                        <Row>{/*N64*/}
                            <NavItem>
                                <NavLink to='n64'>
                                    <i className='fa fa-home fa-lg' /> N64
                                </NavLink>
                            </NavItem>
                        </Row>
                        <Row>{/*GameCube*/}
                            <NavItem>
                                <NavLink to='gamecube'>
                                    <i className='fa fa-home fa-lg' /> Game Cube
                                </NavLink>
                            </NavItem>
                        </Row>
                        <Row>{/*WII*/}
                            <NavItem>
                                <NavLink to='wii'>
                                    <i className='fa fa-home fa-lg' /> Wii
                                </NavLink>
                            </NavItem>
                        </Row>
                        <Row>{/*WII U*/}
                            <NavItem>
                                <NavLink to='wiiu'>
                                    <i className='fa fa-home fa-lg' /> Wii U
                                </NavLink>
                            </NavItem>
                        </Row>
                        <Row>{/*Switch*/}
                            <NavItem>
                                <NavLink to='switch'>
                                    <i className='fa fa-home fa-lg' /> Switch
                                </NavLink>
                            </NavItem>
                        </Row>

                    </Nav>
                </Collapse>
                <Collapse isOpen={atariOpen} navbar>
                    <Row>{/*Atari2600*/}
                        <NavItem>
                            <NavLink to='atari2600'>
                                <i className='fa fa-home fa-lg' /> Atari 2600
                            </NavLink>
                        </NavItem>
                    </Row>
                </Collapse>
                <Collapse isOpen={segaOpen} navbar>
                    <Row>{/*Sega Gensis*/}
                        <NavItem>
                            <NavLink to='gensis'>
                                <i className='fa fa-home fa-lg' /> Sega Gensis
                            </NavLink>
                        </NavItem>
                    </Row>
                    <Row>{/*Sega DreamCast*/}
                        <NavItem>
                            <NavLink to='dreamcast'>
                                <i className='fa fa-home fa-lg' /> Sega DreamCast
                            </NavLink>
                        </NavItem>
                    </Row>
                </Collapse>
                <Collapse isOpen={playStationOpen} navbar>
                    <Row>{/*Play Station 1*/}
                        <NavItem>
                            <NavLink to='ps1'>
                                <i className='fa fa-home fa-lg' /> Play Station 1
                            </NavLink>
                        </NavItem>
                    </Row>
                    <Row>{/*Play Station 2*/}
                        <NavItem>
                            <NavLink to='ps2'>
                                <i className='fa fa-home fa-lg' /> Play Station 2
                            </NavLink>
                        </NavItem>
                    </Row>
                    <Row>{/*Play Station 3*/}
                        <NavItem>
                            <NavLink to='ps3'>
                                <i className='fa fa-home fa-lg' /> Play Station 3
                            </NavLink>
                        </NavItem>
                    </Row>
                    <Row>{/*Play Station 4*/}
                        <NavItem>
                            <NavLink to='ps4'>
                                <i className='fa fa-home fa-lg' /> Play Station 4
                            </NavLink>
                        </NavItem>
                    </Row>
                    <Row>{/*Play Station 5*/}
                        <NavItem>
                            <NavLink to='ps5'>
                                <i className='fa fa-home fa-lg' /> Play Station 5
                            </NavLink>
                        </NavItem>
                    </Row>
                </Collapse>
                <Collapse isOpen={xBoxOpen} navba>
                    <Row>{/*Original Xbox*/}
                        <NavItem>
                            <NavLink to='xbox'>
                                <i className='fa fa-home fa-lg' /> Original Xbox
                            </NavLink>
                        </NavItem>
                    </Row>
                    <Row>{/*Xbox360*/}
                        <NavItem>
                            <NavLink to='xbox360'>
                                <i className='fa fa-home fa-lg' /> Xbox 360
                            </NavLink>
                        </NavItem>
                    </Row>
                </Collapse>
                
            </Col>
        </Navbar>
    );
}

export default Header;