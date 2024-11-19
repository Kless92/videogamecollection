import { selectAll } from "./NintendodsSlices";
import { Col, Row } from "reactstrap";
import GameDisplay from "../../Display/GameDisplay";

const NintendodsList = () => {
    const a = selectAll();
    return (
        <Col>
            <Row xs={3} sm={12} md={3} lg={3}>
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

export default NintendodsList;