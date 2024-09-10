import { Container } from "reactstrap";
import WiiUList from "../../features/Nintendo/wiiU/WiiUList";

const WiiUPage = () => {
    return (
        <Container>
            <h1>Nintendo Wii U Collection</h1>
            <WiiUList/>
        </Container>
    )
};

export default WiiUPage;