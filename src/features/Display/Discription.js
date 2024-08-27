import { Col, Row, Table } from "reactstrap";
import {useParams} from "react-router-dom";
import { selectNESById } from "../Nintendo/nesSlice";

const Discription = () => {
    const {gameId} = useParams();
    const items = selectNESById(gameId);
    const { id, name, image, genre, discription} = items

    return (
        
        <Table>
            <Col>
                <img src={image} alt={name} />
                <br/>
                {name}
                <br/>
                {genre}
                <br/>
                {discription}
            </Col>
        </Table>
    )
};

export default Discription;