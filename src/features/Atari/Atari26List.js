import { selectAll } from "./atari26Slice";
import { Col, Row, Table } from "reactstrap";
import GameDisplay from "../Display/GameDisplay";

const Atari26List = () => {
    const a = selectAll();
    return (
        <Table>
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
        </Table>
    )
};

export default Atari26List;