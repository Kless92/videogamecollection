import { Col, Row, Table } from "reactstrap";
import {useParams} from "react-router-dom";
import { selectNESById } from "../Nintendo/nesSlice";

const Discription = ({items}) => {
    //const {gameId} = useParams();
    //const items = selectNESById(gameId);
    const { name, image, genre, discription} = items

    return (
        
        <Table>
            <Row>
                <Col sm='4'/>
                <Col sm='2'>
                    <img src={image} alt={name} />
                </Col>
                <Col sm='1'>
                    <br/>
                    {name}
                    <br/>
                    {genre}
                    <br/>
                    {discription}
                </Col>

            </Row>
        </Table>
    )
};

export default Discription;