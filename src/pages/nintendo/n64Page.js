import { Container } from "reactstrap";
import N64List from "../../features/Nintendo/n64/N64List";
import n64 from "../../app/assets/images/Nintendo/n64/n64.jpg"
import n64Image from "../../app/assets/images/Nintendo/N64_logo.png";

const N64Page = () => {
    return (
        <div style={{backgroundImage: `url(${n64})`}}>
            <img className="test" src={n64Image} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px',  width:'55%'}}/>
            <Container>
                <N64List/>
            </Container>
        </div>
    )
};

export default N64Page;