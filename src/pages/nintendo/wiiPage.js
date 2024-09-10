import { Container } from "reactstrap";
import WiiList from "../../features/Nintendo/wii/WiiList";

const WiiPage = () => {
    return (
        <Container>
            <h1>Nintendo Wii Collection</h1>
            <WiiList/>
        </Container>
    )
};

export default WiiPage;