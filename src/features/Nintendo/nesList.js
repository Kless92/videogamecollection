import { selectAll } from "./nesSlice";
import { Col, Row, Table } from "reactstrap";
import GameDisplay from "../Display/GameDisplay";

const NesList = () => {
    const a = selectAll();
    return (
        <Table>
            <Row xs={12} sm={12} md={3} lg={3}>
                {a.map((b) => {
                    return (
                        GameDisplay(b)
                    )
                })}
            </Row>
        </Table>
    )
};

export default NesList;