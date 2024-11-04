import { Container } from "reactstrap";
import Nintendo3dsList from "../../features/Nintendo/nintendo3ds/Nintendo3dsList";

const Nintendo3dsPage = () => {
    return (
        <Container>
            <h1>Nintendo 3DS Collection</h1>
            <Nintendo3dsList/>
        </Container>
    )
};

export default Nintendo3dsPage;