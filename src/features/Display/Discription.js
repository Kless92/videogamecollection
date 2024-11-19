import { Col, Row, Table } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectNESById } from "../Nintendo/nes/nesSlice";

const Discription = ({ items }) => {
    //const {gameId} = useParams();
    //const items = selectNESById(gameId);
    const { name, image, genre, discription } = items

    return (
        <div className="test">
            <Row >
                <Col sm='4' />
                <Col sm='2'>
                    <img src={image} alt={name} className="shrink" />
                </Col>
                <Col sm='2' >
                    <br />
                    <a style={{fontSize: 30, display: 'flex', justifyContent: 'left'}}>{name}</a>
                    <a style={{fontSize: 20, display: 'flex', justifyContent: 'left'}}>{genre}</a>
                    <br/>
                    {discription}                 
                </Col>
            </Row>
        </div>
    )
};

export default Discription;