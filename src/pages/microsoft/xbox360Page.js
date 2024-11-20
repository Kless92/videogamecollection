import { Container } from "reactstrap";
import Xbox360List from "../../features/Microsoft/xbox360/Xbox360List"
import xbox360 from "../../app/assets/images/Microsoft/xbox360/xbox360.jpg"
import xbox360Image from "../../app/assets/images/Microsoft/xbox360/Xbox_360_full_logo.svg.png";

const Xbox360Page = () => {
    return (
        <div style={{backgroundImage: `url(${xbox360})`}}>
            <img className="test" src={xbox360Image} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'50%', padding:"10px"}} />
            <Container>
                <Xbox360List/>
            </Container>
        </div>
    )
};

export default Xbox360Page;