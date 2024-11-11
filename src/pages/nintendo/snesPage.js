import { Container } from "reactstrap";
import SnesList from "../../features/Nintendo/snes/SnesList";
import snes from "../../app/assets/images/Nintendo/snes/snes.jpg";

const SnesPage = () => {
    return (
        <div style={{backgroundImage: `url(${snes})`}}>
            <Container>
                <h1>Super Nintendo Collection</h1>
                <SnesList/>
            </Container>
        </div>
    )
};

export default SnesPage;