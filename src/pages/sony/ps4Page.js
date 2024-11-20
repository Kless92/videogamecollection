import { Container } from "reactstrap";
import Ps4List from '../../features/Sony/ps4/Ps4List';
import ps4 from "../../app/assets/images/Sony/ps4/ps4.png";
import playstation4 from "../../app/assets/images/Sony/ps4/PlayStation_4_logo_and_wordmark.svg.png";

const PS4Page = () => {
    return (
        <div style={{backgroundImage: `url(${ps4})`}}>
            <img className="test" src={playstation4} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'40%', padding:"10px"}} />
            <Container>
                <Ps4List/>
            </Container>
        </div>
    )
};

export default PS4Page;