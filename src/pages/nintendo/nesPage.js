import { Container} from "reactstrap";
import NesList from "../../features/Nintendo/nes/NesList";
import nes from "../../app/assets/images/Nintendo/nes/nes.jpg"
import nesImage from "../../app/assets/images/Nintendo/NES_logo.svg.png";

const NesPage = () => {
    return (
        <div style={{backgroundImage: `url(${nes})`}}>
            <img className="test" src={nesImage} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px'}}/>
            <Container >
                <NesList />
            </Container>
        </div>
    )
};

export default NesPage;