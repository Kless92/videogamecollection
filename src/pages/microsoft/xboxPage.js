import { Container } from "reactstrap";
import OriginalXboxList from "../../features/Microsoft/originalXbox/OriginalXboxList";
import originalXbox from "../../app/assets/images/Microsoft/originalXbox/originalXbox.jpg";
import originalxboxImage from "../../app/assets/images/Microsoft/originalXbox/Xbox_original_logo_black.png";

const XboxPage = () => {
    return (
        <div style={{backgroundImage: `url(${originalXbox})`}}>
            <img className="test" src={originalxboxImage} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'50%'}} />
            <Container>
                <OriginalXboxList/>
            </Container>
        </div>
    )
};

export default XboxPage;