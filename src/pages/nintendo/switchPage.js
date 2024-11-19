import { Container } from "reactstrap";
import SwitchList from "../../features/Nintendo/switch/SwitchList";
import sw from "../../app/assets/images/Nintendo/switch/switch.jpg";
import switchImage from "../../app/assets/images/Nintendo/Switch_logo.svg.png";

const SwitchPage = () => {
    return (
        <div style={{backgroundImage: `url(${sw})`}}>
            <img className="test" src={switchImage} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'14%'}}/>
            <Container> 
                <SwitchList/>
            </Container>
        </div>
    )
};

export default SwitchPage;