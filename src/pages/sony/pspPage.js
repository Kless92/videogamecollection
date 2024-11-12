import { Container } from "reactstrap";
import PspList from "../../features/Sony/psp/PspList";
import psp from "../../app/assets/images/Sony/psp/psp.jpg";

const PSPPage = () => {
    return (
        <div style={{backgroundImage: `url(${psp})`}}>
            <Container>
                <h1>Playstation Portable Collection</h1>
                <PspList/>
            </Container>
        </div>
    )
};

export default PSPPage;