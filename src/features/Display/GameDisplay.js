import { Col, Row, Table } from "reactstrap";
import { NavLink, Route, Routes, Link } from 'react-router-dom';
const GameDisplay = ({items}) => {
    const { id, name, image, genre } = items;
    return (
        <Col>
            <Link to={`${id}`}>
                <img src={image} alt={name} className="shrink"/>
            </Link>
                <br />
                {name}
                <br />
                {genre}
        </Col>
    )
};

export default GameDisplay;