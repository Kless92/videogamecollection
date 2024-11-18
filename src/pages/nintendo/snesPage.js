import { Container } from "reactstrap";
import SnesList from "../../features/Nintendo/snes/SnesList";
import snes from "../../app/assets/images/Nintendo/snes/snes.jpg";
import snesImage from "../../app/assets/images/Nintendo/SNES_logo.svg.png";

const SnesPage = () => {
    return (
        <div style={{backgroundImage: `url(${snes})`}}>
            <img className="test" src={snesImage} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px'}}/>
            <Container>
                <SnesList/>
            </Container>
        </div>
    )
};

export default SnesPage;