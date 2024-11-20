import { Container } from "reactstrap";
import Ps3List from "../../features/Sony/ps3/Ps3List";
import ps3 from "../../app/assets/images/Sony/ps3/ps3.png";
import playstation3 from "../../app/assets/images/Sony/ps3/PlayStation_3_logo_(2009).svg.png";

const PS3Page = () => {
    return (
        <div style={{backgroundImage: `url(${ps3})`}}>
            <img className="test" src={playstation3} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'40%', padding:"10px"}} />
            <Container>
                <Ps3List/>
            </Container>
        </div>
    )
};

export default PS3Page;