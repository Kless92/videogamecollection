import { Container } from "reactstrap";
import Ps4List from '../../features/Sony/ps4/Ps4List';
import ps4 from "../../app/assets/images/Sony/ps4/ps4.png";

const PS4Page = () => {
    return (
        <div style={{backgroundImage: `url(${ps4})`}}>
            <Container>
                <h1>Play Station 4 Collection</h1>
                <Ps4List/>
            </Container>
        </div>
    )
};

export default PS4Page;