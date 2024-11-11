import { Container } from "reactstrap";
import WiiList from "../../features/Nintendo/wii/WiiList";
import wii from "../../app/assets/images/Nintendo/wii/wii.png"

const WiiPage = () => {
    return (
        <div style={{backgroundImage: `url(${wii})`}}>
            <Container> 
                <h1>Nintendo Wii Collection</h1>
                <WiiList/>
            </Container>
        </div>
    )
};

export default WiiPage;