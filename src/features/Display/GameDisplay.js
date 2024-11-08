import { Col, Row, Table } from "reactstrap";
import { NavLink, Route, Routes, Link } from 'react-router-dom';


const GameDisplay = ({items}) => {
    const { id, name, image, genre } = items;
    return (
        <Table style={{background:'white'}}>
            <Col className="test">
                <Link to={`${id}`} >
                    <img src={image} alt={name} className="shrink"/>
                </Link>
                    <br />
                    {name}
                    <br />
                    {genre}
            </Col>
        </Table>
    )
};

export default GameDisplay;