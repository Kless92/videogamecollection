import { Container, Row, Col } from "reactstrap";
import collectionOne from '../app/assets/images/gamesAndToys.jpeg';
import hdSetup from '../app/assets/images/hdSetup.jpeg';
import retroSetup from '../app/assets/images/retroSetup.jpeg';
const HomePage = () => {
    return (
        <div style={{margin: '25px'}}> 
            <h1>Welcome to my video game collection home page</h1>
            <Row >
                <Col>
                    <img src={retroSetup} alt={"ERROR"} className="test" style={{height: "400px"}}/>
                </Col>
                <Col>
                    <img src={hdSetup} alt={"ERROR"} className="test" style={{height: "400px"}}/>
                </Col>
                <Col>
                    <img src={collectionOne} alt={"ERROR"} className="test" style={{height: "400px"}}/>
                </Col>
            </Row>
        </div>
    )
};

export default HomePage;