import { selectAll } from "./cdromSlice";
import { Col, Row, Table } from "reactstrap";
import GameDisplay from "../Display/GameDisplay";

const CdromList = () => {
    const a = selectAll();
    return (
            <Col>
                <Row xs={12} sm={12} md={3} lg={3}>
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

export default CdromList;