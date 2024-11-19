import { Container } from "reactstrap";
import WiiList from "../../features/Nintendo/wii/WiiList";
import wii from "../../app/assets/images/Nintendo/wii/wii.png"
import wiiImage from "../../app/assets/images/Nintendo/Wii.svg.png";

const WiiPage = () => {
    return (
        <div style={{backgroundImage: `url(${wii})`}}>
            <img className="test" src={wiiImage} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'35%' }}/>
            <Container> 
                <WiiList/>
            </Container>
        </div>
    )
};

export default WiiPage;