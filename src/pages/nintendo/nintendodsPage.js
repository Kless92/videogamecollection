import { Container } from "reactstrap";
import NintendodsList from "../../features/Nintendo/nintendods/NintendodsList";

const NintendodsPage = () => {
    return (
        <Container>
            <h1>Nintendo DS Collection</h1>
            <NintendodsList/>
        </Container>
    )
};

export default NintendodsPage;