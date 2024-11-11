import { Container } from "reactstrap";
import WiiUList from "../../features/Nintendo/wiiU/WiiUList";
import wiiU from "../../app/assets/images/Nintendo/wiiu/wiiu.png"

const WiiUPage = () => {
    return (
        <div style={{backgroundImage: `url(${wiiU})`}}>
            <Container>
                <h1>Nintendo Wii U Collection</h1>
                <WiiUList/>
            </Container>
        </div>
    )
};

export default WiiUPage;