import { Container } from "reactstrap";
import WiiList from "../../features/Nintendo/wii/WiiList";
import wii from "../../app/assets/images/Nintendo/wii/wii.png"

const WiiPage = () => {
    return (
        <Container style={{backgroundImage: `url(${wii})`}}> 
            <h1>Nintendo Wii Collection</h1>
            <WiiList/>
        </Container>
    )
};

export default WiiPage;