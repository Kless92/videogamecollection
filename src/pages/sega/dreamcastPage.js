import { Container } from "reactstrap";
import DreamcastList from "../../features/Sega/dreamcast/DreamcastList";
import dreamCast from "../../app/assets/images/Sega/dreamcast/dreamCast.png";
import dreamcastImage from "../../app/assets/images/Sega/dreamcast/Dreamcast_logo_Japan.svg.png";

const DreamCastPage = () => {
    return (
        <div style={{backgroundImage: `url(${dreamCast})`}}>
            <img className="test" src={dreamcastImage} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'25%', padding:"10px"}} />
            <Container>
                <DreamcastList/>
            </Container>
        </div>
    )
};

export default DreamCastPage;