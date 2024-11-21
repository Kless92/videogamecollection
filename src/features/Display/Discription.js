import { Col, Row, Table } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectNESById } from "../Nintendo/nes/nesSlice";

const Discription = ({ items }) => {
    //const {gameId} = useParams();
    //const items = selectNESById(gameId);
    const { name, image, genre, discription } = items

    return (
        <Table style={{marginTop:'15px'}}>
            <Row>
                <Col sm='4' />
                <Col sm='2' className="test" style={{ borderRight: 'white' }}>
                    <img src={image} alt={name} className="shrink" />
                </Col>
                <Col sm='2' className="test" style={{ borderLeft: 'white' }}>
                    <br />
                    <a style={{ fontSize: 30, display: 'flex', justifyContent: 'left' }}>{name}</a>
                    <a style={{ fontSize: 20, display: 'flex', justifyContent: 'left' }}>{genre}</a>
                    <br />
                    {discription}
                </Col>
            </Row>
        </Table>
    )
};

export default Discription;