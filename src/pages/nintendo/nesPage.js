import { Container } from "reactstrap";
import NesList from "../../features/Nintendo/nes/NesList";
import nes from "../../app/assets/images/Nintendo/nes/nes.png"

const NesPage = () => {
    return (
        <Container style={{backgroundImage: `url(${nes})`}}>
            <h1>Nintendo Entertainment System Collection</h1>
            <NesList />
        </Container>
    )
};

export default NesPage;