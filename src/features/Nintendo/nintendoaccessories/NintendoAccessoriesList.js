import { selectAll } from "./NintendoAccessoriesSlices";
import { Col, Row } from "reactstrap";
import GameDisplay from "../../Display/GameDisplay";

const NintendoAccessoriesList = () => {
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

export default NintendoAccessoriesList;