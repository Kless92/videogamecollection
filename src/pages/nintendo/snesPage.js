import { Container } from "reactstrap";
import SnesList from "../../features/Nintendo/snes/SnesList";
import snes from "../../app/assets/images/Nintendo/snes/snes.jpg";

const SnesPage = () => {
    return (
        <Container style={{backgroundImage: `url(${snes})`}}>
            <h1>Super Nintendo Collection</h1>
            <SnesList/>
        </Container>
    )
};

export default SnesPage;