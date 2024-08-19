import { Col, Row, Table } from "reactstrap";

const GameDisplay = (items) => {
    const { id, console, name, image, genre } = items;
    return (
        <Table>
            <Row>
                <Col>
                    <img src={image} alt={name} />
                    <br />
                    {name}
                    <br />
                    {genre}
                </Col>
            </Row>
        </Table>
    )
};

export default GameDisplay;