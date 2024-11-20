import { Container } from "reactstrap";
import GenesisList from "../../features/Sega/genesis/GenesisList";
import segaGenesis from "../../app/assets/images/Sega/gensesis/segaGenesis.jpg";
import segagenesisImage from "../../app/assets/images/Sega/gensesis/GenesisLogo.png";

const GenesisPage = () => {
    return (
        <div style={{backgroundImage: `url(${segaGenesis})`}}>
            <img className="test" src={segagenesisImage} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'50%', padding:"10px"}} />
            <Container>
                <GenesisList/>
            </Container>
        </div>
    )
};

export default GenesisPage;