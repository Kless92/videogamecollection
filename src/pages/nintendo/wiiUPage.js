import { Container } from "reactstrap";
import WiiUList from "../../features/Nintendo/wiiU/WiiUList";
import wiiU from "../../app/assets/images/Nintendo/wiiu/wiiu.png"

const WiiUPage = () => {
    return (
        <Container style={{backgroundImage: `url(${wiiU})`}}>
            <h1>Nintendo Wii U Collection</h1>
            <WiiUList/>
        </Container>
    )
};

export default WiiUPage;