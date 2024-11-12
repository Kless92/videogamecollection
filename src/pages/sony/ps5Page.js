import { Container } from "reactstrap";
import Ps5List from "../../features/Sony/ps5/Ps5List";
import ps5 from "../../app/assets/images/Sony/ps5/ps5.png";

const PS5Page = () => {
    return (
        <div style={{backgroundImage: `url(${ps5})`}}>
            <Container>
                <h1>Play Station 5 Collection</h1>
                <Ps5List/>
            </Container>
        </div>
    )
};

export default PS5Page;