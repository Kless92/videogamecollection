import { Container } from "reactstrap";
import Ps3List from "../../features/Sony/ps3/Ps3List";
import ps3 from "../../app/assets/images/Sony/ps3/ps3.png";

const PS3Page = () => {
    return (
        <div style={{backgroundImage: `url(${ps3})`}}>
            <Container>
                <h1>Play Station 3 Collection</h1>
                <Ps3List/>
            </Container>
        </div>
    )
};

export default PS3Page;