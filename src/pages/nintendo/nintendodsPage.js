import { Container } from "reactstrap";
import NintendodsList from "../../features/Nintendo/nintendods/NintendodsList";
import dS from "../../app/assets/images/Nintendo/ds/ds.jpg"
import nintendoDSImage from "../../app/assets/images/Nintendo/Nintendo_DS_Logo.svg.png";

const NintendodsPage = () => {
    return (
        <div style={{backgroundImage: `url(${dS})`}}>
            <img className="test" src={nintendoDSImage} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'55%', padding:"10px"}} />
            <Container>
                <NintendodsList/>
            </Container>
        </div>
    )
};

export default NintendodsPage;