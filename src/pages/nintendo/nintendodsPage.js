import { Container } from "reactstrap";
import NintendodsList from "../../features/Nintendo/nintendods/NintendodsList";
import dS from "../../app/assets/images/Nintendo/ds/ds.jpg"

const NintendodsPage = () => {
    return (
        <div style={{backgroundImage: `url(${dS})`}}>
            <Container>
                <h1>Nintendo DS Collection</h1>
                <NintendodsList/>
            </Container>
        </div>
    )
};

export default NintendodsPage;