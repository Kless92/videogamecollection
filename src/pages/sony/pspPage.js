import { Container } from "reactstrap";
import PspList from "../../features/Sony/psp/PspList";
import psp from "../../app/assets/images/Sony/psp/psp.jpg";
import playstationportable from "../../app/assets/images/Sony/psp/PSP_Logo.svg.png";

const PSPPage = () => {
    return (
        <div style={{backgroundImage: `url(${psp})`}}>
            <img className="test" src={playstationportable} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'40%', padding:"10px"}} />
            <Container>
                <PspList/>
            </Container>
        </div>
    )
};

export default PSPPage;