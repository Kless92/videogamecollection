import { Container } from "reactstrap";
import WiiUList from "../../features/Nintendo/wiiU/WiiUList";
import wiiU from "../../app/assets/images/Nintendo/wiiu/wiiu.png"
import wiiUImage from "../../app/assets/images/Nintendo/WiiU.svg.png"
const WiiUPage = () => {
    return (
        <div style={{backgroundImage: `url(${wiiU})`}}>
            <img className="test" src={wiiUImage} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'55%'}}/>
            <Container>
                <WiiUList/>
            </Container>
        </div>
    )
};

export default WiiUPage;