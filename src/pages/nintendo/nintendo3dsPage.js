import { Container } from "reactstrap";
import Nintendo3dsList from "../../features/Nintendo/nintendo3ds/Nintendo3dsList";
import threeDS from "../../app/assets/images/Nintendo/3ds/3ds.jpg"
import nintendo3DSImage from "../../app/assets/images/Nintendo/Nintendo_3DS_logo.svg.png";

const Nintendo3dsPage = () => {
    return (
        <div style={{backgroundImage: `url(${threeDS})`}}>
            <img className="test" src={nintendo3DSImage} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'55%', padding:"10px"}}/>
            <Container>
                <Nintendo3dsList/>
            </Container>
        </div>
    )
};

export default Nintendo3dsPage;