import { Container } from "reactstrap";
import Ps5List from "../../features/Sony/ps5/Ps5List";
import ps5 from "../../app/assets/images/Sony/ps5/ps5.png";
import playstation5 from "../../app/assets/images/Sony/ps5/PlayStation_5_logo_and_wordmark.svg.png";

const PS5Page = () => {
    return (
        <div style={{backgroundImage: `url(${ps5})`}}>
            <img className="test" src={playstation5} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'40%', padding:"10px"}} />
            <Container>
                <Ps5List/>
            </Container>
        </div>
    )
};

export default PS5Page;