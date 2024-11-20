import { Container } from "reactstrap";
import Ps2List from "../../features/Sony/ps2/Ps2List";
import ps2 from "../../app/assets/images/Sony/ps2/ps2.jpg";
import playstation2 from "../../app/assets/images/Sony/ps2/PlayStation_2_logo.svg.png";

const PS2Page = () => {
    return (
        <div style={{backgroundImage: `url(${ps2})`}}>
            <img className="test" src={playstation2} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'40%', padding:"10px"}} />
            <Container>
                <Ps2List/>
            </Container>
        </div>
    )
};

export default PS2Page;