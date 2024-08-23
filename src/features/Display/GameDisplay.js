import { Col, Row, Table } from "reactstrap";

const GameDisplay = (items) => {
    const { id, name, image, genre } = items;
    return (
        <Col>
            <img src={image} alt={name} />
            <br />
            {name}
            <br />
            {genre}
        </Col>
    )
};

export default GameDisplay;