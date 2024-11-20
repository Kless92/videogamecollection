import { Container } from "reactstrap";
import Atari26List from "../../features/Atari/Atari26List";
import atari2600 from "../../app/assets/images/Atari/atari2600.png"
import atari2600Image from "../../app/assets/images/Atari/Atari2600logo.svg.png";

const Atari2600Page = () => {
    return (
        <div style={{backgroundImage: `url(${atari2600})`}}>
                <img className="test" src={atari2600Image} alt={'File Missing'} 
                style={{marginTop:'25px', marginBottom:'20px', width:'50%'}} />
            <Container>
                <Atari26List/>
            </Container>
        </div>
    )
};

export default Atari2600Page;