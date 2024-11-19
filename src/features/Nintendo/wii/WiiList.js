import { selectAll } from "./wiiSlice";
import { Col, Row} from "reactstrap";
import GameDisplay from "../../Display/GameDisplay";

const WiiList = () => {
    const a = selectAll();
    return (
        <Col>
            <Row xs={3} sm={3} md={3} lg={3}>
                {a.map((b) => {
                    return (
                        <Col>
                            <GameDisplay items={b} />
                        </Col>
                    )
                })}
            </Row>
        </Col>
    )
};

export default WiiList;