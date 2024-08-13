import { useContext } from "react";
import { selectAllTest, selectOnConsole } from "./testSlice";
import { Col, Row, Table } from "reactstrap";

const testList = () => {
    //Select all game from all consoles
    /*
    const a = selectAllTest();
    return (
        <>
            {a.map((b) => {
                const { id, console, name, image, genre } = b;
                return (
                    <Table>
                        <Row>
                            <Col>
                                <img src={image} alt={name} />
                                <br />
                                {name}
                                <br />
                                {genre}
                            </Col>
                        </Row>
                    </Table>
                )
            })}
        </>
    );*/
    const a = selectOnConsole('nes');
    const{id, console, name, image, genre} = a;
    return (
        <>
            <Table>
                <Row>
                    <Col>
                        <img src={image} alt={name}/>
                        <br/>
                        {name}
                        <br/>
                        {genre}
                    </Col>
                </Row>
            </Table>
        </>
    );
};

export default testList;