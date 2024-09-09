import { Container } from "reactstrap";
import NesList from "../../features/Nintendo/nes/NesList";


const NesPage = () => {
    return (
        <Container>
            <h1>Nintendo Entertainment System Collection</h1>
            <NesList />
        </Container>
    )
};

export default NesPage;