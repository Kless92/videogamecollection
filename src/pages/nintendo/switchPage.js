import { Container } from "reactstrap";
import SwitchList from "../../features/Nintendo/switch/SwitchList";
import sw from "../../app/assets/images/Nintendo/switch/switch.png"

const SwitchPage = () => {
    return (
        <Container style={{backgroundImage: `url(${sw})`}}> 
            <h1>Nintendo Switch Collection</h1>
            <SwitchList/>
        </Container>
    )
};

export default SwitchPage;