import { Container } from "reactstrap";
import Ps2List from "../../features/Sony/ps2/Ps2List";
import ps2 from "../../app/assets/images/Sony/ps2/ps2.jpg";

const PS2Page = () => {
    return (
        <div style={{backgroundImage: `url(${ps2})`}}>
            <Container>
                <h1>Play Station 2 Collection</h1>
                <Ps2List/>
            </Container>
        </div>
    )
};

export default PS2Page;