import { Container } from "reactstrap";
import NesList from "../../features/Nintendo/nes/NesList";
import nes from "../../app/assets/images/Nintendo/nes/nes.jpg"

const NesPage = () => {
    return (
        <div style={{backgroundImage: `url(${nes})`}}>
            <Container >
                <h1>Nintendo Entertainment System Collection</h1>
                <NesList />
            </Container>
        </div>
    )
};

export default NesPage;