import { Container } from "reactstrap";
import GenesisList from "../../features/Sega/genesis/GenesisList";
import segaGenesis from "../../app/assets/images/Sega/gensesis/segaGenesis.jpg";

const GenesisPage = () => {
    return (
        <div style={{backgroundImage: `url(${segaGenesis})`}}>
            <Container>
                <h1>Sega Genesis Collection</h1>
                <GenesisList/>
            </Container>
        </div>
    )
};

export default GenesisPage;