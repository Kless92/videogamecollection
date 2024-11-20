import { Container } from "reactstrap";
import CdromList from "../../features/Mis/CdromList";
import cdRom from "../../app/assets/images/CDROM/cdRom.png";
import cdromImage from "../../app/assets/images/CDROM/cdromImage.gif";

const CdromPage = () => {
    return (
        <div style={{backgroundImage: `url(${cdRom})`}}>
                <img className="test" src={cdromImage} alt={'File Missing'} 
                style={{marginTop:'25px', marginBottom:'20px', width:'25%'}} />
            <Container>
                <CdromList/>
            </Container>
        </div>
    )
}

export default CdromPage;