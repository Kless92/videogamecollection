import { Container } from "reactstrap";
import SwitchList from "../../features/Nintendo/switch/SwitchList";
import sw from "../../app/assets/images/Nintendo/switch/switch.jpg"

const SwitchPage = () => {
    return (
        <div style={{backgroundImage: `url(${sw})`}}>
            <Container> 
                <h1>Nintendo Switch Collection</h1>
                <SwitchList/>
            </Container>
        </div>
    )
};

export default SwitchPage;