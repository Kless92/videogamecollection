import { Container } from "reactstrap";
import Ps1List from "../../features/Sony/ps1/Ps1List";
import ps1 from "../../app/assets/images/Sony/ps1/ps1.jpg";
import playstation1 from "../../app/assets/images/Sony/ps1/Playstation_logo_colour.svg.png";

const PS1Page = () => {
    return (
        <div style={{backgroundImage: `url(${ps1})`}}>
            <img className="test" src={playstation1} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'20%', padding:"10px"}} />
            <Container>
                <Ps1List/>
            </Container>
        </div>
    )
};

export default PS1Page;